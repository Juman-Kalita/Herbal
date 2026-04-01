const items = [
  { icon: '🌱', label: '100% Herbal' },
  { icon: '🚫', label: 'Chemical Free' },
  { icon: '🍃', label: 'Organic' },
  { icon: '🏺', label: 'Ayurvedic' },
  { icon: '✅', label: 'Lab Tested' },
]

export default function TrustStrip() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #3d7a3a 0%, #5a9e57 100%)',
      padding: '3rem 2.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, background: 'rgba(255,255,255,0.06)', borderRadius: '50%' }} />
      <p style={{ color: 'rgba(255,255,255,0.95)', fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', marginBottom: '2rem', fontStyle: 'italic' }}>
        Powered by Nature. Trusted by Tradition.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
        {items.map(item => (
          <div key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontSize: '2rem' }}>{item.icon}</span>
            <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
