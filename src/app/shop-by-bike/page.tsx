import Link from 'next/link'
import styles from './page.module.css'

const BIKES = [
  { name: 'Classic 350', slug: 'classic-350', cc: '350cc', type: 'Retro Roadster', parts: 64, description: 'The iconic retro cruiser. Shop genuine filters, engine parts, brakes and more.' },
  { name: 'Meteor 350', slug: 'meteor-350', cc: '350cc', type: 'J-Series Cruiser', parts: 52, description: 'Modern J-series platform. Find OEM parts for smooth highway cruising.' },
  { name: 'Himalayan 411', slug: 'himalayan-411', cc: '411cc', type: 'Adventure Tourer', parts: 48, description: 'Built for the rough stuff. Adventure-spec OEM parts ready to ship.' },
  { name: 'Interceptor 650', slug: 'interceptor-650', cc: '648cc', type: 'Parallel Twin', parts: 41, description: 'The 650 twin. Genuine parts for the most spirited RE in the lineup.' },
  { name: 'Continental GT 650', slug: 'continental-gt-650', cc: '648cc', type: 'Café Racer', parts: 39, description: 'Café racer soul. Find parts that keep your GT looking and running sharp.' },
  { name: 'Bullet 350', slug: 'bullet-350', cc: '350cc', type: 'Classic Legend', parts: 58, description: 'The legend that started it all. Long-lasting OEM parts for the Bullet.' },
  { name: 'Hunter 350', slug: 'hunter-350', cc: '350cc', type: 'Urban Roadster', parts: 34, description: 'The street-ready Hunter. Compact urban OEM parts, ready for the city.' },
  { name: 'Scram 411', slug: 'scram-411', cc: '411cc', type: 'Scrambler', parts: 29, description: 'The scrambler variant. Find parts that handle both tarmac and gravel.' },
]

export default function ShopByBikePage() {
  return (
    <>
      <div className={styles.pageHero}>
        <div className={styles.pageHeroInner}>
          <div className={styles.heroBadge}>Find Parts for Your Ride</div>
          <h1>Browse by <span>Bike</span></h1>
          <p>Select your Royal Enfield model to find compatible OEM parts</p>
        </div>
      </div>

      <div className={styles.breadcrumb}>
        <Link href="/">Home</Link>
        <span>/</span>
        <span>Browse by Bike</span>
      </div>

      <div className={styles.container}>
        <div className={styles.intro}>
          <p>Every part on Enfield Spares is tagged to specific bike models. Select your model below to browse only the parts that fit — no guesswork, no returns.</p>
        </div>

        <div className={styles.bikeGrid}>
          {BIKES.map((bike) => (
            <Link key={bike.slug} href={`/products?bike=${bike.slug}`} className={styles.bikeCard}>
              {/* Decorative bike illustration */}
              <div className={styles.bikeIllustration}>
                <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.bikeSvg}>
                  <circle cx="25" cy="50" r="16" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="95" cy="50" r="16" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="25" cy="50" r="6" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="95" cy="50" r="6" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M25 50L50 20L70 20L80 35L95 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M50 20L45 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M70 20L80 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M60 10L70 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M55 10L65 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M80 35L95 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>

              <div className={styles.bikeContent}>
                <div className={styles.bikeType}>{bike.type}</div>
                <h2 className={styles.bikeName}>{bike.name}</h2>
                <div className={styles.bikeMeta}>
                  <span className={styles.bikeCC}>{bike.cc}</span>
                  <span className={styles.bikeParts}>{bike.parts} parts available</span>
                </div>
                <p className={styles.bikeDesc}>{bike.description}</p>
              </div>

              <div className={styles.bikeArrow}>
                <span>Shop Parts</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Can't find CTA */}
        <div className={styles.cantFind}>
          <div className={styles.cantFindInner}>
            <h3>Can't Find Your Part?</h3>
            <p>Send us your part name or photo and we'll source it directly from the factory.</p>
            <Link href="/about#contact" className="btn-primary">Contact Us</Link>
          </div>
        </div>
      </div>
    </>
  )
}
