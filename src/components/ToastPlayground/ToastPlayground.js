import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from "../ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = React.useState([]);

  const addToast = (event) => {
    event.preventDefault();

    setToasts((toasts) => [
      ...toasts,
      { id: crypto.randomUUID(), message, variant },
    ]);

    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  };

  const dismissToast = (id) => {
    setToasts((toasts) => toasts.filter(({ id: toastId }) => toastId !== id));
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} onDismiss={dismissToast} />

      <form className={styles.controlsWrapper} onSubmit={addToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className={styles.messageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variantOption) => (
              <label
                htmlFor={`variant-${variantOption}`}
                key={`variant-${variantOption}`}
              >
                <input
                  id={`variant-${variantOption}`}
                  type="radio"
                  name="variant"
                  value={variantOption}
                  checked={variantOption === variant}
                  onChange={(event) => setVariant(event.target.value)}
                />
                {variantOption}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
