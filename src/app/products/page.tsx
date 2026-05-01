'use client'

import { useState } from 'react'
import Link from 'next/link'
import ProductCard from '@/components/product-card'
import styles from './page.module.css'

const ALL_PRODUCTS = [
  { id: '1', name: 'Oil Filter – Classic 350 / Meteor 350 (J-series)', sku: 'RE-OLF-001', price: 180, category: 'filters', compatible: 'Classic 350, Meteor 350, Bullet 350', badge: 'Bestseller', inStock: true, bikes: ['classic-350', 'meteor-350', 'bullet-350'] },
  { id: '2', name: 'Air Filter – Himalayan 411', sku: 'RE-AF-002', price: 350, category: 'filters', compatible: 'Himalayan 411 (All Years)', inStock: true, bikes: ['himalayan-411'] },
  { id: '3', name: 'Front Brake Pads – Himalayan / Interceptor', sku: 'RE-BRK-003', price: 450, category: 'brakes', compatible: 'Himalayan, Interceptor 650', badge: 'OEM', inStock: true, bikes: ['himalayan-411', 'interceptor-650'] },
  { id: '4', name: 'Chain & Sprocket Kit – Classic 350', sku: 'RE-CHN-004', price: 1650, category: 'chains', compatible: 'Classic 350 (All Variants)', inStock: true, bikes: ['classic-350'] },
  { id: '5', name: 'Clutch Cable – Classic 350', sku: 'RE-CLT-005', price: 250, category: 'engine', compatible: 'Classic 350 (2022–2024)', inStock: true, bikes: ['classic-350'] },
  { id: '6', name: 'Spark Plug – NGK (RE Compatible)', sku: 'RE-SPK-006', price: 120, category: 'engine', compatible: 'All Models', inStock: true, bikes: ['classic-350', 'meteor-350', 'himalayan-411', 'interceptor-650', 'bullet-350', 'continental-gt-650'] },
  { id: '7', name: 'Engine Gasket Set – Interceptor 650', sku: 'RE-GSK-007', price: 820, originalPrice: 1100, category: 'engine', compatible: 'Interceptor 650, Continental GT 650', badge: 'Sale', inStock: true, bikes: ['interceptor-650', 'continental-gt-650'] },
  { id: '8', name: 'Cam Chain Tensioner – Meteor 350', sku: 'RE-CAM-008', price: 640, category: 'engine', compatible: 'Meteor 350, Hunter 350', inStock: true, bikes: ['meteor-350'] },
  { id: '9', name: 'Rear Brake Disc – Classic 350', sku: 'RE-BRK-009', price: 1200, category: 'brakes', compatible: 'Classic 350 (B2 Series)', inStock: true, bikes: ['classic-350'] },
  { id: '10', name: 'Throttle Cable – Himalayan 411', sku: 'RE-THR-010', price: 280, category: 'engine', compatible: 'Himalayan 411 (2021+)', inStock: false, bikes: ['himalayan-411'] },
  { id: '11', name: 'Indicator Lens Set – Classic 350', sku: 'RE-ELC-011', price: 340, category: 'electricals', compatible: 'Classic 350 (All Variants)', inStock: true, bikes: ['classic-350'] },
  { id: '12', name: 'Battery – 12V 9Ah (RE OEM)', sku: 'RE-ELC-012', price: 1850, category: 'electricals', compatible: 'All Models', inStock: true, bikes: ['classic-350', 'meteor-350', 'himalayan-411', 'interceptor-650', 'bullet-350'] },
]

const CATEGORIES = [
  { label: 'Filters', value: 'filters' },
  { label: 'Engine Parts', value: 'engine' },
  { label: 'Brake System', value: 'brakes' },
  { label: 'Electricals', value: 'electricals' },
  { label: 'Chains & Sprockets', value: 'chains' },
  { label: 'Accessories', value: 'accessories' },
]

const BIKES = [
  { label: 'Classic 350', value: 'classic-350' },
  { label: 'Meteor 350', value: 'meteor-350' },
  { label: 'Himalayan 411', value: 'himalayan-411' },
  { label: 'Interceptor 650', value: 'interceptor-650' },
  { label: 'Continental GT 650', value: 'continental-gt-650' },
  { label: 'Bullet 350', value: 'bullet-350' },
]

const SORT_OPTIONS = [
  { label: 'Popularity', value: 'popular' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest First', value: 'newest' },
]

export default function ShopPage() {
  const [selectedCats, setSelectedCats] = useState<string[]>([])
  const [selectedBikes, setSelectedBikes] = useState<string[]>([])
  const [maxPrice, setMaxPrice] = useState(10000)
  const [sort, setSort] = useState('popular')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleFilter = (arr: string[], setArr: (v: string[]) => void, val: string) => {
    setArr(arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val])
  }

  const filtered = ALL_PRODUCTS
    .filter(p => selectedCats.length === 0 || selectedCats.includes(p.category))
    .filter(p => selectedBikes.length === 0 || p.bikes.some(b => selectedBikes.includes(b)))
    .filter(p => p.price <= maxPrice)
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      return 0
    })

  return (
    <>
      <div className={styles.pageHero}>
        <div className={styles.pageHeroInner}>
          <h1>All <span>Parts</span></h1>
          <p>Genuine OEM parts for every Royal Enfield model</p>
        </div>
      </div>

      <div className={styles.breadcrumb}>
        <Link href="/">Home</Link>
        <span>/</span>
        <span>Shop Parts</span>
      </div>

      <div className={styles.layout}>
        {/* Sidebar */}
        <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
          <div className={styles.sidebarHeader}>
            <span>Filters</span>
            <button className={styles.clearBtn} onClick={() => { setSelectedCats([]); setSelectedBikes([]); setMaxPrice(10000) }}>Clear All</button>
          </div>

          <div className={styles.filterGroup}>
            <h4>Categories</h4>
            {CATEGORIES.map(cat => (
              <label key={cat.value} className={styles.checkLabel}>
                <input
                  type="checkbox"
                  checked={selectedCats.includes(cat.value)}
                  onChange={() => toggleFilter(selectedCats, setSelectedCats, cat.value)}
                />
                <span>{cat.label}</span>
              </label>
            ))}
          </div>

          <div className={styles.filterGroup}>
            <h4>Filter by Bike</h4>
            {BIKES.map(bike => (
              <label key={bike.value} className={styles.checkLabel}>
                <input
                  type="checkbox"
                  checked={selectedBikes.includes(bike.value)}
                  onChange={() => toggleFilter(selectedBikes, setSelectedBikes, bike.value)}
                />
                <span>{bike.label}</span>
              </label>
            ))}
          </div>

          <div className={styles.filterGroup}>
            <h4>Price Range</h4>
            <input
              type="range"
              className={styles.rangeInput}
              min={0}
              max={10000}
              value={maxPrice}
              onChange={e => setMaxPrice(Number(e.target.value))}
            />
            <div className={styles.priceLabels}>
              <span>₹0</span>
              <span className={styles.priceVal}>₹{maxPrice.toLocaleString('en-IN')}</span>
              <span>₹10,000+</span>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className={styles.main}>
          <div className={styles.shopHeader}>
            <div className={styles.shopHeaderLeft}>
              <button className={styles.filterToggle} onClick={() => setSidebarOpen(!sidebarOpen)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/>
                </svg>
                Filters
              </button>
              <span className={styles.shopCount}>{filtered.length} parts found</span>
            </div>
            <select className={styles.sortSelect} value={sort} onChange={e => setSort(e.target.value)}>
              {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>Sort by: {o.label}</option>)}
            </select>
          </div>

          {filtered.length === 0 ? (
            <div className={styles.noResults}>
              <p>No parts match your filters.</p>
              <button className="btn-outline" onClick={() => { setSelectedCats([]); setSelectedBikes([]); setMaxPrice(10000) }}>Clear Filters</button>
            </div>
          ) : (
            <div className={styles.productsGrid}>
              {filtered.map(p => <ProductCard key={p.id} {...p} />)}
            </div>
          )}
        </main>
      </div>
    </>
  )
}
