import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, onDismiss }) {
  return (
    <ol role="region" aria-live="polite" aria-label="Notification" className={styles.wrapper}>
      {toasts.map(({id, variant, message}) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast variant={variant} onDismiss={() => onDismiss(id)}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
