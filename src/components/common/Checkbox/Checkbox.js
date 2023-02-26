import styles from './checkbox.module.css';

export default function Checkbox({ value, onChange, children }) {
  return (
    <div className={styles.checkbox}>
      <label>
        <div className={styles.inputbox}><input type='checkbox' value={value} onChange={onChange} /></div>
        <div>{children}</div>
      </label>
    </div>
  )
}