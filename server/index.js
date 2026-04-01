import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = 4000
const DB_FILE = path.join(__dirname, 'orders.json')

app.use(cors())
app.use(express.json())

// Load or init orders file
function loadOrders() {
  if (!fs.existsSync(DB_FILE)) fs.writeFileSync(DB_FILE, '[]')
  return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'))
}

function saveOrders(orders) {
  fs.writeFileSync(DB_FILE, JSON.stringify(orders, null, 2))
}

// POST /api/orders — place a new order
app.post('/api/orders', (req, res) => {
  const { name, phone, email, address, city, pincode, state, paymentMethod, items, total } = req.body

  // Basic validation
  if (!name || !phone || !address || !pincode || !paymentMethod || !items?.length) {
    return res.status(400).json({ error: 'Missing required fields' })
  }
  if (!/^\d{10}$/.test(phone)) {
    return res.status(400).json({ error: 'Phone must be 10 digits' })
  }
  if (!/^\d{6}$/.test(pincode)) {
    return res.status(400).json({ error: 'Pincode must be 6 digits' })
  }

  const orders = loadOrders()
  const order = {
    id: `ORD-${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: paymentMethod === 'cod' ? 'confirmed' : 'payment_pending',
    customer: { name, phone, email: email || '', address, city: city || '', pincode, state: state || '' },
    paymentMethod,
    items,
    total,
  }

  orders.push(order)
  saveOrders(orders)

  console.log(`\n✅ New Order: ${order.id} | ${name} | ₹${total} | ${paymentMethod.toUpperCase()}`)

  res.status(201).json({ success: true, orderId: order.id, status: order.status })
})

// GET /api/orders — list all orders (admin)
app.get('/api/orders', (req, res) => {
  res.json(loadOrders())
})

app.listen(PORT, () => {
  console.log(`\n🌿 HerbalSmile Server running at http://localhost:${PORT}`)
  console.log(`📦 Orders saved to: ${DB_FILE}\n`)
})
