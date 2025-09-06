import React, { useContext } from "react";
import styles from "./aboutUs.module.css";
import AboutImg from "../../../../public/aboutUs/aboutUs1.png";
import { UserContext } from "../../../Context/UserContext";

const AboutUs = () => {
  const value = useContext(UserContext);
  return (
    <div className={styles.grid}>
      {/* Text Section */}
      <div className={styles.about}>
        <h3>About Us</h3>
        <p className={styles.writeUp}>
          Every great outfit deserves the perfect bag, and for us, that bag
          doesn’t have to be big to make a statement. We started this brand with
          a simple idea: to create mini bags that blend style, comfort, and
          everyday convenience. Our collection is designed for real people with
          real lifestyles—whether you’re heading to brunch, traveling light, or
          stepping out for the evening. With us, it’s not just about fashion,
          it’s about confidence, self-expression, and carrying your essentials
          in style.
        </p>
      </div>

      {/* Image Section */}
      <div className={styles.about}>
        <div className={styles.imgContainer}>
          <img src={AboutImg} alt="About us mini bag" />
        </div>
      </div>
      <p>{value}</p>
    </div>
  );
};

export default AboutUs;

// import React from "react";
// import styles from "./aboutUs.module.css";
// import AboutImg from "../../../../public/aboutUs/aboutUs1.png";
// const AboutUs = () => {
//   return (
//     <div className={styles.grid}>
//       <div className={styles.about}>
//         <h3>About Us</h3>
//         <p className={styles.writeUp}>
//           We believe the right bag can make every day a little brighter. That’s
//           why we created a collection of mini bags that are stylish, practical,
//           and affordable. Our bags are designed to fit your lifestyle—whether
//           you’re running errands, going out with friends, or dressing up for a
//           special occasion. At the heart of our brand is a love for fashion that
//           feels easy and fun. We focus on quality, fresh designs, and everyday
//           comfort so you can carry your essentials in style. With us, it’s not
//           just about owning a bag—it’s about expressing yourself in a way that
//           feels simple and confident.
//         </p>
//       </div>

//       <div className={styles.about}>
//         <div className={styles.imgContainer}>
//           <img src={AboutImg} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
