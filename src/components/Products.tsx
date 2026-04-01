import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { product } from '../data'
import { useCart } from '../store/CartContext'
import { Star, ShoppingCart, Check, Minus, Plus } from 'lucide-react'

export default function Products() {
  const { ref, inView } = useInView()
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const sizePrice: Record<string, number> = { '50g': 299, '100g': 499, '200g': 849 }
  const price = sizePrice[selectedSize] ?? product.price
  const original = Math.round(price * 1.67)

  const handleAdd = () => {
    addToCart(selectedSize, qty, price)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <section id="shop" style={{ padding: '5rem 2rem', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ display: 'inline-block', color: '#2d6a2d', fontSize: '0.75rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Our Product
          </span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#1c2b1c' }}>
            Ayufresh Green Breath Care
          </h2>
        </motion.div>

        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="product-showcase">

          {/* Image */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}
            style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: -20,
              background: 'radial-gradient(circle, rgba(61,139,61,0.08) 0%, transparent 70%)',
              borderRadius: '50%',
            }} />
            <img src="/img1.png" alt="Ayufresh Green Breath Care"
              style={{ width: '100%', borderRadius: 24, boxShadow: '0 32px 80px rgba(60,120,60,0.18)', objectFit: 'cover', position: 'relative', zIndex: 1 }} />
            <div style={{
              position: 'absolute', top: 20, left: 20,
              background: '#c9a84c', color: '#fff',
              fontSize: '0.72rem', fontWeight: 700, padding: '0.3rem 0.8rem',
              borderRadius: 4, letterSpacing: 0.5,
            }}>Best Seller</div>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="#f59e0b" color="#f59e0b" />)}
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1c2b1c' }}>{product.rating}</span>
              <span style={{ fontSize: '0.8rem', color: '#7a8f7a' }}>({product.reviews} reviews)</span>
            </div>

            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#1c2b1c', marginBottom: '0.4rem', lineHeight: 1.2 }}>
              {product.name}
            </h3>
            <p style={{ color: '#7a8f7a', fontSize: '0.88rem', marginBottom: '1.2rem' }}>{product.subtitle}</p>
            <p style={{ color: '#3a4f3a', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>{product.description}</p>

            {/* Benefits */}
            <ul style={{ listStyle: 'none', marginBottom: '1.8rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {product.benefits.map(b => (
                <li key={b} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: '#3a4f3a' }}>
                  <Check size={15} color="#2d6a2d" strokeWidth={2.5} />
                  {b}
                </li>
              ))}
            </ul>

            {/* Size selector */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1c2b1c', marginBottom: '0.6rem' }}>Select Size</div>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                {product.sizes.map(s => (
                  <button key={s} onClick={() => setSelectedSize(s)}
                    style={{
                      padding: '0.5rem 1.2rem', borderRadius: 6,
                      border: selectedSize === s ? '2px solid #2d6a2d' : '1.5px solid #e0ece0',
                      background: selectedSize === s ? '#f0f8f0' : '#fff',
                      color: selectedSize === s ? '#2d6a2d' : '#3a4f3a',
                      fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '1.8rem' }}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 700, color: '#2d6a2d' }}>₹{price}</span>
              <span style={{ fontSize: '1.1rem', color: '#7a8f7a', textDecoration: 'line-through' }}>₹{original}</span>
              <span style={{ background: '#d4edda', color: '#2d6a2d', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.7rem', borderRadius: 50 }}>
                {Math.round((1 - price / original) * 100)}% OFF
              </span>
            </div>

            {/* Qty + Add to cart */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid #e0ece0', borderRadius: 8, overflow: 'hidden' }}>
                <button onClick={() => setQty(q => Math.max(1, q - 1))}
                  style={{ width: 40, height: 48, background: '#f5fbf5', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Minus size={14} />
                </button>
                <span style={{ width: 44, textAlign: 'center', fontWeight: 600, fontSize: '0.95rem' }}>{qty}</span>
                <button onClick={() => setQty(q => q + 1)}
                  style={{ width: 40, height: 48, background: '#f5fbf5', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Plus size={14} />
                </button>
              </div>

              <button onClick={handleAdd} style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                background: added ? '#3d8b3d' : 'linear-gradient(135deg, #3d8b3d, #2d6a2d)',
                color: '#fff', border: 'none', padding: '0.9rem 1.5rem',
                borderRadius: 8, fontWeight: 700, fontSize: '0.95rem',
                cursor: 'pointer', transition: 'all 0.3s',
                fontFamily: 'Poppins, sans-serif',
                boxShadow: '0 4px 20px rgba(45,106,45,0.3)',
              }}>
                {added ? <><Check size={18} /> Added!</> : <><ShoppingCart size={18} /> Add to Cart</>}
              </button>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.78rem', color: '#7a8f7a' }}>
              <span>🚚 Free shipping above ₹499</span>
              <span>🔄 30-day returns</span>
              <span>🔒 Secure checkout</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
