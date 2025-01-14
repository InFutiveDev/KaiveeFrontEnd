import { useState } from "react"
import { Modal } from "reactstrap"
import Register from "./register"
import EmailSent from "./email-sent"
import { useDispatch } from "react-redux"
import { CheckObjectValidation } from "utility/Utils"
import { FORGOT_PASSWORD } from "redux/actions/auth"

const ForgotPassword = ({ handleForgotPasswordModal }) => {
  const [email, setEmail] = useState(false)
  const [registerModalOpen, setRegisterModalOpen] = useState(false)
  const [showEmailSent, setShowEmailSent] = useState(false)
  const [errorKeyName, setErrorKeyName] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target
    if (errorKeyName === name) {
      setErrorKeyName('')
    }
    setEmail(value);
  };

  const handleRegisterModal = () => {
    handleForgotPasswordModal()
    setRegisterModalOpen(!registerModalOpen)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const checkValidation = CheckObjectValidation({ email }, [])
    setErrorKeyName(checkValidation.keyname)
    if (checkValidation.isvalid) {
      setLoading(true)
      const res = await dispatch(FORGOT_PASSWORD({ email }))
      if (res?.success) {
        setLoading(false)
        setShowEmailSent(true)
      } else {
        setLoading(false)
      }
    }
  }
  return (
    <>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        style={{ maxWidth: '500px', width: '100%' }}
        size="sm"
        centered
        isOpen={true}
        toggle={() => handleForgotPasswordModal()}
      >
        <div className="modal-header">
          <h5 className="modal-title">
            Forgot Password
          </h5>
          <button
            aria-label="Close"
            className=" close"
            onClick={() => handleForgotPasswordModal()}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          {showEmailSent ? (
            <EmailSent handleRegisterModal={handleRegisterModal} />
          ) : (
            <div className="col-md-12 form-group mb-5">
              <label htmlFor="" className="col-form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="Enter Email"
                onChange={handleChange}
              />
              {errorKeyName === 'email' ? <p className='text-danger'>Please Enter a valid Email</p> : null}
            </div>
          )}
        </div>
        <div className="modal-footer d-flex justify-content-center">
          <div>
            <div>
              <button onClick={handleSubmit} className="btnRed">{loading ? 'Processing...' : 'Reset Password'}</button>{" "}
            </div>

          </div>
          <div>
            <span>Don't Have Account</span>{"  "}
            <button onClick={() => setRegisterModalOpen(!registerModalOpen)} className="btnRed">Register</button>
            {registerModalOpen && <Register handleRegisterModal={handleRegisterModal} />}
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ForgotPassword
