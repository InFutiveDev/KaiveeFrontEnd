import { useState } from "react"
import { CheckObjectValidation } from "utility/Utils"
import { useDispatch } from "react-redux"
import { GET_USER_DETAILS, HANDLE_LOGIN } from "redux/actions/auth"
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import ForgotPassword from "layout/auth/forgot-password";
import Register from "layout/auth/register";

const LoginWithEmail = () => {
    const [payload, setPayload] = useState({ email: '', password: '' })
    const [registerModalOpen, setRegisterModalOpen] = useState(false)
    const [forgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errorKeyName, setErrorKeyName] = useState('')
    const [passwordType, setPasswordType] = useState("password");
    const dispatch = useDispatch()

    const handleRegisterModal = () => {
        setOpen(!open)
        setRegisterModalOpen(!registerModalOpen)
    }

    const handleForgotPasswordModal = () => {
        setOpen(!open)
        setForgotPasswordModalOpen(!forgotPasswordModalOpen)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        const checkValidation = CheckObjectValidation(payload, [])
        setErrorKeyName(checkValidation.keyname)
        if (checkValidation.isvalid) {
            setLoading(true)
            const res = await dispatch(HANDLE_LOGIN(payload))
            if (res.success) {
                localStorage.setItem("accessToken", res.data?.data.accessToken)
                localStorage.setItem("refreshToken", res.data?.data.refreshToken)
                dispatch(GET_USER_DETAILS())
                setLoading(false)
                setOpen(!open)
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
            <div className="modal-body">
                <div className="col-md-12 form-group mb-5">
                    <label htmlFor="" className="col-form-label">
                        Email *
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        id="email"
                        required
                        onChange={handleChange}
                        placeholder="Email"
                    />
                    {errorKeyName === 'email' ? <span className='text-danger'>Please Enter a valid Email</span> : null}
                    <div>
                        <label htmlFor="" className="col-form-label">
                            Password *
                        </label>
                        <div className="position-relative">
                            <input
                                type={passwordType || 'password'}
                                className="form-control"
                                name="password"
                                id="password"
                                required
                                onChange={handleChange}
                                placeholder="Password"
                            />
                            <div className="position-absolute top-0 right-0" style={{ top: '10%', right: '10px' }} onClick={(e) => togglePassword()}> {passwordType === "password" ? <AiFillEyeInvisible /> : <AiFillEye />}</div>
                        </div>
                    </div>
                    {errorKeyName === 'password' ? <span className='text-danger'>Password is Required</span> : null}
                    <div>
                        <a
                            className="float-left mt-1 forgot-text"
                            href="#"
                            onClick={() => setForgotPasswordModalOpen(!forgotPasswordModalOpen)}
                        >
                            {" "}
                            Forgot Password
                        </a>
                    </div>
                    {forgotPasswordModalOpen && <ForgotPassword handleForgotPasswordModal={handleForgotPasswordModal} />}
                </div>
            </div>
            <div className="modal-footer border-0 d-flex justify-content-center">
                <button className="btnRed" color="primary" size="sm" onClick={handleSubmit}>
                    {loading ? 'Processing...' : 'Login'}
                </button>
                <div onClick={() => setRegisterModalOpen(!registerModalOpen)}>
                    <div>
                        <button className="btnRed mt-0">Register</button>
                    </div>
                </div>
                {registerModalOpen && <Register handleRegisterModal={handleRegisterModal} />}
            </div>
        </>
    );
}

export default LoginWithEmail;