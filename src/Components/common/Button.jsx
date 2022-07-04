import styles from "./Button.module.css";

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className={styles.button} data-testid="button">
      {children}
    </button>
  );
}

export default Button;
