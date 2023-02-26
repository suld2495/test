import React from 'react';
import { Context } from '../../../App';
import styled from './alert.module.css';

export default function Alert({ children, width = '617px' }) {
  const context = React.useContext(Context);
  const style = {
    width
  };

  if (!context.popup) {
    return null;
  }

  return (
    <div className={styled.alert_box}>
      <div className={styled.alert} style={style}>
        <div className={styled.close}></div>
        <div className={styled.content}>{children}</div>
        <div className={styled.confirm}>확인</div>
      </div>
    </div>
  )
}