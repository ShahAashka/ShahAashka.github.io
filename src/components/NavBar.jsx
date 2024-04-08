import CustomLink from '../common/CustomLink';
import { HashLink } from 'react-router-hash-link'
import styles from '../styles/NavBar.module.css';


const NavBar = () => {
  return (
    <nav className={styles.navMainContainer}>
      <div className={styles.navInner}>
        <HashLink to='#' className='logoNavbar'>
          <img alt="Site Logo" width={36} height={36} src='/android-chrome-512x512.png'/>
        </HashLink>
        <ul className={styles.listOfNavs}>
            <CustomLink to='#about' className={styles.listItemStyle}>About</CustomLink>
            <CustomLink to='#projects' className={styles.listItemStyle}>Projects</CustomLink>
            <CustomLink to='#contact' className={styles.listItemStyle}>Contact</CustomLink>
        </ul>
        <button className={styles.resumeButton}>Resume</button>
      </div>
    </nav>
  )
}

export default NavBar