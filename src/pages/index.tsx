import Link from 'next/link'
import React, { useRef } from 'react'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const navRef = useRef<HTMLElement>(null);

  const showNavBar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle(styles.responsive_nav);
    }
  }

  return (
    <div className={styles.containerCenter}>
      <header className={styles.header}>
        <img src='./assets/images/logo.svg'></img>
        <nav className={styles.teste} ref={navRef}>
          <Link className={styles.Link} href={''}>Home</Link>
          <Link className={styles.Link} href={''}>New</Link>
          <Link className={styles.Link} href={''}>Popular</Link>
          <Link className={styles.Link} href={''}>Trending</Link>
          <Link className={styles.Link} href={''}>Categories</Link>
          <button className={styles['nav-btn'] + " " + styles['nav-close-btn']} onClick={showNavBar}>X</button>
        </nav>
        <button className={styles['nav-btn']} onClick={showNavBar}><img src="./assets\images\icon-menu.svg" alt="" /></button>
      </header>



      <section className={styles.section}>
        <div className={styles.containerMain}>
          <div className={styles.containerLeft}>
            <div className={styles.containerImageDesktop}>
              <img src='./assets/images/image-web-3-desktop.jpg'></img>
            </div>
            <div className={styles.containerImageMobile}>
              <img src='./assets/images/image-web-3-mobile.jpg'></img>
            </div>
            <div className={styles.container1}>
              <div className={styles.containerH1}>
                <h1>The Bright Future of Web 3.0?</h1>
              </div>


              <div className={styles.container2}>
                <span>
                  We dive into the next evolution of the web that
                  claims to put the power of the plataforms back
                  into the hands of the people.But i it really
                  fulfilling its primise?
                </span>
                <button>READ MORE</button>
              </div>
            </div>
          </div>
          <div className={styles.containerRight}>
            <div className={styles.containerH3}>
              <span>New</span>
            </div>
            <div className={styles.containerRightCards}>
              <div className={styles.Card}>
                <h3>Hyddrogen vs Electric Cars</h3>
                <p>Will hydrogen-fueled cars ever catch up
                  to EVs?
                </p>
              </div>
              <div className={styles.Card}>
                <h3>The Downsides of AI Artistry</h3>
                <p>What are the possible adverse effects of
                  on-demand AI image generation?
                </p>
              </div>
              <div className={styles.CardNoBorder}>
                <h3>Is VC Funding Drying Up?</h3>
                <p>Private funding by VC firms is down 50%
                  YOY. We take a look at what that means.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.containerCarrosel}>
          <div className={styles.CarroselCard}>
            <img src='./assets\images\image-retro-pcs.jpg'></img>
            <div className={styles.CarroselCardInfo}>
              <h4>01</h4>
              <span>Reviving Retro PCs</span>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>
          <div className={styles.CarroselCard}>
            <img src='.\assets\images\image-top-laptops.jpg'></img>
            <div className={styles.CarroselCardInfo}>
              <h4>02</h4>
              <span>Top 10 Laptops of 2022</span>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </div>
          <div className={styles.CarroselCard}>
            <img src='.\assets\images\image-gaming-growth.jpg'></img>
            <div className={styles.CarroselCardInfo}>
              <h4>03</h4>
              <span>The Growth of Gaming</span>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </div>
      </section >
    </div >
  )
}
