import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { toastReset } from '../actions/toasts'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToasterMsg = (props) => {
  const notify = () => {
    if (props.toasts.actionType === 'add') {
      toast.success(props.toasts.text, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

      useEffect(() => {
        props.toastReset()
      })
    }

    if (props.toasts.actionType === 'edit') {
      toast.info(props.toasts.text, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

      useEffect(() => {
        props.toastReset()
      })
    }

    if (props.toasts.actionType === 'remove') {
      toast.warn(props.toasts.text, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

      useEffect(() => {
        props.toastReset()
      })
    }
  };

  notify();

  return (
    <div>
      <ToastContainer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    toasts: state.toasts
  }
}

const mapDispatchToProps = (dispatch) => ({
  toastReset: () => dispatch(toastReset())
})

export default connect(mapStateToProps, mapDispatchToProps)(ToasterMsg);