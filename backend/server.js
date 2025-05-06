// server.js
import express        from 'express'
import bodyParser     from 'body-parser'
import { createObjectCsvWriter } from 'csv-writer'
import fs             from 'fs'
import path           from 'path'
import { fileURLToPath } from 'url'

// ——— shim __dirname for ESM ———
const __filename = fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filename)

const app = express()
app.use(bodyParser.json())

// ensure a data folder exists
const dataDir = path.join(__dirname, 'data')
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir)

// CSV writers…
const earlyCsvPath     = path.join(dataDir, 'early_access.csv')
const downloadsCsvPath = path.join(dataDir, 'downloads.csv')

const earlyCsvWriter = createObjectCsvWriter({
  path:   earlyCsvPath,
  header: [
    { id: 'timestamp',    title: 'Timestamp'    },
    { id: 'email',        title: 'Email'        },
    { id: 'company',      title: 'Company'      },
    { id: 'spend',        title: 'Spend'        },
    { id: 'pain',         title: 'Pain'         },
    { id: 'feedbackCall', title: 'FeedbackCall' },
  ],
  append: fs.existsSync(earlyCsvPath),
})

const downloadsCsvWriter = createObjectCsvWriter({
  path:   downloadsCsvPath,
  header: [
    { id: 'timestamp', title: 'Timestamp' },
    { id: 'email',     title: 'Email'     },
  ],
  append: fs.existsSync(downloadsCsvPath),
})

// ——— Early-access endpoint ———
app.post('/api/early-access', async (req, res) => {
  try {
    const { email, company, spend, pain, feedbackCall } = req.body
    await earlyCsvWriter.writeRecords([{
      timestamp:    new Date().toISOString(),
      email,
      company:      company || '',
      spend:        spend   || '',
      pain:         pain    || '',
      feedbackCall: feedbackCall ? 'Yes' : 'No',
    }])
    res.json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Could not record early-access' })
  }
})

// ——— Download endpoint ———
app.post('/api/download', async (req, res) => {
  try {
    const { email } = req.body
    await downloadsCsvWriter.writeRecords([{
      timestamp: new Date().toISOString(),
      email,
    }])
    res.json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Could not record download' })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
