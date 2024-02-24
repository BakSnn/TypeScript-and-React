import React from 'react';
import styles from '../Button/Button.module.css'
const Button = ({ text, onClick }) => {
  return (
    <button className={styles.buttonStyle} onClick={onClick}>{text}</button>
  );
};

export default Button;
