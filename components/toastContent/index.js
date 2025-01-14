
import { Fragment } from 'react'

const ToastContent = ({ title, text, icon, type }) => (
    <Fragment>
        <div className='toastify-header mb-0 pb-0'>
            <div className='title-wrapper'>
                <h6 className='toast-title font-weight-bold' style={{ fontSize: "14px" }}>{title}</h6>
            </div>
        </div>
        <div className='toastify-body'>
            <span>{text}</span>
        </div>
    </Fragment>
)

export default ToastContent