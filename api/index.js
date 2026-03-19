import express from 'express';
import pg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;
const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Initialize database schema
const initDb = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS poll_responses (
        id SERIAL PRIMARY KEY,
        selections JSONB NOT NULL,
        voted_for_amarachi BOOLEAN NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Database initialized');
  } catch (err) {
    console.error('Error initializing database:', err);
  }
};

initDb();

app.post('/api/poll', async (req, res) => {
  const { selections, votedForAmarachi } = req.body;
  
  try {
    const result = await pool.query(
      'INSERT INTO poll_responses (selections, voted_for_amarachi) VALUES ($1, $2) RETURNING *',
      [JSON.stringify(selections), votedForAmarachi]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error saving poll response:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/stats', async (req, res) => {
  try {
    const totalVotes = await pool.query('SELECT COUNT(*) FROM poll_responses');
    const amarachiVotes = await pool.query('SELECT COUNT(*) FROM poll_responses WHERE voted_for_amarachi = true');
    
    res.json({
      total: parseInt(totalVotes.rows[0].count),
      amarachi: parseInt(amarachiVotes.rows[0].count)
    });
  } catch (err) {
    console.error('Error fetching stats:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default app;
