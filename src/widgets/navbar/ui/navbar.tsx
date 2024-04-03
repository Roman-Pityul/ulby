import styles from './navbar.module.scss'
import { AppLink } from "../../../shared/ui/appkink/applink"

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <AppLink to={"/about"} className={styles.mainlink}>About</AppLink>
        <AppLink to={"/"}>Main</AppLink>
      </div>
      
    </div>
  )
}