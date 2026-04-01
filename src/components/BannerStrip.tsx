import { motion } from 'framer-motion'
import { useInView } from './useInView'

export default function BannerStrip() {
  const { ref, inView } = useInView()

  return (
    <section ref={ref} style={{
      position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(135deg, #1a3a1a 0%, #2d6a2d 100%)',
      minHeight: 320,
      display: 'flex', alignItems: 'center',
    }}>
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=1400)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.2,
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '3rem 2rem', width: '100%', position: 'relative', zIndex: 1 }}
        className="banner-grid">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }} className="banner-grid">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '0.7rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', padding: '0.35rem 0.9rem', borderRadius: 4, marginBottom: '1rem' }}>
              Limited Time Offer
            </span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#fff', lineHeight: 1.2, marginBottom: '1rem' }}>
              Spring Into Natural<br />Oral Care
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.8rem', maxWidth: 380 }}>
              Get <strong style={{ color: '#a8d5a8' }}>25% off</strong> on all herbal tooth powders this season. Use code <strong style={{ color: '#fff' }}>HERBAL25</strong> at checkout.
            </p>
            <a href="#shop" style={{
              display: 'inline-block', background: '#fff', color: '#2d6a2d',
              padding: '0.85rem 2rem', borderRadius: 6,
              fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)', transition: 'all 0.3s',
            }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = '')}>
              Shop the Sale
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="/img1.png"
              alt="Natural ingredients"
              style={{ width: '100%', maxWidth: 380, borderRadius: 16, objectFit: 'cover', aspectRatio: '4/3', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
