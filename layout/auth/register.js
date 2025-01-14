import { useState } from "react"
import { Modal } from "reactstrap"
import EmailSent from "./email-sent"
import { CheckObjectValidationFun } from "utility/Utils"
import { useDispatch } from "react-redux"
import { REGISTER_NEW_USER } from "redux/actions/auth"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

const Register = ({ handleRegisterModal }) => {
  const dispatch = useDispatch()
  const [payload, setPayload] = useState({
    name: '',
    email: '',
    mobile: '',
    gender: '',
    age: '',
    password: ''
  })
  const [errorKeyName, setErrorKeyName] = useState('')
  const [showEmailSent, setShowEmailSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [passwordType, setPasswordType] = useState("password");
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const checkValidation = CheckObjectValidationFun(payload, ['gender', 'age'])
    setErrorKeyName(checkValidation.keyname)
    if (checkValidation.isvalid) {
      setLoading(true)
      const res = await dispatch(REGISTER_NEW_USER(payload))
      if (res?.success) {
        setLoading(false)
        setShowEmailSent(true)
      } else {
        setLoading(false)
      }
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    if (errorKeyName === name) {
      setErrorKeyName('')
    }
    setPayload({ ...payload, [name]: value })
    const checkValidation = CheckObjectValidationFun(payload, ['gender', 'age'])
    setErrorKeyName(checkValidation.keyname)
  }
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }
  return (
    <>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        isOpen={true}
        toggle={() => handleRegisterModal()}
        style={{ maxWidth: '500px', width: '100%' }}
      >
        <div className="modal-header">
          <h5 className="modal-title">
            User Details
          </h5>
          <button
            aria-label="Close"
            className=" close"
            onClick={() => handleRegisterModal()}
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
                First Name *
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="First Name"
                onChange={handleChange}
              />
              {errorKeyName.name ? <p className='text-danger'>Please Enter a your name</p> : null}
              <label htmlFor="" className="col-form-label">
                Phone *
              </label>
              <input
                type="text"
                className="form-control"
                name="mobile"
                id="mobile"
                maxLength="10"
                placeholder="Your Phone Number"
                onChange={handleChange}
              />
              {errorKeyName.mobile ? <p className='text-danger'>Please Enter mobile number</p> : null}
              <label htmlFor="" className="col-form-label">
                Email *
              </label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email Id"
                onChange={handleChange}
              />
              {errorKeyName.email ? <p className='text-danger'>Please Enter a valid Email</p> : null}
              <div>
                <label htmlFor="gender" className="col-form-label">
                  Gender
                </label>
                <select
                  id="gender"
                  aria-describedby="gender"
                  required="required"
                  tabIndex={3}
                  name="gender"
                  className="form-select"
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">
                    Male
                  </option>
                  <option value="Female">Female</option>
                </select>
              </div>{" "}
              <label htmlFor="" className="col-form-label">
                Age
              </label>
              <input
                type="number"
                className="form-control"
                name="age"
                id="age"
                onChange={handleChange}
                placeholder="Your Age"
              />
              <div className="position-relative">
                <label htmlFor="" className="col-form-label">
                  Password *
                </label>
                <input
                  type={passwordType || 'password'}
                  className="form-control position-relative"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  placeholder="Your Password"
                />
                <div className="position-absolute top-0 right-0" style={{ top: '55%', right: '10px' }} onClick={(e) => togglePassword()}> {passwordType === "password" ? <AiFillEyeInvisible /> : <AiFillEye />}</div>
              </div>
              {errorKeyName.password ? <p className='text-danger'>Please Enter Password</p> : null}

            </div>
          )}
        </div>
        <div className="modal-footer">
          <div>
            <button className="btnRed" color="primary" size="sm" onClick={handleSubmit}>
              {loading ? 'Processing...' : 'Submit'}
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Register