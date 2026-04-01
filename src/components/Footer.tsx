import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

const footerLinks = {
  Shop: ['All Products', 'Whitening', 'Gum Care', 'Daily Use', 'Bundles'],
  Company: ['About Us', 'Our Story', 'Blog', 'Press', 'Careers'],
  Support: ['FAQ', 'Shipping Policy', 'Returns', 'Track Order', 'Contact Us'],
}

export default function Footer() {
  return (
    <footer style={{ background: '#0f1f0f', color: 'rgba(255,255,255,0.7)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 2rem 2rem' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.4rem' }}>🌿</span>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', fontWeight: 700, color: '#7fb77e' }}>HerbalSmile</span>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.8, maxWidth: 260, marginBottom: '1.5rem', color: 'rgba(255,255,255,0.5)' }}>
              Bringing the ancient wisdom of Ayurveda to your daily oral care routine. 100% natural, zero compromise.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: 'rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.6)', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#2d6a2d'; el.style.color = '#fff' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(255,255,255,0.08)'; el.style.color = 'rgba(255,255,255,0.6)' }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h5 style={{ color: '#fff', fontFamily: 'Poppins, sans-serif', fontSize: '0.88rem', fontWeight: 600, marginBottom: '1.2rem', letterSpacing: 0.3 }}>{title}</h5>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {links.map(l => (
                  <li key={l}>
                    <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.83rem', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#7fb77e')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)' }}>© 2026 HerbalSmile. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
              <a key={l} href="#" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
