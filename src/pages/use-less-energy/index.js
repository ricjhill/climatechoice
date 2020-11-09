import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import ChoiceSupport from "../../components/ChoiceSupport";
import SEO from "../../components/seo";
import GlobalStyles from "../../styles/Global.module.scss";
import ChoiceStyles from "../../styles/Choice.module.scss";
import ButtonStyles from "../../styles/Buttons.module.scss";
import Styles from "./Styles.module.scss";
import ShareSocialCta from "../../components/ShareSocialCta";
import ChoiceGridOnChoice from "../../components/ChoiceGrid/onChoice";
import HowIcon from "../../components/Images/Icons/HowIcon.svg";
import BannerImg from "../../components/Images/Graphics/choiceBannerLessEnergy.svg";
import shareConfig from "../../configs/pages/choiceLessEnergyConfig";
import EarthyShare from "../../components/EarthyShare";

const UseLessEnergyPage = () => (
  <Layout>
    <SEO
      title="Na predchádzanie klimatickým zmenám používajte menej energie"
      description="Až 75% energie pochádza zo skleníkových plynov a plytvaním energií škodíme najmä životnému prostrediu."
      image="https://climatechoice.co/images/Seo/energy.jpg"
      keywords={[
        'Energetická účinnosť',
                'plytvanie energiou z klimatických zmien',
                'predchádzať menšej spotrebe energie v dôsledku zmeny klímy',
                'plytvanie energiou pri zmene podnebia',
                'izolácia domov pre zmenu podnebia',
                'izolácia domu pre zmenu podnebia',
                'zabrániť žiarovkám pri zmene podnebia',
                'žiarovky pre zmenu podnebia',
                'stolný počítač so zmenou podnebia',
                'zmena podnebia horúca voda',
                'zmena podnebia vo vani',
                'zmena podnebia vypnúť svetlá',
                'zmena podnebia v podnebí',
                'zmena podnebia sa stane energeticky účinnou',
                'termostat na zmenu podnebia',
                'Použite menej energie',
                'ClimateChoice',
                'zmena podnebia',
                'klimatické zrútenie',
                'globálne otepľovanie',
                'riešenia globálneho otepľovania',
                'Fakty o zmene podnebia',
                'riešenia zmeny podnebia'
      ]}
    />
    <section className={`${ChoiceStyles.banner} ${Styles.banner}`}>
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.inner}`}>
        <div
          className={`${ChoiceStyles.bannerContent} ${Styles.bannerContent}`}
        >
          <h1 className={`${ChoiceStyles.bannerTitle} ${Styles.bannerTitle}`}>
            Aký dopad má plytvanie energiami na zhoršovanie klímy/ klimatické zmeny?
          </h1>
          <p className={`${ChoiceStyles.bannerDesc} ${Styles.bannerDesc}`}>
            Uvedomili ste si niekedy že neefektívnym využívaním energií každoročne zvyšujeme produkciu a teda vlastne produkujeme energiu, ktorú v skutočnosti ani nepotrebujme? Až <b>75%</b> energie pochádza zo skleníkových plynov a plytvaním energií škodíme najmä životnému prostrediu.
          </p>

          <div className={ChoiceStyles.bannerActions}>
            <a
              className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnMd} ${
                ButtonStyles.btnBanner
              } ${ButtonStyles.btnMobile}`}
              href="#actions"
            >
             Už ste sa niekedy zamysleli prečo by sme mali chcieť prestať plytvať energiami?
            </a>
            <div className={ChoiceStyles.bannerCtaSecondary}>
              <a href="#how" title="How it happens">
                Discover how it happens
              </a>
            </div>
          </div>
        </div>
        <div className={`${ChoiceStyles.bannerImg} ${Styles.bannerImg}`}>
          <img
            src={BannerImg}
            alt="Yomo"
            className={`${ChoiceStyles.bannerImgShadow} ${
              Styles.bannerImgShadow
            }`}
          />
        </div>
      </div>
    </section>
    <section className={`${ChoiceStyles.cba} ${Styles.cba}`}>
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.cbaInner}`}>
        Short on time?{" "}
        <a
          className={ChoiceStyles.cbaAction}
          href="#tldr"
          title="Read a summary"
        >
          Get a quick summary
        </a>
      </div>
    </section>
    <section
      className={`${ChoiceStyles.how} ${Styles.how}`}
      id="how"
      aria-label={"How to use less energy"}
    >
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.howInner}`}>
        <div className={`${ChoiceStyles.howContent} ${Styles.howContent}`}>
          <h1 className={`${ChoiceStyles.howTitle} ${Styles.howTitle}`}>
            How wasting energy contributes to climate breakdown
          </h1>
          <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
            Every year we waste more energy than we use. Our inefficient use of
            this energy results in the production of a greater amount than is
            necessary.
          </p>
          <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
            75% of our energy comes from greenhouse gas emitting sources.{" "}
            <b>
              By wasting so much energy we’re causing a great deal more harm to
              the environment
            </b>
            .
          </p>
        </div>
        {/* <div className={`${ChoiceStyles.howImg} ${Styles.howImg}`}>Image</div> */}
      </div>
    </section>
    <section className={`${ChoiceStyles.stops} ${Styles.stops}`}>
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.stopsInner}`}>
        <div className={`${ChoiceStyles.stopsImg} ${Styles.stopsImg}`}>
          <h1 className={`${ChoiceStyles.stopsTitle} ${Styles.stopsTitle}`}>
            ?
          </h1>
        </div>
        <div className={`${ChoiceStyles.stopsContent} ${Styles.stopsContent}`}>
          <div
            className={`${ChoiceStyles.stopsListContainer} ${
              Styles.stopsListContainer
            }`}
          >
            <ol
              className={`${ChoiceStyles.choiceList} ${
                ChoiceStyles.stopsList
              } ${Styles.stopsList}`}
            >
              <li>
                Niektorí z nás si ani neuvedomujú aké následky má neúsporné využívanie energií a že vôbec energiami plytvajú.
              </li>
              <li>
                Každý z nás by sa mal preto zamyslieť ako môžem ja,  ako jednotlivec prispieť k riešeniu problému.
              </li>
              <li>
                Čo môžem urobiť, aby som zefektívnil každodenné využívanie energií, ako prispieť aspoň malým krôčikom k lepšej využiteľnosti.
              </li>
              <li>
               Niektoré riešenia, sú jednoduché, niektoré najmä tie dlhodobejšie vyžadujú viac a času a najmä prvotnú investíciu, čo nás môže odrádzať, pretože aj napriek tomu, že z dlhodobého hľadiska uvidíme úsporu, niekedy je ťažké investovať do niečoho, čoho výsledky nevidíme hneď.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section
      className={`${ChoiceStyles.actions} ${Styles.actions}`}
      id="actions"
    >
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.actionsInner}`}>
        <div
          className={`${ChoiceStyles.actionsContent} ${Styles.actionsContent}`}
        >
          <h1 className={`${ChoiceStyles.actionsTitle} ${Styles.actionsTitle}`}>
            What you can do now
          </h1>
        </div>
        <div className={`${ChoiceStyles.action} ${Styles.action}`}>
          <div
            className={`${ChoiceStyles.actionContent} ${Styles.actionContent}`}
          >
            <h2 className={`${ChoiceStyles.actionTitle} ${Styles.actionTitle}`}>
              Setup your home so less energy is required
            </h2>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              To start, one of the easiest things to do is{" "}
              <b>improve your insulation</b>. Doing so can reduce your energy
              needs by up to 30%! A worthy investment.
            </p>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              Next{" "}
              <b>
                replace older energy-zapping light bulbs with energy-saving LED
                bulbs
              </b>
              . They use 5x less energy, last 25x longer and can cost 6x less
              over 20 years.
            </p>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              When you need to replace an appliance, purchase an energy
              efficient alternative.{" "}
              <b>Check potential purchases for energy efficiency ratings</b> and
              consider higher quality items – they last longer. Consider getting
              rid of desktop computers, as laptops can be up to 5 times more
              energy efficient.
            </p>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              Lastly don’t forget to{" "}
              <Link
                to="/choose-renewable-energy#actions"
                title="Use renewable energy"
                aria-label={"User renewable energy"}
              >
                power your home with renewable energy
              </Link>
              .
            </p>
          </div>
          <div className={`${ChoiceStyles.actionAside} ${Styles.actionAside}`}>
            <div
              className={`${ChoiceStyles.actionAsideContainer} ${
                Styles.actionAsideContainer
              }`}
            >
              <h3
                className={`${ChoiceStyles.actionAsideTitle} ${
                  Styles.actionAsideTitle
                }`}
              >
                Need help changing?
              </h3>
              <ul
                className={`${ChoiceStyles.actionAsideList} ${
                  Styles.actionAsideList
                }`}
              >
                <li>
                  <OutboundLink
                    href="https://www.wikihow.com/Insulate-Your-Home"
                    title="Learn how to insulate your home"
                  >
                    Learn how to insulate your home →
                  </OutboundLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`${ChoiceStyles.action} ${Styles.action} ${
            ChoiceStyles.actionAnother
          }`}
        >
          <div
            className={`${ChoiceStyles.actionContent} ${Styles.actionContent}`}
          >
            <h2 className={`${ChoiceStyles.actionTitle} ${Styles.actionTitle}`}>
              When you do use energy, choose to be more efficient to reduce
              waste
            </h2>

            <h3
              className={`${ChoiceStyles.actionPointTitle} ${
                Styles.actionPointTitle
              }`}
            >
              Use less hot water
            </h3>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              Heating water uses energy. Try taking short showers instead of
              filling the bathtub. Lower your washing machine temperature. When
              your clothes are washed hang dry them instead of using a dryer.
            </p>

            <h3
              className={`${ChoiceStyles.actionPointTitle} ${
                Styles.actionPointTitle
              }`}
            >
              Turn everything off
            </h3>

            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              Don’t leave your appliances on standby, switch them off. When you
              leave a room always make sure you turn any lights off too.
            </p>
            <h3
              className={`${ChoiceStyles.actionPointTitle} ${
                Styles.actionPointTitle
              }`}
            >
              Switch off your heating
            </h3>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              Adjust your thermostat and radiators. Only choose to heat your
              home when absolutely necessary. Warmer clothes or a blanket can
              often do the same job.
            </p>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              <OutboundLink
                href="https://blog.constellation.com/2016/01/01/31-ways-to-save-energy-in-your-home/"
                title="Energy efficiency tips"
              >
                Read this to learn more ways to become energy efficient
              </OutboundLink>
              .
            </p>
            <h3
              className={`${ChoiceStyles.actionHowTitle} ${
                Styles.actionHowTitle
              }`}
            >
              <img src={HowIcon} alt="How it helps" />
              How much would this help?
            </h3>
            <p className={`${ChoiceStyles.paragraph} ${Styles.paragraph}`}>
              75% of energy production is harmful to the environment, and we
              could reduce this harm greatly by reducing energy usage. We’d then
              be able to provide almost half of our energy with renewable
              sources like solar and wind.
            </p>
          </div>

          <div className={`${ChoiceStyles.actionAside} ${Styles.actionAside}`}>
            <div
              className={`${ChoiceStyles.actionAsideContainer} ${
                Styles.actionAsideContainer
              }`}
            >
              <h3
                className={`${ChoiceStyles.actionAsideTitle} ${
                  Styles.actionAsideTitle
                }`}
              >
                Need help changing?
              </h3>
              <ul
                className={`${ChoiceStyles.actionAsideList} ${
                  Styles.actionAsideList
                }`}
              >
                <li>
                  <OutboundLink
                    href="https://learn.eartheasy.com/guides/energy-efficient-lighting/"
                    title="Energy efficient lighting guide"
                  >
                    Energy efficient lighting guide →
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    href="https://learn.eartheasy.com/guides/energy-efficient-appliances/"
                    title="Learn how to choose energy efficient appliances"
                  >
                    Learn how to choose energy efficient appliances →
                  </OutboundLink>
                </li>
                <li>
                  <Link
                    to="/offset-your-carbon-footprint"
                    title="Offset your carbon footprint"
                  >
                    Can’t help energy wastage? Offset your household emissions →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ShareSocialCta {...shareConfig} />
    <ChoiceSupport />
    <section className={`${ChoiceStyles.tldr} ${Styles.tldr}`} id="tldr">
      <div className={`${GlobalStyles.inner} ${ChoiceStyles.tldrInner}`}>
        <div className={`${ChoiceStyles.tldrImg} ${Styles.tldrImg}`} />
        <div className={`${ChoiceStyles.tldrContent} ${Styles.tldrContent}`}>
          <div
            className={`${ChoiceStyles.tldrListContainer} ${
              Styles.tldrListContainer
            }`}
          >
            <h1 className={`${ChoiceStyles.tldrTitle} ${Styles.tldrTitle}`}>
              Too long; didn't read?
            </h1>
            <p
              className={`${ChoiceStyles.tldrSubtitle} ${Styles.tldrSubtitle}`}
            >
              We’re killing the planet by wasting so much of the energy we
              produce. We must become more efficient with our energy usage by:
            </p>
            <ul className={`${ChoiceStyles.tldrList} ${Styles.tldrList}`}>
              <li>
                Make your home more energy efficient with better insulation and
                light bulbs
              </li>
              <li>Use less hot water and turn stuff off</li>
              <li>Vote for those who prioritize the planet</li>
              <li>
                <a href="#share" alt="Spread the word">
                  Spread the word
                </a>{" "}
                so others make changes too
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <ChoiceGridOnChoice />
    <EarthyShare />
  </Layout>
);

export default UseLessEnergyPage;
