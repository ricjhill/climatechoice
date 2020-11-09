import React from "react";
import GlobalStyles from "../../styles/Global.module.scss";
import Styles from "./Styles.module.scss";
import ChoiceGridItems from "./items";

const ChoiceGrid = () => (
  <section
    id="your-choices"
    className={`${GlobalStyles.container} ${Styles.choiceGridContainer} ${
      Styles.choiceGridContainerOnHome
    }`}
  >
    <div
      className={`${GlobalStyles.inner} ${GlobalStyles.subpageInner} ${
        Styles.choiceGridInner
      }`}
    >
      <div className={GlobalStyles.subpageContent}>
        <h1 className={`${GlobalStyles.title} ${GlobalStyles.subpageTitle}`}>
Vaše dnešné rozhodnutia môžu pomôcť zabrániť zlyhaniu podnebia
        </h1>
        <p>
          Nie je neskoro potlačiť účinky globálneho otepľovania skôr, ako sa vymknú spod kontroly a spôsobia nezvratnú devastáciu na celej našej planéte. <b>Musíme však konať hneď</b>. Vytvorili sme jednoduchých sprievodcov o možnostiach, ktoré môžete dnes urobiť, aby sme podnikli kroky a pomohli zabrániť narušeniu klímy Zeme:
        </p>
      </div>
    </div>
    <div className={`${GlobalStyles.inner} ${Styles.inner}`}>
      <ChoiceGridItems />
    </div>
  </section>
);

export default ChoiceGrid;
