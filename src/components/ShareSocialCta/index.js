import React from "react";
import GlobalStyles from "../../styles/Global.module.scss";
import styles from "./Styles.module.scss";
import { Location } from "@reach/router";

import CopyLinkButton from "../SocialButtons/CopyLinkButton";
import EmailButton from "../SocialButtons/EmailButton";
import TwitterButton from "../SocialButtons/TwitterButton";
import FacebookButton from "../SocialButtons/FacebookButton";
import WhatsappButton from "../SocialButtons/WhatsappButton";
import LinkedinButton from "../SocialButtons/LinkedInButton";
import EarthIcon from "../Images/Icons/EarthIcon.svg";

function ShareSocialCta({
  children,
  ctaCopy,
  ctaTitle,
  emailBody,
  emailSubject,
  facebookQuote,
  facebookHashtag,
  linkedinTitle,
  linkedinDescription,
  twitterTitle,
  twitterAccount,
  twitterHashtags,
  url,
  whatsappTitle,
  currentUrl
}) {
  return (
    <section id="share" aria-label="share" className={styles.container}>
      <div className={`${GlobalStyles.inner} ${styles.inner}`}>
        {/* cta block / right col */}
        <div className={styles.ctaCopy}>
          <div className={styles.icon}>
            <img src={EarthIcon} alt="Earthy" className={styles.earthIcon} />
          </div>
          <div className={styles.title}>
            <span className={styles.titleShare}>Šírte informácie</span>
            <span className={styles.titleSave}>o záchrane sveta</span>
          </div>
          <p className={styles.copy}>{ctaCopy}</p>
        </div>
        {children}
        {/* social block  / right col */}
        <div className={styles.socialBlock}>
          <div className={styles.socialBlockContent}>
            <h3 className={styles.subTitle}>Chceš pomôcť? Skvelé!</h3>
            <p>Pošlite túto stránku svojim priateľom, rodine a nasledovníkom prostredníctvom našej praktickej vopred napísanej správy.</p>

            <div className={styles.socialContainer}>
              <div className={styles.socialButton}>
                <TwitterButton
                  url={url}
                  currentUrl={currentUrl}
                  twitterTitle={twitterTitle}
                  twitterAccount={twitterAccount}
                  hashtags={twitterHashtags}
                />
              </div>
              <div className={styles.socialButton}>
                <FacebookButton
                  url={url}
                  currentUrl={currentUrl}
                  facebookQuote={facebookQuote}
                  facebookHashtag={facebookHashtag}
                >
                  {null}
                </FacebookButton>
              </div>
              <div className={styles.socialButton}>
                <WhatsappButton url={url} whatsappTitle={whatsappTitle} />
              </div>
              <div className={styles.socialButton}>
                <LinkedinButton
                  url={url}
                  currentUrl={currentUrl}
                  title={linkedinTitle}
                  description={linkedinDescription}
                />
              </div>
              <div className={styles.socialButton}>
                <EmailButton
                  emailBody={emailBody}
                  currentUrl={currentUrl}
                  emailSubject={emailSubject}
                />
              </div>
              <div className={styles.socialButton}>
                <CopyLinkButton currentUrl={currentUrl} />
              </div>
            </div>
          </div>
          <span className={styles.thanks}>
            Thank you{" "}
            <span role="img" aria-label="raising_hands">
              🙌
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}

export default function(props) {
  return (
    <Location>
      {({ location }) => (
        <ShareSocialCta {...props} currentUrl={location.href} />
      )}
    </Location>
  );
}
