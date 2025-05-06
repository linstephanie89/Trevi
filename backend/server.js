// server.js (Google Sheets via ENV vars, ESM-compatible)

import express from 'express'
import bodyParser from 'body-parser'
import { google } from 'googleapis'
import path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'

// __dirname shim for ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(cors())
app.use(bodyParser.json())

// Google Sheets authentication using ENV vars
const auth = new google.auth.GoogleAuth({
  credentials: {
    type: process.env.GOOGLE_TYPE,
    project_id: process.env.GOOGLE_PROJECT_ID,
    private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_CLIENT_ID,
    auth_uri: process.env.GOOGLE_AUTH_URI,
    token_uri: process.env.GOOGLE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.GOOGLE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.GOOGLE_CLIENT_X509_CERT_URL,
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
})

const sheets = google.sheets({ version: 'v4', auth })

// Spreadsheet ID and sheet tab names
const SPREADSHEET_ID = '1tAv6v211tajvMgtAxSVeGdy23iq-2xRd2bSf0hfEVLA'
const EARLY_ACCESS_TAB = 'EarlyAccess'
const DOWNLOADS_TAB = 'Downloads'

// Helper: log and append to Google Sheet
async function appendRow(sheetName, values) {
  try {
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${sheetName}!A1`, // auto-append
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: [values] },
    })
    console.log(`✅ Wrote to Google Sheet [${sheetName}]`, result.data.updates.updatedRange)
  } catch (err) {
    const detail = err.response?.data || err.message || err
    console.error(`❌ Failed to write to [${sheetName}]`, detail)
    throw new Error(`Google Sheets write failed: ${detail}`)
  }
}

// POST /api/early-access
app.post('/api/early-access', async (req, res) => {
  try {
    const { email, company = '', spend = '', pain = '', feedbackCall = false } = req.body
    const timestamp = new Date().toISOString()
    await appendRow(EARLY_ACCESS_TAB, [
      timestamp,
      email,
      company,
      spend,
      pain,
      feedbackCall ? 'Yes' : 'No',
    ])
    res.json({ success: true })
  } catch (err) {
    console.error('Early Access Error:', err.message)
    res.status(500).json({ error: 'Could not record early-access' })
  }
})

// POST /api/download
app.post('/api/download', async (req, res) => {
  try {
    const { email } = req.body
    const timestamp = new Date().toISOString()
    await appendRow(DOWNLOADS_TAB, [timestamp, email])
    res.json({ success: true })
  } catch (err) {
    console.error('Download Error:', err.message)
    res.status(500).json({ error: 'Could not record download' })
  }
})

// Start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`🚀 Trevi backend running on port ${PORT}`)
})
