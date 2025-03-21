import styles from "../assets/styles/main.module.css"

const Button = ({ text, type }) => {
  return <button className={`button button--${type}`}>{text}</button>;
};

export default Button;