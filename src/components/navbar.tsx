'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './navbar.module.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Topbar */}
      <div className={styles.topbar}>
        <div className={styles.topbarInner}>
          <span>Genuine Royal Enfield OEM Parts — Worldwide Delivery</span>
          <div className={styles.topbarRight}>
            <Link href="/track-order">Track Order</Link>
            <span className={styles.topbarDivider}>|</span>
            <Link href="/about">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            ENFIELD <span>SPARES</span>
          </Link>

          {/* Desktop Links */}
          <ul className={styles.navLinks}>
            <li><Link href="/products" className={styles.navLink}>Shop Parts</Link></li>
            <li><Link href="/shop-by-bike" className={styles.navLink}>By Bike</Link></li>
            <li><Link href="/about" className={styles.navLink}>About Us</Link></li>
            <li><Link href="/about#how-it-works" className={styles.navLink}>How It Works</Link></li>
          </ul>

          {/* Right Actions */}
          <div className={styles.navRight}>
            <button className={styles.iconBtn} aria-label="Search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
            <button className={styles.iconBtn} aria-label="Wishlist">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
            <Link href="/account" className={styles.iconBtn} aria-label="Account">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </Link>
            <Link href="/cart" className={styles.cartBtn}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              Cart
            </Link>
            <div className={styles.authLinks}>
              <Link href="/login" className={styles.loginBtn}>Login</Link>
              <Link href="/signup" className={styles.signupBtn}>Sign Up</Link>
            </div>
          </div>

          {/* Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={menuOpen ? styles.barOpen : styles.bar} />
            <span className={menuOpen ? styles.barOpenMid : styles.bar} />
            <span className={menuOpen ? styles.barOpen : styles.bar} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className={styles.mobileMenu}>
            <Link href="/products" onClick={() => setMenuOpen(false)}>Shop Parts</Link>
            <Link href="/shop-by-bike" onClick={() => setMenuOpen(false)}>Browse by Bike</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link href="/about#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</Link>
            <div className={styles.mobileDivider} />
            <Link href="/login" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link href="/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link>
            <Link href="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>
          </div>
        )}
      </nav>
    </>
  )
}
