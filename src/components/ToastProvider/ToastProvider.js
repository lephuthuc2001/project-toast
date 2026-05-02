import React from "react";

export const ToastContext = React.createContext([]);

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function removeToastById(id) {
    setToasts((prevToasts) =>
      [...prevToasts].filter((toast) => toast.id !== id),
    );
  }

  function addToast(variant, msg) {
    setToasts((prevToasts) => {
      const nextToasts = [...prevToasts];

      const newToastId = crypto.randomUUID();

      const newToast = {
        id: newToastId,
        variant,
        msg,
      };

      nextToasts.push(newToast);
    });
  }

  const contextValue = {
    toasts,
    addToast,
    removeToastById,
  };

  return <ToastContext value={contextValue}>{children}</ToastContext>;
}

export default ToastProvider;
