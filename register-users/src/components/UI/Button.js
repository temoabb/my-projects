import styles from './Button.module.css';

const Button = (props) => {
  // console.log('Button rendered');

  return (
    <button
      type={props.type || 'button'}
      className={styles.button}
      onClick={props.onClick}>
      {props.children}
    </button>
  )
}


export default Button;