import { motion } from 'framer-motion'
import { useInView } from './useInView'

const whyUs = [
  { icon: '🌱', title: '100% Natural', desc: 'Every ingredient sourced from nature with zero synthetic additives.' },
  { icon: '🚫', title: 'No Chemicals', desc: 'Free from fluoride, SLS, parabens, and artificial preservatives.' },
  { icon: '🏺', title: 'Ayurvedic', desc: 'Rooted in centuries-old Ayurvedic wisdom for oral wellness.' },
  { icon: '✅', title: 'Safe & Effective', desc: 'Gentle on enamel, tough on bacteria — safe for daily use.' },
  { icon: '💰', title: 'Affordable', desc: 'Premium quality at a price that does not break the bank.' },
]

export default function WhyUs() {
  const { ref, inView } = useInView()

  return (
    <section style={{ padding: '7rem 2.5rem', background: 'var(--white)', textAlign: 'center' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <span style={labelStyle}>Our Promise</span>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--text)', marginBottom: '3rem', letterSpacing: '-0.5px' }}>
          Why Choose Us
        </h2>
      </motion.div>

      <div ref={ref} style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem' }} className="why-grid">
        {whyUs.map((w, i) => (
          <motion.div key={w.title}
            initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            style={{
              background: 'var(--bg2)', borderRadius: 20, padding: '2.2rem 1.5rem',
              border: '1px solid rgba(107,179,104,0.1)',
              transition: 'all 0.4s cubic-bezier(.22,.68,0,1.2)',
              cursor: 'default',
            }}
            className="why-card">
            <div style={{
              width: 52, height: 52,
              background: 'linear-gradient(135deg, rgba(107,179,104,0.15), rgba(107,179,104,0.06))',
              borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.6rem', margin: '0 auto 1rem',
              border: '1px solid rgba(107,179,104,0.15)',
            }}>{w.icon}</div>
            <h4 style={{ fontSize: '0.92rem', fontFamily: 'Poppins, sans-serif', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text)' }}>{w.title}</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{w.desc}</p>
          </motion.div>
        ))}
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
