import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, removeToastById } = React.useContext(ToastContext);

  return (
    <ol
      role="region"
      aria-live="polite"
      aria-label="Notification"
      className={styles.wrapper}
    >
      {toasts.map(({ id, ...props }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast
            {...props}
            onDismiss={(e) => {
              removeToastById(id);
            }}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
