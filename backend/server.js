// server.js (ESM-based Express backend)

import express from 'express'
import bodyParser from 'body-parser'
import { createObjectCsvWriter } from 'csv-writer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'

// Shim __dirname for ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(cors())
app.use(bodyParser.json())

// Determine shared data directory (relative to backend folder)
const dataDir = path.resolve(__dirname, '../shared/data')
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true })

// File paths
const earlyCsvPath = path.join(dataDir, 'early_access.csv')
const downloadsCsvPath = path.join(dataDir, 'downloads.csv')

// CSV writers
const earlyCsvWriter = createObjectCsvWriter({
  path: earlyCsvPath,
  header: [
    { id: 'timestamp', title: 'Timestamp' },
    { id: 'email', title: 'Email' },
    { id: 'company', title: 'Company' },
    { id: 'spend', title: 'Spend' },
    { id: 'pain', title: 'Pain' },
    { id: 'feedbackCall', title: 'FeedbackCall' },
  ],
  append: fs.existsSync(earlyCsvPath),
})

const downloadsCsvWriter = createObjectCsvWriter({
  path: downloadsCsvPath,
  header: [
    { id: 'timestamp', title: 'Timestamp' },
    { id: 'email', title: 'Email' },
  ],
  append: fs.existsSync(downloadsCsvPath),
})

// Early-access route
app.post('/api/early-access', async (req, res) => {
  try {
    const { email, company = '', spend = '', pain = '', feedbackCall = false } = req.body
    await earlyCsvWriter.writeRecords([
      {
        timestamp: new Date().toISOString(),
        email,
        company,
        spend,
        pain,
        feedbackCall: feedbackCall ? 'Yes' : 'No',
      },
    ])
    res.json({ success: true })
  } catch (err) {
    console.error('Early Access Error:', err)
    res.status(500).json({ error: 'Could not record early-access' })
  }
})

// Download route
app.post('/api/download', async (req, res) => {
  try {
    const { email } = req.body
    await downloadsCsvWriter.writeRecords([
      {
        timestamp: new Date().toISOString(),
        email,
      },
    ])
    res.json({ success: true })
  } catch (err) {
    console.error('Download Error:', err)
    res.status(500).json({ error: 'Could not record download' })
  }
})

// Start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})
