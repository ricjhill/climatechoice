import React, { useEffect } from "react";
import Helmet from "react-helmet";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/normalize.css";

function Layout(props) {
  useEffect(function recordVisited() {
    localStorage.setItem(window.location.pathname, "visited");
  }, []);

  const { banner, children } = props;

  return (
    <div>
      <Helmet>
        <link href="https://fast.fonts.net" rel="preconnect" crossorigin />
        <title>Internete Setrnosti</title>
        <script src="https://assets.digitalclimatestrike.net/widget.js" async />
        <script
          type="text/javascript"
          src="//fast.fonts.net/jsapi/7a7812b4-b519-456a-b42f-2ebffdee5e70.js"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      {banner && <Banner />}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
