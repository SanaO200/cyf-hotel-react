import cors from 'cors'
import express from 'express'
import fakeBookings from './data/fakeBookings.js'
import fakeCustomers from './data/fakeCustomers.js'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send('Hello')
})

app.get('/customers', async (req, res) => {
  const randomTimeout = 1000 + Math.ceil(3 * 1000 * Math.random())
  setTimeout(() => {
    res.status(200).json({ data: fakeCustomers })
  }, randomTimeout)
})

app.get('/customers/:id', async (req, res) => {
  const id = req.params['id']
  const randomTimeout = 1000 + Math.ceil(3 * 1000 * Math.random())
  setTimeout(() => {
    const foundFakeCustomers = fakeCustomers.filter((c) => c.id === Number(id))
    if (foundFakeCustomers.length !== 0) {
      res.status(200).json({ foundFakeCustomers })
    } else {
      res.sendStatus(404)
    }
  }, randomTimeout)
})

app.get('/bookings', async (req, res) => {
  const randomNumber = Math.random()
  console.log('randomeNumner: ', randomNumber)

  if (randomNumber > 0.5) {
    res.sendStatus(500)
  } else if (randomNumber >= 0.4 && randomNumber < 0.5) {
    res.sendStatus(400)
  } else {
    const randomTimeout = 1000 + Math.ceil(3 * 1000 * Math.random())
    setTimeout(() => {
      res.status(200).json({ fakeBookings })
    }, randomTimeout)
  }
})

app.listen(process.env.PORT || 4000, function () {
  const addressInfo = this.address()
  console.log(`Server is listening on port ${addressInfo.port}. Ready to accept requests!`)
})
