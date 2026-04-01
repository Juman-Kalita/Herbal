import { motion } from 'framer-motion'
import { useInView } from './useInView'

export default function PromoBanner() {
  const { ref, inView } = useInView()

  return (
    <section ref={ref} style={{
      position: 'relative', overflow: 'hidden',
      background: '#1a3a1a',
      padding: '4rem 2rem',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=1400)',
        backgroundSize: 'cover', backgroundPosition: 'center 30%',
        opacity: 0.3,
      }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: '0.8rem' }}>
            Seasonal Offer
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '0.5rem' }}>
            Spring Into Green
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', marginBottom: '1.8rem' }}>
            <strong style={{ color: '#a8d5a8', fontSize: '1.4rem' }}>25% Off</strong> All Herbal Tooth Powders
          </p>
          <a href="#shop" style={{
            display: 'inline-block', background: '#fff', color: '#2d6a2d',
            padding: '0.85rem 2rem', borderRadius: 6,
            fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          }}>Shop Now</a>
        </motion.div>
      </div>
    </section>
  )
}
