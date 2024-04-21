import styles from "../AppHeader/AppHeader.module.css";
import instagram from "../../../public/instagram-fill 1.png";
import twitter from "../../../public/twitter-fill 1.png";
import linkedin from "../../../public/linkedin-box-fill 1.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../../contexts/BlogContext";

const AppHeader = () => {
  const { isBlog, handleSetIsBlogTrue, handleSetIsBlogFalse } =
    useContext(BlogContext);

  const handleHomeClick = () => {
    handleSetIsBlogFalse();
  };

  const handlePostsClick = () => {
    handleSetIsBlogTrue();
  };

  return (
    <header>
      <nav className={styles.nav}>
        <label className={styles.hamburgur} htmlFor="input">
          &#9776;
        </label>
        <input type="checkbox" id="input"></input>
        <div className={styles.navHead}>
          {!isBlog ? "GreatZone" : "HotCoffee"}
        </div>
        <div className={styles.navItems}>
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/">
            {" "}
            <div onClick={handleHomeClick}>Home</div>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/blog"
          >
            <div onClick={handlePostsClick}>Posts</div>{" "}
          </NavLink>
          <div>
            <img src={instagram} alt="Insta-Logo" width="20px" height="20px" />
          </div>
          <div>
            {" "}
            <img src={twitter} alt="twitter-Logo" width="20px" height="20px" />
          </div>
          <div>
            {" "}
            <img
              src={linkedin}
              alt="LinkedIn-Logo"
              width="20px"
              height="20px"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
