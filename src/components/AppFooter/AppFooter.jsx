import styles from "../AppFooter/AppFooter.module.css";
import instagram from "../../../public/instagram-fill 1.png";
import twitter from "../../../public/twitter-fill 1.png";
import linkedin from "../../../public/linkedin-box-fill 1.png";

const AppFooter = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerContainer}>
            <div>GreatZone 2022 copyright all rights reserved</div>
            <div className={styles.footerItems}>
                <div><img src={instagram} alt="Image" width="20px" height="20px"/></div>
                <div><img src={twitter} alt="Image" width="20px" height="20px"/></div>
                <div><img src={linkedin} alt="Image" width="20px" height="20px"/></div>
            </div>
        </div>
    </footer>
  )
}

export default AppFooter