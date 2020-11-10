import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import ButtonStyles from "../../styles/Buttons.module.scss";
import Styles from "./Styles.module.scss";
import FormStyles from "./Form.module.scss";
import addToMailchimp from "gatsby-plugin-mailchimp";
import Tick from "./TickGreenIcon.svg";
import EatIcon from "../Images/Icons/ChoiceEatIcon.svg";
import PowerIcon from "../Images/Icons/PowerIcon.svg";
import TravelIcon from "../Images/Icons/ChoiceTravelIcon.svg";
import LifestyleIcon from "../Images/Icons/ChoiceLifestyleIcon.svg";
import EnergyIcon from "../Images/Icons/ChoiceEnergyIcon.svg";
import RenewableIcon from "../Images/Icons/ChoiceRenewableIcon.svg";
import SoonIcon from "../Images/Icons/ChoiceSoonIcon.svg";
import Chevron from "../Images/Icons/ChevronGrayRightIcon.svg";
import JobIcon from "../Images/Icons/ChoiceJob.svg";

const ChoiceGridItems = () => {
  const [email, setEmail] = useState("");
  const [visited, setVisited] = useState({});
  const [message, setMessage] = useState();
  const [_, setResult] = useState();

  useEffect(function checkVisitedPages() {
    const visited = {
     "use-less-energy": localStorage.getItem("/use-less-energy") === "visited",
     "pressure-those-in-power":
        localStorage.getItem("/pressure-those-in-power") === "visited"
    };

    setVisited(visited);
  }, []);

  function renderReadStatus(slug) {
    if (visited[slug]) {
      return (
        <span
          className={`${Styles.choiceReadStatus} ${
            Styles.choiceReadStatusRead
          }`}
        >
          <img src={Tick} alt="Read it" />
       Toto ste už čítali
        </span>
      );
    }

    return <span className={Styles.choiceReadStatus}>Not read yet</span>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { result, msg } = await addToMailchimp(email);
    setResult(result);
    setMessage(msg);
  }

  return (
    <div className={Styles.choiceGridWrapper}>
      <ul className={Styles.choiceGrid}>
       <li className={`${Styles.choiceGridItem} ${Styles.choiceEat}`}>
          <Link className={Styles.choiceContainer} to="/use-less-energy">
            <div className={Styles.choiceHeader}>
              <div className={Styles.choiceIcon}>
                <img src={EnergyIcon} alt="Light bulb" />
              </div>

              <img
                className={Styles.choiceChevron}
                src={Chevron}
                alt="Chevron"
              />
            </div>
            <h2 className={Styles.choiceTitle}>
              Spotrebujte menej<br />
             energie
            </h2>
            <div className={Styles.choiceMeta}>
              {renderReadStatus("use-less-energy")}
            </div>
          </Link>
        </li>


        <li className={`${Styles.choiceGridItem} ${Styles.choicePower}`}>
          <Link
            className={Styles.choiceContainer}
            to="/pressure-those-in-power"
          >
            <div className={Styles.choiceHeader}>
              <div className={Styles.choiceIcon}>
                <img src={PowerIcon} alt="Gavel" />
              </div>

              <img
                className={Styles.choiceChevron}
                src={Chevron}
                alt="Chevron"
              />
            </div>
            <h2 className={Styles.choiceTitle}>
              Tlak na mocných
            </h2>
            <div className={Styles.choiceMeta}>
              {renderReadStatus("pressure-those-in-power")}
            </div>
          </Link>
        </li>
        <li className={`${Styles.choiceGridItem} ${Styles.choiceGridSoon}`}>
          <div className={Styles.choiceContainer}>
            <div className={Styles.choiceHeader}>
              <div className={`${Styles.choiceIcon} ${Styles.choiceSoonIcon}`}>
                <img src={SoonIcon} alt="Ďalšie príručky už čoskoro" />
              </div>
            </div>
            <h2 className={`${Styles.choiceTitle} ${Styles.choiceSoonTitle}`}>
              Sleduj tento <br /> priestor...
            </h2>
            <div className={Styles.choiceMeta}>
              <span className={Styles.choiceReadStatus}>
             Ďalšie príručky už čoskoro
              </span>
            </div>
          </div>
        </li>
      </ul>
      <div className={Styles.subscribe}>
        <div className={Styles.subscribeForm}>
          <h3 className={Styles.subscribeTitle}>
 Dostanete upozornenie, keď pridáme ďalších sprievodcov
           </h3>
          <form className={FormStyles.fieldContainer} onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              placeholder="Enter your email address..."
              aria-label="Enter your email address..."
              className={FormStyles.field}
            />
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
              className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnSm} ${
                ButtonStyles.btnPrimary
              } ${ButtonStyles.btnMobile}`}
            />
          </form>
        </div>
        {message && (
          <div className={FormStyles.status}>
            <p className={FormStyles.statusMsg}>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChoiceGridItems;
