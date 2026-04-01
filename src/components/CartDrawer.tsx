import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react'
import { useCart } from '../store/CartContext'
import { useState } from 'react'

type Step = 'cart' | 'checkout' | 'success'

interface Form {
  name: string; phone: string; email: string
  address: string; city: string; pincode: string; state: string
  paymentMethod: 'cod' | 'upi' | 'card'
}

const initForm: Form = {
  name: '', phone: '', email: '',
  address: '', city: '', pincode: '', state: '',
  paymentMethod: 'cod',
}

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQty, total, count } = useCart()
  const [step, setStep] = useState<Step>('cart')
  const [form, setForm] = useState<Form>(initForm)
  const [errors, setErrors] = useState<Partial<Form>>({})
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState('')

  const shipping = total >= 499 ? 0 : 49
  const grandTotal = total + shipping

  const set = (k: keyof Form, v: string) => {
    setForm(f => ({ ...f, [k]: v }))
    setErrors(e => ({ ...e, [k]: '' }))
  }

  const validate = () => {
    const e: Partial<Form> = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!/^\d{10}$/.test(form.phone)) e.phone = 'Enter valid 10-digit number'
    if (!form.address.trim()) e.address = 'Required'
    if (!form.city.trim()) e.city = 'Required'
    if (!/^\d{6}$/.test(form.pincode)) e.pincode = 'Enter valid 6-digit pincode'
    if (!form.state.trim()) e.state = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handlePlaceOrder = async () => {
    if (!validate()) return
    setLoading(true)
    try {
      const res = await fetch('http://localhost:4000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          items: items.map(i => ({ size: i.size, qty: i.qty, price: i.price })),
          total: grandTotal,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setOrderId(data.orderId)
        setStep('success')
      } else {
        alert(data.error || 'Something went wrong')
      }
    } catch {
      alert('Could not connect to server. Make sure the backend is running.')
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    setTimeout(() => { setStep('cart'); setForm(initForm); setErrors({}) }, 400)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={handleClose}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)', zIndex: 2000 }} />

          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0,
              width: '100%', maxWidth: 460,
              background: '#fff', zIndex: 2001,
              display: 'flex', flexDirection: 'column',
              boxShadow: '-8px 0 40px rgba(0,0,0,0.15)',
            }}>

            {/* Header */}
            <div style={{ padding: '1.2rem 1.5rem', borderBottom: '1px solid #e0ece0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                {step === 'checkout' && (
                  <button onClick={() => setStep('cart')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#7a8f7a', display: 'flex', marginRight: '0.3rem' }}>
                    <ArrowLeft size={18} />
                  </button>
                )}
                <ShoppingBag size={20} color="#2d6a2d" />
                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', fontWeight: 700, color: '#1c2b1c' }}>
                  {step === 'cart' ? `Cart ${count > 0 ? `(${count})` : ''}` : step === 'checkout' ? 'Checkout' : 'Order Placed'}
                </span>
              </div>
              <button onClick={handleClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#7a8f7a' }}>
                <X size={22} />
              </button>
            </div>

            {/* Steps indicator */}
            {step !== 'success' && (
              <div style={{ display: 'flex', padding: '0.75rem 1.5rem', gap: '0.5rem', borderBottom: '1px solid #e0ece0', flexShrink: 0 }}>
                {['Cart', 'Checkout'].map((s, i) => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: '50%', fontSize: '0.7rem', fontWeight: 700,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: (step === 'cart' && i === 0) || (step === 'checkout' && i === 1) ? '#2d6a2d' : '#e0ece0',
                      color: (step === 'cart' && i === 0) || (step === 'checkout' && i === 1) ? '#fff' : '#7a8f7a',
                    }}>{i + 1}</div>
                    <span style={{ fontSize: '0.78rem', fontWeight: 600, color: (step === 'cart' && i === 0) || (step === 'checkout' && i === 1) ? '#2d6a2d' : '#7a8f7a' }}>{s}</span>
                    {i === 0 && <ArrowRight size={12} color="#c0d0c0" />}
                  </div>
                ))}
              </div>
            )}

            {/* Body */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>

              {/* STEP: CART */}
              {step === 'cart' && (
                items.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#7a8f7a' }}>
                    <ShoppingBag size={48} style={{ margin: '0 auto 1rem', opacity: 0.3 }} />
                    <p>Your cart is empty</p>
                    <button onClick={handleClose} style={{ marginTop: '1rem', background: '#2d6a2d', color: '#fff', border: 'none', padding: '0.7rem 1.5rem', borderRadius: 6, cursor: 'pointer', fontWeight: 600, fontSize: '0.88rem' }}>
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {items.map(item => (
                      <div key={item.size} style={{ display: 'grid', gridTemplateColumns: '72px 1fr auto', gap: '1rem', alignItems: 'center', padding: '1rem', background: '#f5fbf5', borderRadius: 12, border: '1px solid #e0ece0' }}>
                        <img src="/img1.png" alt="Product" style={{ width: 72, height: 72, objectFit: 'cover', borderRadius: 8 }} />
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#1c2b1c', marginBottom: '0.15rem' }}>Ayufresh Green Breath Care</div>
                          <div style={{ fontSize: '0.75rem', color: '#7a8f7a', marginBottom: '0.5rem' }}>Size: {item.size}</div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <button onClick={() => updateQty(item.size, item.qty - 1)} style={{ width: 24, height: 24, borderRadius: 5, border: '1px solid #e0ece0', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Minus size={11} /></button>
                            <span style={{ fontSize: '0.85rem', fontWeight: 600, minWidth: 18, textAlign: 'center' }}>{item.qty}</span>
                            <button onClick={() => updateQty(item.size, item.qty + 1)} style={{ width: 24, height: 24, borderRadius: 5, border: '1px solid #e0ece0', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Plus size={11} /></button>
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontWeight: 700, color: '#2d6a2d', fontSize: '0.92rem' }}>₹{item.price * item.qty}</div>
                          <button onClick={() => removeItem(item.size)} style={{ background: 'none', border: 'none', color: '#e57373', fontSize: '0.72rem', cursor: 'pointer', marginTop: '0.3rem' }}>Remove</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )}

              {/* STEP: CHECKOUT */}
              {step === 'checkout' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1c2b1c', textTransform: 'uppercase', letterSpacing: 1, marginBottom: '0.25rem' }}>Delivery Details</p>

                  {([
                    { key: 'name', label: 'Full Name', placeholder: 'Priya Sharma', type: 'text' },
                    { key: 'phone', label: 'Phone Number', placeholder: '9876543210', type: 'tel' },
                    { key: 'email', label: 'Email (optional)', placeholder: 'you@email.com', type: 'email' },
                    { key: 'address', label: 'Address', placeholder: 'House no, Street, Area', type: 'text' },
                    { key: 'city', label: 'City', placeholder: 'Mumbai', type: 'text' },
                    { key: 'pincode', label: 'Pincode', placeholder: '400001', type: 'text' },
                    { key: 'state', label: 'State', placeholder: 'Maharashtra', type: 'text' },
                  ] as { key: keyof Form; label: string; placeholder: string; type: string }[]).map(f => (
                    <div key={f.key}>
                      <label style={{ fontSize: '0.78rem', fontWeight: 600, color: '#3a4f3a', display: 'block', marginBottom: '0.3rem' }}>{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.key]}
                        onChange={e => set(f.key, e.target.value)}
                        style={{
                          width: '100%', padding: '0.7rem 0.9rem',
                          border: errors[f.key] ? '1.5px solid #e57373' : '1.5px solid #e0ece0',
                          borderRadius: 8, fontSize: '0.88rem',
                          outline: 'none', fontFamily: 'Poppins, sans-serif',
                          transition: 'border 0.2s',
                        }}
                        onFocus={e => (e.target.style.borderColor = '#2d6a2d')}
                        onBlur={e => (e.target.style.borderColor = errors[f.key] ? '#e57373' : '#e0ece0')}
                      />
                      {errors[f.key] && <p style={{ fontSize: '0.72rem', color: '#e57373', marginTop: '0.2rem' }}>{errors[f.key]}</p>}
                    </div>
                  ))}

                  {/* Payment method */}
                  <div style={{ marginTop: '0.5rem' }}>
                    <p style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1c2b1c', textTransform: 'uppercase', letterSpacing: 1, marginBottom: '0.75rem' }}>Payment Method</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {[
                        { value: 'cod', label: 'Cash on Delivery', icon: '💵', desc: 'Pay when your order arrives' },
                        { value: 'upi', label: 'UPI / QR Code', icon: '📱', desc: 'GPay, PhonePe, Paytm, etc.' },
                        { value: 'card', label: 'Credit / Debit Card', icon: '💳', desc: 'Visa, Mastercard, RuPay' },
                      ].map(opt => (
                        <label key={opt.value} style={{
                          display: 'flex', alignItems: 'center', gap: '0.9rem',
                          padding: '0.9rem 1rem', borderRadius: 10, cursor: 'pointer',
                          border: form.paymentMethod === opt.value ? '2px solid #2d6a2d' : '1.5px solid #e0ece0',
                          background: form.paymentMethod === opt.value ? '#f0f8f0' : '#fff',
                          transition: 'all 0.2s',
                        }}>
                          <input type="radio" name="payment" value={opt.value}
                            checked={form.paymentMethod === opt.value}
                            onChange={() => set('paymentMethod', opt.value)}
                            style={{ accentColor: '#2d6a2d' }} />
                          <span style={{ fontSize: '1.2rem' }}>{opt.icon}</span>
                          <div>
                            <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1c2b1c' }}>{opt.label}</div>
                            <div style={{ fontSize: '0.74rem', color: '#7a8f7a' }}>{opt.desc}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Order summary */}
                  <div style={{ background: '#f5fbf5', borderRadius: 10, padding: '1rem', border: '1px solid #e0ece0', marginTop: '0.5rem' }}>
                    <p style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1c2b1c', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: 1 }}>Order Summary</p>
                    {items.map(i => (
                      <div key={i.size} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#3a4f3a', marginBottom: '0.3rem' }}>
                        <span>Ayufresh {i.size} × {i.qty}</span>
                        <span>₹{i.price * i.qty}</span>
                      </div>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#7a8f7a', marginTop: '0.5rem' }}>
                      <span>Shipping</span>
                      <span style={{ color: shipping === 0 ? '#2d6a2d' : undefined }}>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.95rem', color: '#1c2b1c', marginTop: '0.6rem', paddingTop: '0.6rem', borderTop: '1px solid #e0ece0' }}>
                      <span>Total</span>
                      <span style={{ color: '#2d6a2d' }}>₹{grandTotal}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP: SUCCESS */}
              {step === 'success' && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#1c2b1c', marginBottom: '0.5rem' }}>Order Placed!</h3>
                  <p style={{ color: '#7a8f7a', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                    Thank you, <strong style={{ color: '#1c2b1c' }}>{form.name}</strong>! Your order has been confirmed.
                  </p>
                  <div style={{ background: '#f5fbf5', borderRadius: 10, padding: '1rem', border: '1px solid #e0ece0', marginBottom: '1.5rem', textAlign: 'left' }}>
                    <div style={{ fontSize: '0.78rem', color: '#7a8f7a', marginBottom: '0.3rem' }}>Order ID</div>
                    <div style={{ fontWeight: 700, color: '#2d6a2d', fontSize: '0.95rem', marginBottom: '0.8rem' }}>{orderId}</div>
                    <div style={{ fontSize: '0.78rem', color: '#7a8f7a', marginBottom: '0.3rem' }}>Delivering to</div>
                    <div style={{ fontSize: '0.85rem', color: '#3a4f3a' }}>{form.address}, {form.city}, {form.state} - {form.pincode}</div>
                    <div style={{ fontSize: '0.78rem', color: '#7a8f7a', marginTop: '0.6rem', marginBottom: '0.2rem' }}>Payment</div>
                    <div style={{ fontSize: '0.85rem', color: '#3a4f3a', textTransform: 'uppercase' }}>{form.paymentMethod === 'cod' ? 'Cash on Delivery' : form.paymentMethod.toUpperCase()}</div>
                  </div>
                  <button onClick={handleClose} style={{ background: '#2d6a2d', color: '#fff', border: 'none', padding: '0.85rem 2rem', borderRadius: 8, fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem', fontFamily: 'Poppins, sans-serif' }}>
                    Continue Shopping
                  </button>
                </motion.div>
              )}
            </div>

            {/* Footer */}
            {step === 'cart' && items.length > 0 && (
              <div style={{ padding: '1.2rem 1.5rem', borderTop: '1px solid #e0ece0', flexShrink: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.85rem' }}>
                  <span style={{ color: '#7a8f7a' }}>Subtotal</span>
                  <span style={{ fontWeight: 600 }}>₹{total}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.85rem' }}>
                  <span style={{ color: '#7a8f7a' }}>Shipping</span>
                  <span style={{ color: shipping === 0 ? '#2d6a2d' : '#1c2b1c', fontWeight: 600 }}>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>
                <button onClick={() => setStep('checkout')} style={{
                  width: '100%', background: 'linear-gradient(135deg, #3d8b3d, #2d6a2d)',
                  color: '#fff', border: 'none', padding: '1rem',
                  borderRadius: 8, fontWeight: 700, fontSize: '0.95rem',
                  cursor: 'pointer', fontFamily: 'Poppins, sans-serif',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                }}>
                  Proceed to Checkout <ArrowRight size={18} />
                </button>
                {shipping > 0 && <p style={{ textAlign: 'center', fontSize: '0.72rem', color: '#7a8f7a', marginTop: '0.6rem' }}>Add ₹{499 - total} more for free shipping</p>}
              </div>
            )}

            {step === 'checkout' && (
              <div style={{ padding: '1.2rem 1.5rem', borderTop: '1px solid #e0ece0', flexShrink: 0 }}>
                <button onClick={handlePlaceOrder} disabled={loading} style={{
                  width: '100%', background: loading ? '#7a8f7a' : 'linear-gradient(135deg, #3d8b3d, #2d6a2d)',
                  color: '#fff', border: 'none', padding: '1rem',
                  borderRadius: 8, fontWeight: 700, fontSize: '0.95rem',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  fontFamily: 'Poppins, sans-serif',
                }}>
                  {loading ? 'Placing Order...' : `Place Order · ₹${grandTotal}`}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
