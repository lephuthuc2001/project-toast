import React from "react";

export const ToastContext = React.createContext([]);

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function removeToastById(id) {
    const nextToasts = [...toasts].filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  }

  function addToast(variant, msg) {
    const nextToasts = [...toasts];

    const newToastId = crypto.randomUUID();

    const newToast = {
      id: newToastId,
      variant,
      msg,
    };

    nextToasts.push(newToast);

    setToasts(nextToasts);
  }

  const contextValue = React.useMemo(
    function () {
      return {
        toasts,
        addToast,
        removeToastById,
      };
    },
    [toasts],
  );

  return <ToastContext value={contextValue}>{children}</ToastContext>;
}

export default ToastProvider;
