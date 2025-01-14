import { useState } from "react"
import { Trash2 } from "react-feather"
const { Modal } = require("reactstrap")
import { useDispatch } from "react-redux"
import { DELETE_USER_FAMILY_MEMBER, GET_USER_FAMILY_MEMBERS } from "redux/actions/member"

const DeteleMemberModal = ({ member }) => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const handleSubmit = async () => {
    setLoading(true)
    const res = await dispatch(DELETE_USER_FAMILY_MEMBER(member._id))
    if (res?.success) {
      setLoading(false)
      dispatch(GET_USER_FAMILY_MEMBERS())
      setOpen(!open)
    } else {
      setLoading(false)
      setOpen(!open)
    }
  }

  return (
    <>
      <div onClick={() => setOpen(!open)}>
        <Trash2 style={{fontSize: '26px', marginLeft: '10px', color: '#ee1b2a'}} />
      </div>
      <Modal aria-labelledby="contained-modal-title-vcenter" centered isOpen={open} toggle={() => setOpen(!open)}>
        <div
          id="deleteMember"
          tabIndex={-1}
          aria-labelledby="deleteMember"
          className="modal fade show"
          style={{ display: "block" }}
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 id="addDeleteMemberLabel" className="modal-title">
                  Delete Member
                </h5>
              </div>{" "}
              <div className="modal-body">
                <p>Are you sure you want to delete this Member</p>
              </div>
              <div className="modal-footer">
                <button className="btnRed" onClick={handleSubmit}>
                  {loading ? 'Processing...' : 'Submit'}
                </button>{" "}
                <button type="button" data-bs-dismiss="modal" className="btnRedBorder" onClick={() => setOpen(!open)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default DeteleMemberModal
