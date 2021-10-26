import './styles.css'; // -> webpack creates a <style></style> in the head...

function CSSButton({ children }) {
  return (
    <button className="button">{children}</button>
  )
}

export default CSSButton;
