import React from "react";
import styles from "./Styles.module.scss";

export default function Banner() {
  return (
    <a href="#share" className={styles.link} aria-label={"Share"}>
      <div className={styles.bannerStyles}>
        It's World Environment Day{" "}
        <span role="img" aria-label="Earth">
          🌎
        </span>{" "}
        Zdieľajte túto stránku, aby ste pomohli ostatným pri lepšom rozhodovaní o znížení
                 Členenie podnebia
      </div>
    </a>
  );
}
