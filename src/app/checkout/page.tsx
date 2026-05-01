'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './page.module.css'

const ORDER_ITEMS = [
  { name: 'Oil Filter – Classic 350 / Meteor 350', sku: 'RE-OLF-001', price: 180, qty: 2 },
  { name: 'Front Brake Pads – Himalayan / Interceptor', sku: 'RE-BRK-003', price: 450, qty: 1 },
]

export default function CheckoutPage() {
  const [step, setStep] = useState<'shipping' | 'payment' | 'success'>('shipping')
  const [shipping, setShipping] = useState({ name: '', email: '', phone: '', address: '', city: '', state: '', pincode: '', country: 'India' })
  const [payMethod, setPayMethod] = useState<'razorpay' | 'paypal' | 'card'>('razorpay')

  const subtotal = ORDER_ITEMS.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <>
      <div className={styles.pageHero}>
        <div className={styles.pageHeroInner}>
          <h1>Check<span>out</span></h1>
        </div>
      </div>

      {/* Progress Steps */}
      <div className={styles.progressBar}>
        <div className={styles.progressInner}>
          {(['shipping', 'payment', 'success'] as const).map((s, i) => (
            <div key={s} className={styles.stepItem}>
              <div className={`${styles.stepCircle} ${step === s ? styles.stepActive : ''} ${
                (step === 'payment' && s === 'shipping') || step === 'success' ? styles.stepDone : ''
              }`}>
                {((step === 'payment' && s === 'shipping') || step === 'success') ? '✓' : i + 1}
              </div>
              <span className={step === s ? styles.stepLabelActive : styles.stepLabel}>
                {s === 'shipping' ? 'Shipping' : s === 'payment' ? 'Payment' : 'Confirmed'}
              </span>
              {i < 2 && <div className={styles.stepLine} />}
            </div>
          ))}
        </div>
      </div>

      {step === 'success' ? (
        <div className={styles.successPage}>
          <span className={styles.successIcon}>✅</span>
          <h2>Order Confirmed!</h2>
          <p>Thank you for your order. You'll receive a tracking link via email shortly.</p>
          <div className={styles.orderNum}>Order #ESF-2024-00147</div>
          <Link href="/products" className="btn-primary">Continue Shopping</Link>
        </div>
      ) : (
        <div className={styles.layout}>
          {/* Form */}
          <div className={styles.formSection}>
            {step === 'shipping' && (
              <>
                <h3 className={styles.formTitle}>Shipping Details</h3>
                <div className={styles.formGrid}>
                  <div className="form-field">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Smith" value={shipping.name} onChange={e => setShipping(s => ({ ...s, name: e.target.value }))} />
                  </div>
                  <div className="form-field">
                    <label>Email Address</label>
                    <input type="email" placeholder="john@example.com" value={shipping.email} onChange={e => setShipping(s => ({ ...s, email: e.target.value }))} />
                  </div>
                  <div className="form-field">
                    <label>Phone / WhatsApp</label>
                    <input type="tel" placeholder="+91 99500 12345" value={shipping.phone} onChange={e => setShipping(s => ({ ...s, phone: e.target.value }))} />
                  </div>
                  <div className="form-field">
                    <label>Country</label>
                    <select value={shipping.country} onChange={e => setShipping(s => ({ ...s, country: e.target.value }))}>
                      <option>India</option>
                      <option>United Kingdom</option>
                      <option>United States</option>
                      <option>Australia</option>
                      <option>Germany</option>
                      <option>France</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-field" style={{ gridColumn: '1/-1' }}>
                    <label>Street Address</label>
                    <input type="text" placeholder="123 Main Street, Flat 4B" value={shipping.address} onChange={e => setShipping(s => ({ ...s, address: e.target.value }))} />
                  </div>
                  <div className="form-field">
                    <label>City</label>
                    <input type="text" placeholder="Chennai" value={shipping.city} onChange={e => setShipping(s => ({ ...s, city: e.target.value }))} />
                  </div>
                  <div className="form-field">
                    <label>State / Province</label>
                    <input type="text" placeholder="Tamil Nadu" value={shipping.state} onChange={e => setShipping(s => ({ ...s, state: e.target.value }))} />
                  </div>
                  <div className="form-field">
                    <label>Pincode / ZIP</label>
                    <input type="text" placeholder="600053" value={shipping.pincode} onChange={e => setShipping(s => ({ ...s, pincode: e.target.value }))} />
                  </div>
                </div>
                <button className="btn-primary" style={{ padding: '15px 40px' }} onClick={() => setStep('payment')}>
                  Continue to Payment →
                </button>
              </>
            )}

            {step === 'payment' && (
              <>
                <div className={styles.backRow}>
                  <button className={styles.backBtn} onClick={() => setStep('shipping')}>← Back to Shipping</button>
                </div>
                <h3 className={styles.formTitle}>Payment Method</h3>
                <div className={styles.payOptions}>
                  {([
                    { id: 'razorpay', label: 'Razorpay', sub: 'UPI, Net Banking, Cards' },
                    { id: 'paypal', label: 'PayPal', sub: 'Pay with PayPal account' },
                    { id: 'card', label: 'Credit / Debit Card', sub: 'Visa, Mastercard, Amex' },
                  ] as const).map(opt => (
                    <label key={opt.id} className={`${styles.payOption} ${payMethod === opt.id ? styles.payOptionActive : ''}`}>
                      <input type="radio" name="pay" value={opt.id} checked={payMethod === opt.id} onChange={() => setPayMethod(opt.id)} />
                      <div>
                        <strong>{opt.label}</strong>
                        <span>{opt.sub}</span>
                      </div>
                    </label>
                  ))}
                </div>

                {payMethod === 'card' && (
                  <div className={styles.cardFields}>
                    <div className="form-field">
                      <label>Card Number</label>
                      <input type="text" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className={styles.formGrid2}>
                      <div className="form-field">
                        <label>Expiry</label>
                        <input type="text" placeholder="MM / YY" />
                      </div>
                      <div className="form-field">
                        <label>CVV</label>
                        <input type="text" placeholder="•••" />
                      </div>
                    </div>
                  </div>
                )}

                <button className="btn-primary" style={{ padding: '15px 40px' }} onClick={() => setStep('success')}>
                  Place Order — ₹{subtotal.toLocaleString('en-IN')} →
                </button>

                <p className={styles.secureNote}>
                  🔒 Your payment is encrypted and secure. We never store card details.
                </p>
              </>
            )}
          </div>

          {/* Order Summary */}
          <div className={styles.orderSummary}>
            <h3>Order Summary</h3>
            {ORDER_ITEMS.map(item => (
              <div key={item.sku} className={styles.orderItem}>
                <div className={styles.orderItemImg}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4">
                    <circle cx="12" cy="12" r="8"/>
                  </svg>
                  <span className={styles.qtyBadge}>{item.qty}</span>
                </div>
                <div className={styles.orderItemInfo}>
                  <p>{item.name}</p>
                  <span>{item.sku}</span>
                </div>
                <span className={styles.orderItemPrice}>₹{(item.price * item.qty).toLocaleString('en-IN')}</span>
              </div>
            ))}

            <div className={styles.orderTotals}>
              <div className={styles.orderTotalRow}>
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className={styles.orderTotalRow}>
                <span>Shipping</span>
                <span style={{ color: 'var(--text-dim)', fontSize: '12px' }}>At checkout</span>
              </div>
              <div className={`${styles.orderTotalRow} ${styles.grandTotal}`}>
                <span>Total</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
