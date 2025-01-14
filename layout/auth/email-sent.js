import emailSent from 'assets/images/emailsent.png'
import Image from 'next/image';
import { Modal } from 'reactstrap';

const EmailSent = () => {
  return (
    <div>
      <Modal
        isOpen={true}
        centered
        aria-labelledby="contained-modal-title-vcenter"
      >
        <div className='modal-body'>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="d-flex flex-column align-items-center">
                  <span>Successfully Email verification Sent to Your Email Id</span>
                  <Image height={225} width={225} src={emailSent} alt="email verify" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default EmailSent;