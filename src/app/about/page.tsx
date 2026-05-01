'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './page.module.css'

export default function AboutPage() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden>SPARES</div>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>Est. Tamil Nadu, India</div>
          <h1>We Are <span>Riders</span><br />Supporting Riders.</h1>
          <p>Enfield Spares was built out of a passion for Royal Enfield motorcycles and the community that rides them. We source only genuine OEM parts from India and deliver them to riders around the world.</p>
        </div>
      </section>

      {/* Stats */}
      <div className={styles.statsGrid}>
        {[
          { num: '186+', label: 'Parts in Catalog' },
          { num: '60+', label: 'Countries Served' },
          { num: '4,200+', label: 'Orders Fulfilled' },
          { num: '4.9★', label: 'Customer Rating' },
        ].map(s => (
          <div key={s.label} className={styles.statBox}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Story */}
      <section className={styles.storySection}>
        <div className={styles.storyGrid}>
          <div className={styles.storyText}>
            <p className={styles.storySub}>Our Story</p>
            <h2>Ride. <span>Repair.</span><br />Repeat.</h2>
            <p>Enfield Spares was founded by riders frustrated by counterfeit parts flooding the market. We decided to build a trusted source — directly connected to OEM suppliers in Tamil Nadu and shipping worldwide.</p>
            <p>Every part on our platform is verified genuine, properly packaged, and dispatched with full tracking. We don't cut corners because our customers don't either.</p>
            <p>Based in Ambattur, Tamil Nadu — the heart of Royal Enfield country.</p>
            <Link href="/products" className="btn-primary" style={{ marginTop: '8px', display: 'inline-flex' }}>
              Shop Genuine Parts
            </Link>
          </div>
          <div className={styles.storyVisual}>
            <svg viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.storySvg}>
              {/* Large bike illustration */}
              <circle cx="60" cy="160" r="46" stroke="currentColor" strokeWidth="3"/>
              <circle cx="220" cy="160" r="46" stroke="currentColor" strokeWidth="3"/>
              <circle cx="60" cy="160" r="16" stroke="currentColor" strokeWidth="2"/>
              <circle cx="220" cy="160" r="16" stroke="currentColor" strokeWidth="2"/>
              <path d="M60 160L110 70L160 70L190 110L220 160" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M110 70L100 160" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              <path d="M160 70L190 110" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              <path d="M145 40L165 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              <path d="M138 40L162 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              <path d="M190 110L225 110" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M85 90L120 90" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div className={styles.storyBadge}>
              <span>MADE IN INDIA</span>
              <span>DELIVERED WORLDWIDE</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className={styles.howSection}>
        <div className={styles.howInner}>
          <div className={styles.howHeader}>
            <h2>How It <span>Works</span></h2>
            <p>Simple steps. Genuine parts. Delivered to you.</p>
          </div>
          <div className={styles.stepsGrid}>
            {[
              { num: '01', icon: '🔍', title: 'Find Your Part', desc: 'Search by part name, category, or browse by your bike model to find exactly what you need.' },
              { num: '02', icon: '✅', title: 'Place Your Order', desc: 'Add to cart and checkout securely. We accept Razorpay, PayPal, and all major cards.' },
              { num: '03', icon: '📦', title: 'We Pack & Dispatch', desc: 'Parts are quality-checked, carefully packed, and dispatched from Tamil Nadu within 24 hours.' },
              { num: '04', icon: '🌍', title: 'Delivered to You', desc: 'Track your parcel live. Delivered securely to 60+ countries around the world.' },
            ].map(step => (
              <div key={step.num} className={styles.stepBox}>
                <div className={styles.stepNum}>{step.num}</div>
                <span className={styles.stepIcon}>{step.icon}</span>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Why Choose */}
          <div className={styles.whySection}>
            <h3>Why Choose Enfield Spares?</h3>
            <div className={styles.whyGrid}>
              {[
                { icon: '🏭', title: 'Best Prices', sub: 'Direct from India' },
                { icon: '✅', title: 'Genuine Parts', sub: 'Sourced from trusted suppliers' },
                { icon: '📦', title: 'Safe Packaging', sub: 'We pack with extra care' },
                { icon: '📍', title: 'Timely Shipping', sub: 'Tracking provided for every order' },
                { icon: '🎧', title: 'Dedicated Support', sub: "We're here to help you ride worry-free" },
              ].map(w => (
                <div key={w.title} className={styles.whyCard}>
                  <span className={styles.whyIcon}>{w.icon}</span>
                  <strong>{w.title}</strong>
                  <span>{w.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactGrid}>
          {/* Left info */}
          <div className={styles.contactInfo}>
            <p className={styles.contactSub}>Get in Touch</p>
            <h2>Enfield <span>Spares</span></h2>
            <p className={styles.contactTagline}>Parts for Every Rider</p>

            <div className={styles.contactDetails}>
              {[
                { icon: '📱', label: 'WhatsApp', value: '+91 99500 12345' },
                { icon: '✉️', label: 'Email', value: 'info@enfieldspares.com' },
                { icon: '📍', label: 'Location', value: 'Ambattur, Tamil Nadu, India' },
                { icon: '🕐', label: 'Business Hours', value: 'Mon – Sat: 9:00 AM – 6:00 PM IST' },
              ].map(d => (
                <div key={d.label} className={styles.contactDetail}>
                  <span className={styles.contactDetailIcon}>{d.icon}</span>
                  <div>
                    <strong>{d.label}</strong>
                    <span>{d.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className={styles.contactForm}>
            <h3>Send a Message</h3>
            {sent ? (
              <div className={styles.successMsg}>
                <span>✅</span>
                <p>Message sent! We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className="form-field">
                    <label>Your Name</label>
                    <input type="text" placeholder="John Smith" required value={formState.name} onChange={e => setFormState(s => ({ ...s, name: e.target.value }))} />
                  </div>
                  <div className="form-field">
                    <label>Email Address</label>
                    <input type="email" placeholder="john@example.com" required value={formState.email} onChange={e => setFormState(s => ({ ...s, email: e.target.value }))} />
                  </div>
                </div>
                <div className="form-field">
                  <label>Subject</label>
                  <input type="text" placeholder="Part inquiry / Order support / General" value={formState.subject} onChange={e => setFormState(s => ({ ...s, subject: e.target.value }))} />
                </div>
                <div className="form-field">
                  <label>Your Message</label>
                  <textarea placeholder="Tell us about the part you need or your query..." required value={formState.message} onChange={e => setFormState(s => ({ ...s, message: e.target.value }))} />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '15px' }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
