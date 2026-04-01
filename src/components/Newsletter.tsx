import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from './useInView'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const { ref, inView } = useInView()

  return (
    <section ref={ref} style={{
      background: 'linear-gradient(135deg, #2d6a2d 0%, #1a4a1a 100%)',
      padding: '4rem 2rem',
    }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.75rem' }}>🌿</span>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#fff', marginBottom: '0.75rem' }}>
          Get the Green in Your Inbox
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem', marginBottom: '2rem', lineHeight: 1.7 }}>
          Subscribe for Ayurvedic tips, exclusive offers, and early access to new products.
        </p>

        {sent ? (
          <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 8, padding: '1rem 2rem', color: '#fff', fontWeight: 600 }}>
            ✓ You're subscribed! Check your inbox.
          </div>
        ) : (
          <form onSubmit={e => { e.preventDefault(); if (email) setSent(true) }}
            style={{ display: 'flex', gap: '0.75rem', maxWidth: 480, margin: '0 auto' }}>
            <input
              type="email" value={email} onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              style={{
                flex: 1, padding: '0.85rem 1.2rem', borderRadius: 6,
                border: 'none', fontSize: '0.88rem',
                outline: 'none', fontFamily: 'Poppins, sans-serif',
              }} />
            <button type="submit" style={{
              background: '#fff', color: '#2d6a2d',
              padding: '0.85rem 1.5rem', borderRadius: 6,
              border: 'none', fontWeight: 700, fontSize: '0.88rem',
              cursor: 'pointer', whiteSpace: 'nowrap',
              transition: 'all 0.2s', fontFamily: 'Poppins, sans-serif',
            }}>
              Subscribe
            </button>
          </form>
        )}
      </motion.div>
    </section>
  )
}
