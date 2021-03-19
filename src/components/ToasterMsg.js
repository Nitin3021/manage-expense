import React from 'react';
import { connect } from 'react-redux'
import { toastIt } from '../actions/toasts'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToasterMsg = (props) => {
  const toastReset = () => {
    props.toastIt({
      actionType: '',
      text: ''
    })
  }

  const notify = () => {
    if (props.toasts.actionType.actionType === 'add') {
      toast.success(props.toasts.actionType.text, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

      toastReset()
    }

    if (props.toasts.actionType.actionType === 'edit') {
      toast.info(props.toasts.actionType.text, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

      toastReset()
    }

    if (props.toasts.actionType.actionType === 'remove') {
      toast.warn(props.toasts.actionType.text, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

      toastReset()
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
  toastIt: (actionType, text) => dispatch(toastIt(actionType, text))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToasterMsg);