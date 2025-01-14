import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { EMAIL_VERIFY, EMAIL_RE_VERIFY } from "redux/actions/auth";
import verifyImage from "assets/images/verify-email.svg";
import { CheckObjectValidation } from "utility/Utils";
import Image from "next/image";
import ToastContent from "components/toastContent";
import { Slide, toast } from "react-toastify";
import { AlertCircle } from "react-feather";

const EmailVerificationLayout = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    async function fetchData() {
      const checkValidation = CheckObjectValidation({ code }, []);
      if (checkValidation.isvalid) {
        const res = await dispatch(EMAIL_VERIFY({ code }));
        if (res.success) {
          toast.success(
            <ToastContent
              icon={<AlertCircle size={12} />}
              text={"Email Successfully Verified"}
              title="Success !"
            />,
            { transition: Slide, autoClose: 4000 }
          );
          router.push("/");
        }
      }
    }
    fetchData();
  }, [code, dispatch, router]);

  const reVerifyEmail = async (e) => {
    e.preventDefault();
    const checkValidation = CheckObjectValidation({ email }, []);
    if (checkValidation.isvalid) {
      setLoading(true);
      const res = await dispatch(EMAIL_RE_VERIFY({ email }));
      if (res.success) {
        setLoading(true);
        router.push("/");
      } else {
        setLoading(false);
      }
    }
  };

  return (
    <>
     
      <div className="mt-5 mb-5">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="login-form d-flex flex-column align-items-center">
              <h4>Email verification</h4>
              <Image
                height={240}
                width={240}
                src={verifyImage}
                alt="email verify"
              />
              {email !== null && (
                <form className="w-100" onSubmit={reVerifyEmail}>
                  <div className="form-group mt-4 mb-2 d-flex justify-content-center align-items-center">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter Email*"
                    />
                  </div>
                  <button type="submit" className="btnRed">
                    {loading ? "Processing..." : "Resend Verification link"}
                  </button>
                </form>
              )}
              {email === null && (
                <div className="w-100 d-flex justify-content-center align-items-center">
                  <button className="btnRed" onClick={() => setEmail("")}>
                    Resend verification link
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default EmailVerificationLayout;
