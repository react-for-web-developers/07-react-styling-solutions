import styles from './styles.module.css';

function CSSModuleButton({ children }) {
  return (
    <button className={styles.button}>{children}</button>
  )
}

export default CSSModuleButton;
