import { createContext, useContext, useState, ReactNode } from 'react'

export interface CartItem {
  size: string
  qty: number
  price: number
}

interface CartCtx {
  items: CartItem[]
  addToCart: (size: string, qty: number, price: number) => void
  removeItem: (size: string) => void
  updateQty: (size: string, qty: number) => void
  total: number
  count: number
  isOpen: boolean
  setIsOpen: (v: boolean) => void
}

const Ctx = createContext<CartCtx | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addToCart = (size: string, qty: number, price: number) => {
    setItems(prev => {
      const existing = prev.find(i => i.size === size)
      if (existing) return prev.map(i => i.size === size ? { ...i, qty: i.qty + qty } : i)
      return [...prev, { size, qty, price }]
    })
    setIsOpen(true)
  }

  const removeItem = (size: string) => setItems(prev => prev.filter(i => i.size !== size))

  const updateQty = (size: string, qty: number) => {
    if (qty < 1) return removeItem(size)
    setItems(prev => prev.map(i => i.size === size ? { ...i, qty } : i))
  }

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const count = items.reduce((sum, i) => sum + i.qty, 0)

  return (
    <Ctx.Provider value={{ items, addToCart, removeItem, updateQty, total, count, isOpen, setIsOpen }}>
      {children}
    </Ctx.Provider>
  )
}

export function useCart() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useCart must be inside CartProvider')
  return ctx
}
