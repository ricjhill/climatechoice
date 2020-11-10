import React from "react";
import GlobalStyles from "../../styles/Global.module.scss";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Styles from "./Styles.module.scss";

const SuccessBanner = () => (
  <section className={Styles.container}>
    <div className={`${GlobalStyles.inner} ${Styles.inner}`}>
      <h2 className={Styles.title}>
       Pomohla vám aplikácia ClimateChoice so zmenami?
      </h2>
      <p className={Styles.text}>
        Potom napíšte tweet vášho úspešného príbehu{" "}
        <OutboundLink
          href="https://twitter.com/climatechoice"
          title="Tweet @climatechoice"
        >
          @climatechoice
        </OutboundLink>{" "}
        22 / 5000
        Translation results
        a pridáme to sem!
      </p>
    </div>
  </section>
);

export default SuccessBanner;
