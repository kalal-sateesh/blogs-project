import styles from "../Home/Home.module.css";
import group from "../../../public/group.png";
import image1 from "../../../public/image 1.png";
import image2 from "../../../public/image 2.png";
import image4 from "../../../public/image 4.png";
import image5 from "../../../public/image 5 (1).png";
import image7 from "../../../public/image 7.png";
import arrowDown from "../../../public/arrow-down-circle-fill 1.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../../contexts/BlogContext";

const Home = () => {
  const cards = [image2, image4, image5];

  const navigate = useNavigate();

  const { handleSetIsBlogTrue } =
    useContext(BlogContext);

  const handleClick = () => {
    navigate("/blog");
    handleSetIsBlogTrue();
  };

  const list = cards.map((ele, index) => {
    return (
      <div key={index} className={styles.card} onClick={handleClick}>
        <div className={styles.cardImage}>
          <img src={ele} alt="Image" width="100%" height="100%" />
        </div>
        <div className={styles.cardTextContainer}>
          <div className={styles.cardHead}>long established</div>
          <div className={styles.cardText}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that....
          </div>
          <div className={styles.cardRead}>
            <div className={styles.cardDate}>May 20th 2020</div>
            <div className={styles.cardReadText}>Read more</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <section className={styles.section1}>
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <h1>Make Zone Better !</h1>
            <div className={styles.zone}>Why Better Zone Important ?</div>
          </div>
          <div className={styles.imageContainer}>
            <img src={group} width="100%" height="100%" alt="Group-Image" />
          </div>
        </div>
      </section>
      <section className={styles.section2}>
        <div className={styles.section2Container}>
          <div className={styles.text}>
            <div className={styles.establishedContainer}>
              <h1>long established</h1>
              <div className={styles.loremText}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that....
              </div>
              <div className={styles.readMorecontainer}>
                <div className={styles.date}>May 20th 2020</div>
                <div className={styles.readMore}>Read more</div>
              </div>
            </div>
          </div>
          <div className={styles.image}>
            <img src={image1} alt="Icon" width="100%" height="100%" />
          </div>
        </div>
      </section>
      <section className={styles.section3}>{list}</section>
      <section className={styles.section4}>
        <div className={styles.section4Container}>
          <div className={styles.loremipsumTextContainer}>
            <div className={styles.loremHeadContainer}>
              <h1>What is Lorem Ipsum?</h1>
              <div className={styles.loremIpsumText}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution...
              </div>
              <div className={styles.ReadMoreTextContainer}>
                <div className={styles.date}>May 20</div>
                <div className={styles.readMore}>Read more</div>
              </div>
            </div>
          </div>
          <div className={styles.laptopImageContainer}>
            <img src={image7} alt="Image" width="100%" height="100%" />
          </div>
        </div>
      </section>
      <div className={styles.seemore}>
        <button>
          See more <img src={arrowDown} alt="down" width="20px" height="20px" />
        </button>
      </div>
    </>
  );
};

export default Home;
