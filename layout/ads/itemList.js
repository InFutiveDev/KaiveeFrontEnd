import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "reactstrap";
import { LOGIN_MODAL_OPEN } from "redux/actions/auth";
import { ADD_NEW_INQUIRY_LANDING } from "redux/actions/inquiry";
import { CheckObjectValidation } from "utility/Utils";

const ItemList = ({ testInfo, data }) => {
  const [title, settitle] = useState("");
  const [sendData, setSendData] = useState({
    patient_name: "",
    mobile_number: "",
  });
  const router = useRouter();
  const [errorKeyName, setErrorKeyName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (errorKeyName === name) {
      setErrorKeyName("");
    }
    setSendData({ ...sendData, [name]: value });
  };
  const [open, setOpen] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkValidation = CheckObjectValidation(sendData, []);
    setErrorKeyName(checkValidation.keyname);
    if (checkValidation.isvalid) {
      const res = await dispatch(
        ADD_NEW_INQUIRY_LANDING({
          ...sendData,
          inquiry_from: data?.leads_source || "city x-ray website",
        })
      );
      if (res?.success) {
        router.push(`/ads/thank-you/?id=${router?.query?.id}`);
        setOpen(false);
        setSendData({
          patient_name: "",
          mobile_number: "",
          url: window.location.href,
          inquiry_from: "city x-ray website",
        });
      } else {
        dispatch(LOGIN_MODAL_OPEN(true));
      }
    }
  };
  useEffect(() => {
    if (window) {
      setSendData({ ...sendData, url: window.location.href });
    }
  }, []);
  return (
    <div className="container p-2 mx-auto sm:p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <thead>
            <tr className="text-left">
              <th className="p-3" />
              <th className="p-3" />
              {/* <th className="p-3" />
              <th className="p-3" /> */}
            </tr>
          </thead>
          <tbody>
            {testInfo?.map((item) => {
              return (
                <tr key={item?._id} className="border border-opacity-20 ">
                  <td className="p-2">
                    <p>{item?.test_name}</p>
                  </td>
                  {/* <td className="p-3">
                    <div className="flex justify-start items-center space-x-4">
                      <del></del>
                      <p>₹{item?.offer_price || 0}</p>
                    </div>
                  </td>
                  <td className="p-3">
                    <p>
                      {item?.offer_price < item?.mrp ? (
                        <span className="text-[#005E54] font-semibold">
                          Upto{" "}
                          {(
                            ((item?.mrp - item?.offer_price) / item?.mrp) *
                            100
                          ).toFixed()}
                          % off discount
                        </span>
                      ) : (
                        ""
                      )}
                    </p>
                  </td> */}
                  <td className="p-2 text-end">
                    <button
                      onClick={() => {
                        setOpen(true);
                        settitle(item?.test_name || "");
                        // router.push(`/book-a-test/${item?.test_url}`)
                      }}
                      className="bg-orange px-2 py-2  rounded-full mobile_padding "
                    >
                      Book Now
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        isOpen={open}
        className="max-w-[540px]"
        toggle={() => setOpen(!open)}
      >
        <div
          id="addNewMember"
          tabIndex={-1}
          aria-labelledby="addNewMember"
          style={{ display: "block" }}
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog  pt-0 mt-0 modal-dialog-centered">
            <div className="modal-content border-0">
              <div className="modal-header flex justify-center mt-0 border-0">
                <h5 id="addNewAddressLabel" className="modal-title">
                  Get A Free Call Back
                </h5>
              </div>{" "}
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  name="patient_name"
                  value={sendData.patient_name}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="Enter Your Name"
                />
                {errorKeyName === "patient_name" ? (
                  <span className="text-danger">Name is Required</span>
                ) : null}
                <input
                  type="text"
                  maxLength={10}
                  className="form-control mt-2"
                  name="mobile_number"
                  value={sendData?.mobile_number}
                  onChange={(e) => {
                    if (/^[0-9\s]*$/.test(e.target?.value)) {
                      handleChange(e);
                    }
                  }}
                  placeholder="Enter Your Phone No.*"
                />
                {errorKeyName === "mobile_number" ? (
                  <span className="text-danger"> Phone Number is Required</span>
                ) : null}
              </div>
              <div className="modalfooter accordian-buttons center-bututon ">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="mt-[20px] bg-[#7bb44ceb] text-white rounded px-[24px] py-[12px]"
                >
                  Request a call back
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default ItemList;
