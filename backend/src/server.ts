import express from 'express'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.get('/api', (req, res) => {
  res.json({ message: 'Hello, world!' })
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
