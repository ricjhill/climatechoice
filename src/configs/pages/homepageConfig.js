import React from "react";

const BoldText = ({ children }) => (
  <b style={{ fontWeight: "bold" }}>{children}</b>
);

const homePageConfig = {
  ctaTitle: "Spread the word!",

  ctaCopy: (
    <>
      <BoldText>Nepredpokladajte</BoldText>, že každý vie o možnostiach, ktoré môžu dnes urobiť, aby sa zabránilo zlyhaniu klímy.
    .{" "}
      <BoldText>Potrebujeme, aby si každý uvedomil, čo môže robiť. </BoldText>.
      Takto môžu robiť informované rozhodnutia.
    </>
  ),
  emailSubject: "Join me in helping prevent climate change!",
  emailBody:
    "Hey! The choices we make today can help prevent earth’s climate breaking down 🌎🔥 Check out this site to learn how you can make simple changes to reduce your carbon footprint 👣 https://climatechoice.co/",
  linkedinTitle: "ClimateChoice",
  linkedinDescription:
    "Learn how you can help prevent earth’s climate breaking down.",
  facebookHashtag: "#climatechange",
  twitterTitle: "Learn how you can help prevent earth’s climate breaking down",
  twitterAccount: "climatechoice",
  twitterHashtags: ["climatechange", "climatebreakdown"],
  socialTitle: "Want to help? Great!",
  socialCopy:
    "Send this page to your friends, family and followers via our handy pre-written message.",
  url: "https://climatechoice.co/",
  whatsappTitle:
    "Hey! The choices we make today can help prevent earth’s climate breaking down 🌎🔥 Check out this site to learn how you can make simple changes to reduce your carbon footprint 👣"
};

export default homePageConfig;
