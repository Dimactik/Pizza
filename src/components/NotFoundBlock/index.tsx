import React from "react";

import styles from "./NotFloundBlock.module.scss";

export const NotFoundBlock = () => {
  return (
    <h1 className={styles.root}>
      <span>:(</span>
      <br />
      Nothing to Find
    </h1>
  );
};

export default NotFoundBlock;
