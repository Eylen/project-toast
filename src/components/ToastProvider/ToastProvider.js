import React from 'react';

const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback((message, variant) => {
    setToasts((toasts) => [...toasts, {id: crypto.randomUUID(), message, variant}]);
  }, []);

  const dismissToast = React.useCallback((id) => {
    setToasts((toasts) => toasts.filter(({id: toastId}) => toastId !== id));
  }, []);

  const value = React.useMemo(() => {
    return {
      toasts,
      addToast,
      dismissToast
    };
  }, [toasts, addToast, dismissToast]);

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
export {ToastContext};
