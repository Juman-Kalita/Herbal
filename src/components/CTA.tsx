import { motion } from 'framer-motion'
import { useInView } from './useInView'

export default function CTA() {
  const { ref, inView } = useInView()

  return (
    <section id="cta" style={{
      background: 'linear-gradient(150deg, #3d7a3a 0%, #2d5c2a 50%, #1e4a1b 100%)',
      padding: '8rem 2.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: -150, right: -100, width: 500, height: 500, background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', bottom: -100, left: -60, width: 300, height: 300, background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />

      <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
        style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: '3rem', marginBottom: '1.2rem' }}>🌿</div>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: '#fff', marginBottom: '1.2rem', letterSpacing: '-0.5px' }}>
          Experience Natural Dental Care Today
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', marginBottom: '2rem' }}>
          Join 10,000+ happy customers who've made the switch to nature.
        </p>
        <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', fontFamily: 'Playfair Display, serif', marginBottom: '2.5rem' }}>
          Only ₹299
          <span style={{ fontSize: '0.82rem', fontFamily: 'Poppins, sans-serif', fontWeight: 400, display: 'block', color: 'rgba(255,255,255,0.6)', marginTop: '0.3rem', letterSpacing: '0.5px' }}>
            Free Shipping Included
          </span>
        </div>
        <a href="#" style={{
          display: 'inline-flex', alignItems: 'center', padding: '1.1rem 2.8rem',
          borderRadius: 50, background: '#fff', color: 'var(--green)',
          fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)', transition: 'all 0.3s',
          fontFamily: 'Poppins, sans-serif',
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(0,0,0,0.18)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)' }}>
          Buy Now
        </a>
      </motion.div>
    </section>
  )
}
