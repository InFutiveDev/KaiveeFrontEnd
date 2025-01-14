import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { RESET_PASSWORD } from "redux/actions/auth";
import { CheckObjectValidation } from "utility/Utils";

const ResetPasswordLayout = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const { code } = router.query;
  const [errorKeyName, setErrorKeyName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      code,
      password,
    };
    const checkValidation = CheckObjectValidation(payload, []);
    setErrorKeyName(checkValidation.keyname);
    if (checkValidation.isvalid) {
      setLoading(true);
      const res = await dispatch(RESET_PASSWORD(payload));
      if (res?.success) {
        router.push("/");
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (errorKeyName === name) {
      setErrorKeyName("");
    }
    setPassword(value);
  };

  return (
    <>
     
      <div className="mt-5 mb-5">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="login-form d-flex flex-column align-items-center">
              <h4>Reset Password</h4>
              <form className="w-100" onSubmit={handleSubmit}>
                <div className="form-group mt-4 mb-2 d-flex justify-content-center align-items-center">
                  <input
                    onChange={handleChange}
                    type="text"
                    name="password"
                    className="form-control"
                    placeholder="Enter Passowrd"
                  />
                </div>
                {errorKeyName === "password" ? (
                  <p className="text-danger">Please Enter a Passowrd</p>
                ) : null}
                <button type="submit" className="btnRed">
                  {loading ? "Processing..." : "Reset Password"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ResetPasswordLayout;
