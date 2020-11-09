import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import buttonStyles from "../../styles/Buttons.module.scss";
import EmailIcon from "../Images/Icons/EmailIcon";

export default function EmailButton({ emailSubject, emailBody }) {
  return (
    <a
      style={{ textDecoration: "none" }}
      href={`mailto:?subject=${emailSubject}&body=${emailBody}`}
    >
      <div className={`${styles.button} ${buttonStyles.btnSimple}`}>
        <div className={styles.logo}>
          <EmailIcon fillColor="#898c92" />
        </div>
        Email
      </div>
    </a>
  );
}

EmailButton.defaultProps = {
  emailSubject: "Práve som videl tento nový web: Internete Setrnosti",
  emailBody: "Myslel som, že by ťa to mohlo zaujímať"
};

EmailButton.propTypes = {
  emailSubject: PropTypes.string,
  emailBody: PropTypes.string
};
