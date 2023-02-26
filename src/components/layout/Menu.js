import Link from '../common/Link/Link';
import styles from './menu.module.css'

export default function Menu() {
  const menuList = ["사전예약", "커뮤니티", "쿠폰입력", "미디어"];
  return (
    <ul className={styles.menu}>
      {menuList.map((menu) => (
        <li key={menu}><Link href="" color="#fff">{menu}</Link></li>
      ))}
    </ul>
  )
}