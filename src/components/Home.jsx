import React from "react";
import { Link } from "react-router-dom";
import styles from './Home.module.css';

const Home = () => {
  const menuItems = [
    { name: "Iced Artisan Coffee", price: "₹250", img: "/cafe-image/coldcoffee.png" },
    { name: "Decadent Chocolate Cookie", price: "₹100", img: "/cafe-image/cookies.png" },
    { name: "Velvet Cappuccino", price: "₹150", img: "/cafe-image/cappuccino-coffee.avif" },
    { name: "Gourmet Cupcake", price: "₹200", img: "/cafe-image/cupcake.avif" },
    { name: "Fluffy Pancake Stack", price: "₹150", img: "/cafe-image/pancake.jpg" },
    { name: "Creamy Butterscotch Shake", price: "₹300", img: "/cafe-image/butterscotch-shake.jpg" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src="/cafe-image/cafe-logo.webp" alt="Artisan Café Logo"/>
        </div>
        
        <nav className={styles.navLinks}>
          <Link className={styles.navLink} to="/menu">Menu</Link>
          <Link className={styles.navLink} to="/about">About Us</Link>
          <Link className={styles.navLink} to="/reviews">Reviews</Link>
          <a className={styles.navLink} href="#footer">Locations</a>
        </nav>
                    
        <div className={styles.searchContainer}>
          <input className={styles.search} placeholder="Search our menu..."/>
          <button className={styles.searchButton}>
            <img src="/cafe-image/searchbutton.png" alt="Search" width="20"/>
          </button>
        </div>
        
        <div className={styles.authButtons}>
          <Link to="/reservationform">
            <button className={`${styles.btn} ${styles.btnPrimary}`}>Make Reservation</button>
          </Link>
        </div>
      </header>

      <section className={styles.hero}>
        <h1 className={styles.slogan}>Experience the <strong>Art of Coffee</strong> & Handcrafted Delights</h1>
      </section>

      <section className={styles.menuSection}>
        <h2 className={styles.sectionTitle}>Our Signature Creations</h2>
        <div className={styles.grid}>
          {menuItems.map((item, i) => (
            <div key={i} className={styles.menuItem}>
              <img className={styles.menuImage} src={item.img} alt={item.name} />
              <div className={styles.menuDetails}>
                <h3 className={styles.itemName}>{item.name}</h3>
                <div className={styles.priceContainer}>
                  <p className={styles.itemPrice}>{item.price}</p>
                  <button className={`${styles.btn} ${styles.btnSecondary} ${styles.orderBtn}`}>
  Add to Order
</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer} id="footer">
        
        <p>123 Coffee Lane, Brew District, Mumbai 400001</p>
        <p>Open Daily: 7:00 AM - 9:00 PM</p>
        <p className={styles.copyright}>© 2023 Coffee & Cookie Café. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;