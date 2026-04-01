import { motion } from 'framer-motion'
import { useInView } from './useInView'

const steps = [
  { num: '01', icon: '🥄', title: 'Take a Small Amount', desc: 'Take a small amount of powder on your fingertip or toothbrush.' },
  { num: '02', icon: '🦷', title: 'Brush & Massage', desc: 'Gently brush or massage on teeth and gums in circular motions.' },
  { num: '03', icon: '💧', title: 'Rinse Thoroughly', desc: 'Rinse your mouth thoroughly with clean water.' },
  { num: '04', icon: '📅', title: 'Use Daily', desc: 'Use daily morning and night for best long-term results.' },
]

export default function HowToUse() {
  const { ref, inView } = useInView()

  return (
    <section id="how-to-use" style={{ padding: '7rem 2.5rem', background: 'var(--white)', textAlign: 'center' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <span style={labelStyle}>Simple Steps</span>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--text)', marginBottom: '3rem', letterSpacing: '-0.5px' }}>
          How To Use
        </h2>
      </motion.div>

      <div ref={ref} style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', position: 'relative' }} className="steps-grid">
        {/* Connector line */}
        <div style={{ position: 'absolute', top: 52, left: '12.5%', right: '12.5%', height: 2, background: 'linear-gradient(to right, transparent, #c8e6c5, #c8e6c5, transparent)', zIndex: 0 }} />

        {steps.map((step, i) => (
          <motion.div key={step.num}
            initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(60,120,60,0.18)' }}
            style={{
              background: 'var(--white)', borderRadius: 20, padding: '2.2rem 1.6rem 2rem',
              border: '1px solid rgba(107,179,104,0.1)',
              boxShadow: '0 2px 12px rgba(60,120,60,0.08)',
              position: 'relative', zIndex: 1,
              transition: 'all 0.4s cubic-bezier(.22,.68,0,1.2)',
            }}>
            <div style={{
              width: 44, height: 44,
              background: 'linear-gradient(135deg, #5a9e57, #3d7a3a)',
              color: '#fff', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.8rem', fontWeight: 700,
              margin: '0 auto 1.2rem',
              boxShadow: '0 4px 16px rgba(90,158,87,0.35)',
              fontFamily: 'Poppins, sans-serif',
            }}>{step.num}</div>
            <div style={{ fontSize: '2.4rem', marginBottom: '1rem' }}>{step.icon}</div>
            <h4 style={{ fontSize: '0.95rem', fontFamily: 'Poppins, sans-serif', fontWeight: 600, marginBottom: '0.6rem', color: 'var(--text)' }}>{step.title}</h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{step.desc}</p>
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
