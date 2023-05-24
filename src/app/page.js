import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    // Header section
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={100}
          height={100}
        />
        <h1 className={styles.title}>
          資格受験共有サイト
        </h1>
        {/* メニュー サンプルで２個出す */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                メニュー１
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                メニュー２
              </a>
            </li>
          </ul>
        </nav>
        {/* サインインボタン */}
        <div className={styles.signin}>
          <a href="#" className={styles.signinLink}>
            サインイン
          </a>
        </div>
      </header>

      {/* コンテンツ部分 */}
      {/* 試験名毎のボタンを配置する場所 */}
      {/* 仮でAWS SAAとHTMLCSS認定 の２つのアイコンを並べる  */}
      <div className={styles.content}>
        <div className={styles.card}>
          <a href="#" className={styles.cardLink}>
            <Image
              src="/images/aws-saa.png"
              alt="aws-saa"
              width={100}
              height={100}
            />
            <h2 className={styles.cardTitle}>
              AWS SAA
            </h2>
          </a>
        </div>
        <div className={styles.card}>
          <a href="#" className={styles.cardLink}>
            <Image
              src="/images/htmlcss.png"
              alt="htmlcss"
              width={100}
              height={100}
            />
            <h2 className={styles.cardTitle}>
              HTMLCSS認定
            </h2>
          </a>
        </div>
      </div>

      {/* 受験記録をここに記載する */}
      {/* 仮でAWS SAAの受験記録を記載する */}
      <div className={styles.content}>
        <div className={styles.card}>
          <a href="#" className={styles.cardLink}>
            <h2 className={styles.cardTitle}>
              AWS SAA
            </h2>
            <p className={styles.cardText}>
              2021/10/10
            </p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="#" className={styles.cardLink}>
            <h2 className={styles.cardTitle}>
              AWS SAA
            </h2>
            <p className={styles.cardText}>
              2021/10/10
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}