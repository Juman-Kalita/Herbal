import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from './useInView'

const thumbs = [
  '/img1.png',
  '/img1.png',
  '/img1.png',
  '/img1.png',
]

export default function Product() {
  const [main, setMain] = useState(thumbs[0])
  const { ref, inView } = useInView()

  return (
    <section id="product" style={{ padding: '7rem 2.5rem', background: 'linear-gradient(160deg, #f0f8f0 0%, #e0f0e0 100%)', textAlign: 'center' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <span style={labelStyle}>Featured</span>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--text)', marginBottom: '3rem', letterSpacing: '-0.5px' }}>
          Herbal Tooth Care Powder
        </h2>
      </motion.div>

      <div ref={ref} style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center', textAlign: 'left' }} className="product-grid">
        {/* Gallery */}
        <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
          <img src={main} alt="Product" style={{ width: '100%', borderRadius: 28, boxShadow: '0 32px 80px rgba(60,120,60,0.22)', objectFit: 'cover', aspectRatio: '4/5', transition: 'all 0.4s ease' }} />
          <div style={{ display: 'flex', gap: '0.8rem', marginTop: '1.2rem' }}>
            {thumbs.map((t, i) => (
              <img key={i} src={t.replace('w=600', 'w=150')} alt={`thumb${i}`}
                onClick={() => setMain(t)}
                style={{
                  width: 78, height: 78, borderRadius: 12, objectFit: 'cover', cursor: 'pointer',
                  border: main === t ? '2.5px solid var(--green)' : '2.5px solid transparent',
                  boxShadow: '0 2px 12px rgba(60,120,60,0.08)', transition: 'all 0.25s',
                }} />
            ))}
          </div>
        </motion.div>

        {/* Info */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', background: 'linear-gradient(135deg, #fff8e1, #fff3cd)', color: '#7a5c00', fontSize: '0.72rem', fontWeight: 700, padding: '0.35rem 1rem', borderRadius: 50, marginBottom: '1rem', border: '1px solid rgba(201,168,76,0.3)', letterSpacing: '0.5px' }}>
            ⭐ Best Seller
          </span>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', marginBottom: '0.6rem', color: 'var(--text)', letterSpacing: '-0.5px', lineHeight: 1.2 }}>
            Herbal Tooth Care Powder
          </h3>
          <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            ⭐⭐⭐⭐⭐ <span>(4.9 / 5 — 2,400+ reviews)</span>
          </div>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.8rem', fontSize: '0.95rem' }}>
            A unique blend of powerful natural ingredients like clove, neem, alum, and herbal extracts designed to give you healthier gums, fresher breath, and stronger teeth — naturally.
          </p>
          <div style={{ height: 1, background: 'linear-gradient(to right, rgba(107,179,104,0.2), transparent)', marginBottom: '1.5rem' }} />
          <div style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--green)', fontFamily: 'Playfair Display, serif', marginBottom: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            ₹299
            <span style={{ fontSize: '1.1rem', color: 'var(--text-muted)', textDecoration: 'line-through', fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>₹499</span>
            <span style={{ background: 'linear-gradient(135deg, #d4edda, #b8ddb8)', color: 'var(--green)', fontSize: '0.75rem', fontWeight: 700, padding: '0.3rem 0.8rem', borderRadius: 50, fontFamily: 'Poppins, sans-serif' }}>40% OFF</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <a href="#cta" style={btnPrimary}>Shop Now</a>
            <a href="#how-to-use" style={btnOutline}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--green)'; el.style.color = '#fff' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.color = 'var(--green)' }}>
              View Details
            </a>
          </div>
          <div style={{ display: 'flex', background: 'rgba(107,179,104,0.06)', borderRadius: 12, padding: '1rem 1.2rem', border: '1px solid rgba(107,179,104,0.12)', gap: 0 }}>
            {['🚚 Free Delivery', '🔄 Easy Returns', '🌿 100% Natural'].map((p, i, arr) => (
              <span key={p} style={{ fontSize: '0.8rem', color: 'var(--text-mid)', fontWeight: 500, padding: '0.2rem 1rem', borderRight: i < arr.length - 1 ? '1px solid rgba(107,179,104,0.2)' : 'none' }}>{p}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'inline-block',
  background: 'linear-gradient(135deg, rgba(107,179,104,0.15), rgba(107,179,104,0.08))',
  color: 'var(--green)', fontSize: '0.72rem', fontWeight: 700,
  letterSpacing: 3, textTransform: 'uppercase',
  padding: '0.4rem 1.2rem', borderRadius: 50, marginBottom: '1rem',
  border: '1px solid rgba(107,179,104,0.25)',
}

const btnPrimary: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', padding: '0.9rem 2.2rem',
  borderRadius: 50, background: 'linear-gradient(135deg, #5a9e57, #3d7a3a)',
  color: '#fff', fontWeight: 600, fontSize: '0.92rem', textDecoration: 'none',
  boxShadow: '0 6px 24px rgba(90,158,87,0.35)', transition: 'all 0.3s',
  fontFamily: 'Poppins, sans-serif',
}

const btnOutline: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', padding: '0.9rem 2.2rem',
  borderRadius: 50, background: 'transparent', color: 'var(--green)',
  border: '2px solid var(--green)', fontWeight: 600, fontSize: '0.92rem',
  textDecoration: 'none', transition: 'all 0.3s', fontFamily: 'Poppins, sans-serif',
}
