import React, { useState, useEffect } from "react";
import GlobalStyles from "../../styles/Global.module.scss";
import ButtonStyles from "../../styles/Buttons.module.scss";
import Styles from "./Styles.module.scss";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import HomeBanner from "./homeBanner.svg";

import ConvincedButton from "../ConvincedButton";

const HomeIntro = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 2000);
  }, []);

  return (
    <section className={Styles.container}>
      <div className={`${GlobalStyles.inner} ${Styles.inner}`}>
        <div className={Styles.content}>
          <h1 className={Styles.title}>
            Musíme znížiť globálne emisie na polovicu do roku 2030 alebo čeliť hromadnému vymieraniu{" "}
            {!mounted ? (
              <span className={Styles.titleEmphasis}>čeliť hromadnému vymieraniu</span>
            ) : (
              <TypistLoop interval={0}>
                {[
               "extrémne počasie",
                                  "nedostatok vody",
                                  "neúroda",
                                  "požiare",
                                  "hromadné migrácie",
                                  "hladina mora stúpa",
                                  "hromadné vymieranie“
                ].map(text => (
                  <Typist
                    className={Styles.typist}
                    key={text}
                    cursor={{ show: false }}
                    avgTypingDelay={45}
                  >
                    <span className={Styles.titleEmphasis}>{text}</span>
                    <Typist.Backspace count={text.length} delay={3000} />
                  </Typist>
                ))}
              </TypistLoop>
            )}
          </h1>
          <div className={Styles.ctas}>
            <a
              className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnMd} ${
                ButtonStyles.btnBanner
              } ${ButtonStyles.btnMobile}`}
              href="#your-choices"
            >
              Zistite, ako môžete pomôcť
            </a>
            <ConvincedButton />
          </div>
        </div>
        <div className={Styles.img}>
          <img
            src={HomeBanner}
            alt="CO2 Emissions Target"
            className={Styles.bannerImg}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
