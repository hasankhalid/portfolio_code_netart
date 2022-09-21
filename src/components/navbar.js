import styles from './css-modules/navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar({ logo_text, navArr, socials }) {
  return (
    <nav className={styles.container}>
        <div className={styles.logo_container}>
            {logo_text && logo_text.split("").length > 0 && logo_text.split("").map((char, index) => {
                return <span key={'logo_text' + index} className={styles.logo_char}>{char}</span>
            })}
        </div>
        <section className={styles.nav_links}>
            {navArr && navArr.length > 0 && navArr.map((navItem, index) => {
                return <Link to={navItem.linkTo} className={styles.nav_item} key={'nav' + index}><p className={styles.nav_text}>{navItem.text}</p></Link>
            })}
        </section>
        <section className={styles.nav_socials}>
            {socials && socials.length > 0 && socials.map((social, index) => {
                return <div key={'social' + index}>{social.render}</div>
            })}
        </section>
    </nav>
  );
}

export default Navbar;
