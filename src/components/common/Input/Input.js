import styles from './input.module.css';

export default function Input({ label = '', onChange, value, button ='', placeholder }) {
  return (
    <div className={`${styles.input} input`}>
      <div>
        <div className={styles.label}>{label}</div>
        <div className={styles.inputbox}><input onChange={onChange} value={value} placeholder={placeholder}/></div>
      </div>
      {button}
    </div>
  )
}