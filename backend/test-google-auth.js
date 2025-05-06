// test-google-auth.js
import { google } from 'googleapis'
import fs from 'fs'

// Load credentials directly from your service-account.json file
const credentials = JSON.parse(fs.readFileSync('./service-account.json', 'utf-8'))

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
})

const sheets = google.sheets({ version: 'v4', auth })

// Replace with your actual spreadsheet ID
const SPREADSHEET_ID = '1tAv6v211tajvMgtAxSVeGdy23iq-2xRd2bSf0hfEVLA'

async function testConnection() {
  try {
    const res = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID })
    console.log('✅ Google Sheets API is working. Sheet title:', res.data.properties.title)
  } catch (err) {
    console.error('❌ Failed to connect to Google Sheets:')
    console.error(err.response?.data || err.message || err)
  }
}

testConnection()
