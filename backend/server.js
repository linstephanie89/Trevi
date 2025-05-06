// server.js (Google Sheets-enabled Express backend)

import express from 'express'
import bodyParser from 'body-parser'
import { google } from 'googleapis'
import path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'

// Shim __dirname for ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(cors())
app.use(bodyParser.json())

// Google Sheets setup
const auth = new google.auth.GoogleAuth({
  keyFile: path.resolve(__dirname, 'service-account.json'), // Make sure this file is .gitignored
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
})
const sheets = google.sheets({ version: 'v4', auth })

// Your actual Google Sheet ID
const SPREADSHEET_ID = '1tAv6v211tajvMgtAxSVeGdy23iq-2xRd2bSf0hfEVLA'

// Helper to append a row
async function appendRow(sheetName, values) {
  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: `${sheetName}!A1`, // Automatically appends to next row
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [values],
    },
  })
}

// Early-access route
app.post('/api/early-access', async (req, res) => {
  try {
    const { email, company = '', spend = '', pain = '', feedbackCall = false } = req.body
    const timestamp = new Date().toISOString()
    await appendRow('EarlyAccess', [timestamp, email, company, spend, pain, feedbackCall ? 'Yes' : 'No'])
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
    const timestamp = new Date().toISOString()
    await appendRow('Downloads', [timestamp, email])
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
