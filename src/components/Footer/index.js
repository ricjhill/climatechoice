import React from "react";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import FacebookIcon from "../Images/Icons/FacebookIcon";
import TwitterIcon from "../Images/Icons/TwitterIcon";
import LinkedinIcon from "../Images/Icons/LinkedinIcon";
import InstagramIcon from "../Images/Icons/InstagramIcon";
import GlobalStyles from "../../styles/Global.module.scss";
import ButtonStyles from "../../styles/Buttons.module.scss";
import Styles from "./Styles.module.scss";
import Logo from "./LogoOnLight.svg";
import AvatarSteven from "./steven.jpg";
import AvatarPaul from "./paul.jpg";
import AvatarRachel from "./rachel.jpg";
import AvatarBarry from "./barry.jpg";
import AvatarMatt from "./matt.jpg";

const Footer = () => (
  <footer className={Styles.container}>
    <div className={`${GlobalStyles.inner} ${Styles.inner}`}>
      <div className={Styles.top}>
        <div className={Styles.company}>
          <Link to="/" title="Go back home">
            <img src={Logo} alt="ClimateChoice" />
          </Link>
          <p className={Styles.description}>
            Naučte sa, ako môžete zabrániť narušeniu klímy Zeme.
          </p>
          {/* <span className={Styles.social}>
            Follow us
            <a
              href="https://twitter.com/impactmakers_"
              title="Follow us on Twitter"
            >
              <TwitterIcon /> @climatechoice
            </a>
          </span> */}
          <ul className={Styles.social}>
            <li className={Styles.socialLink}>
              <OutboundLink
                href="https://twitter.com/climatechoice"
                title="Follow us on Twitter">
                <TwitterIcon />
              </OutboundLink>
            </li>
          </ul>
        </div>
        <div className={Styles.nav}>
          <div className={Styles.navCol}>
            <div className={Styles.navTitle}>Sitemap</div>
            <ul className={Styles.navList}>
              <li className={Styles.navItem}>
                <Link to="/" title="Go back home">
                  Home
                </Link>
              </li>
              <li className={Styles.navItem}>
                <Link
                  to="/contact#Prispieť"
                  title="Prispieť"
                >Prispieť</Link>
              </li>
              <li className={Styles.navItem}>
                <Link to="/about" title="O nas">
                  O nas
                </Link>
              </li>
              <li className={Styles.navItem}>
                <Link to="/contact" title="kontaktovať">
                  Kontaktovať
                </Link>
              </li>
            </ul>
          </div>
          <div className={Styles.choiceCol}>
            <div className={Styles.navTitle}>Your choices</div>
            <div className={Styles.choiceLists}>
              <ul className={`${Styles.navList} ${Styles.choiceList}`}>
               <li className={`${Styles.navItem} ${Styles.choiceItem}`}>
                  <Link to="/choose-renewable-energy">
                    Vyberte si obnoviteľnú energiu
                  </Link>
                </li>
                <li className={Styles.navItem}>
                  <Link to="/use-less-energy">Spotrebujte menej energie</Link>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.bottom}>
        <p className={Styles.disclaimer}>
         Zrieknutie sa zodpovednosti: Obsah tejto stránky je založený na preskúmanom materiáli
                    z celého webu. Robíme všetko pre to, aby sme vám ich poskytli čo najviac
                    presné informácie, ale niektoré údaje a návrhy môžu byť
                    nesprávne. Ak si nie ste istí, odporúčame vám vykonať ďalší prieskum
                    tvoj vlastný.
        </p>
      </div>
      <div className={Styles.impactMakers}>
        <h1 className={Styles.impactMakersTitle}>
          Forked from Climate Choice An Impact Makers project from:
        </h1>
        <ul className={Styles.impactMakersCreators}>
          <li className={Styles.impactMakersCreator}>
            <a
              href="https://twitter.com/shylands"
              title="Follow @shylands on Twitter"
            >
              <img
                className={Styles.impactMakerAvatar}
                src={AvatarSteven}
                alt="Steven"
              />
              @shylands
            </a>
          </li>
          <li className={Styles.impactMakersCreator}>
            <OutboundLink
              href="https://twitter.com/thepaulmcbride"
              title="Follow @thepaulmcbride on Twitter"
            >
              <img
                className={Styles.impactMakerAvatar}
                src={AvatarPaul}
                alt="Paul"
              />
              @thepaulmcbride
            </OutboundLink>
          </li>
          <li className={Styles.impactMakersCreator}>
            <OutboundLink
              href="https://twitter.com/tobequitefrank1"
              title="Follow @tobequitefrank1 on Twitter"
            >
              <img
                className={Styles.impactMakerAvatar}
                src={AvatarRachel}
                alt="Rachel"
              />
              @tobequitefrank1
            </OutboundLink>
          </li>

          <li className={Styles.impactMakersCreator}>
            <OutboundLink
              href="https://twitter.com/barrymcgee"
              title="Follow @barrymcgee on Twitter"
            >
              <img
                className={Styles.impactMakerAvatar}
                src={AvatarBarry}
                alt="Barry"
              />
              @barrymcgee
            </OutboundLink>
          </li>
          <li className={Styles.impactMakersCreator}>
            <OutboundLink
              href="https://twitter.com/thisismbd"
              title="Follow @thisismbd on Twitter"
            >
              <img
                className={Styles.impactMakerAvatar}
                src={AvatarMatt}
                alt="Matt"
              />
              @thisismbd
            </OutboundLink>
          </li>
        </ul>
        <p className={Styles.impactMakersDescription}>
          Impact Makers is a community of tech people who want to have a
          positive impact by helping prevent earth’s climate breaking down.
        </p>
        <div>
          <OutboundLink
            className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnMd} ${
              ButtonStyles.btnOrange
            } ${ButtonStyles.btnMobile}`}
            href="https://techimpactmakers.com"
          >
            Find out more about us
          </OutboundLink>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
