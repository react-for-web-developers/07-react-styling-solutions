import useStyles from './styles';

function CSSInJSButton({ children }) {
  const classes = useStyles();
  return (
    <button className={classes.button}>{children}</button>
  )
}

export default CSSInJSButton;
