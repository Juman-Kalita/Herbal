import { motion } from 'framer-motion'
import { useInView } from './useInView'

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" style={{ padding: '7rem 2.5rem', background: 'var(--white)' }}>
      <div ref={ref} style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="about-grid">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
          <span style={labelStyle}>Our Story</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--text)', marginBottom: '1.5rem', letterSpacing: '-0.5px', textAlign: 'left' }}>
            About Our Brand
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '1.1rem', fontSize: '0.95rem' }}>
            We believe in bringing back the power of nature into daily oral care. Our product is crafted using time-tested herbal ingredients to ensure safe, effective, and long-lasting dental health.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '2rem', fontSize: '0.95rem' }}>
            Born from a passion for Ayurvedic wellness, HerbalSmile was created to offer a genuine alternative to chemical-laden dental products — one that your grandparents would recognize and trust.
          </p>
          <a href="#cta" style={{
            display: 'inline-flex', alignItems: 'center', padding: '0.9rem 2.2rem',
            borderRadius: 50, background: 'linear-gradient(135deg, #5a9e57, #3d7a3a)',
            color: '#fff', fontWeight: 600, fontSize: '0.92rem', textDecoration: 'none',
            boxShadow: '0 6px 24px rgba(90,158,87,0.35)', transition: 'all 0.3s',
            fontFamily: 'Poppins, sans-serif',
          }}>Discover More</a>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}
          style={{ position: 'relative' }}>
          <img src="/img1.png" alt="About Brand"
            style={{ width: '100%', borderRadius: 28, boxShadow: '0 32px 80px rgba(60,120,60,0.22)', objectFit: 'cover', aspectRatio: '4/5' }} />
          <div style={{
            position: 'absolute', bottom: 24, left: -18,
            background: 'linear-gradient(135deg, #5a9e57, #3d7a3a)',
            color: '#fff', padding: '0.85rem 1.8rem', borderRadius: 12,
            fontWeight: 700, fontSize: '1rem',
            boxShadow: '0 20px 60px rgba(60,120,60,0.18)', letterSpacing: '0.3px',
          }}>Est. 2020</div>
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
