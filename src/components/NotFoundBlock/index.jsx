import React from 'react';
import styles from './NotFoundBlock.module.scss';
const NotFoundBlock = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <p>К сожалению данная страница остутствует в нашем интернет магазине</p>
    </div>
  );
};

export default NotFoundBlock;
