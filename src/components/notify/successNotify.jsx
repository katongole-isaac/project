import { ToastContainer, toast } from "react-toastify";
import React from "react";

const SuccessNotify = ({ success, setOnSuccess, setOnError, onError, msg }) => {
  const toastId = 1001;
  const toastIdErr = 1002;
  const opts = {
    onClose: () =>
      success ? setOnSuccess(false) : onError ? setOnError(false) : null,
    toastId: success ? toastId : toastIdErr,
  };

  const notify = () => {
    toast.success(msg || `complaint sent successfully`, opts);
  };

  const ErrorNotify = () => toast.error(`something failed !`, opts);

  if (success) notify();
  if (onError) ErrorNotify();

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={1}
      />
    </>
  );
};

export default SuccessNotify;
