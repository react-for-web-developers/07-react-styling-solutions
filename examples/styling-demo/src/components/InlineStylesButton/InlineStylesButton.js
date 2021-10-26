import styles from './styles';

function InlineStylesButton({ children }) {
  return (
    <button
      style={styles}
    >
      {children}
    </button>
  )
}

export default InlineStylesButton;
