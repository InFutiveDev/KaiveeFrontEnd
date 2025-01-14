import React from "react";
import thumbimagedoctors from "images/thumbimagedoctors.png";

export const HappyClients = () => {
  return (
    <div className="home-clients-box">
      <div className="home-clients-frame-wrapper">
        <div className="home-clients-frame">
          <p
            style={{
              fontSize: "50px",
              fontWeight: "700",
            }}
          >
            Happy Clients
          </p>
          <div className="home-clients-div">
            <div className="home-clients-frame-2">
              <div className="home-clients-group">
                <img
                  className="home-clients-imgbin-physician"
                  alt="Imgbin physician"
                  src="https://generation-sessions.s3.amazonaws.com/0c59900760edc6cce3c846d975d46592/img/imgbin-physician-doctor-patient-relationship-medicine-hospital-d@2x.png"
                />
              </div>
              <div className="home-clients-div-wrapper">
                <div className="home-clients-frame-3">
                  <div className="home-clients-frame-4">
                    <div className="home-clients-text-wrapper-2">2000000+</div>
                    <div className="home-clients-text-wrapper-3">
                      Happy Patients
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-clients-frame-2">
              <div className="home-clients-imgbin-health-wrapper">
                <img
                  className="home-clients-imgbin-health"
                  alt="Imgbin health"
                  src={thumbimagedoctors.src}
                />
              </div>

              <div className="home-clients-frame-5">
                <div className="home-clients-frame-6">
                  <div className="home-clients-frame-4">
                    <div className="home-clients-text-wrapper-2">3000+</div>
                    <div className="home-clients-text-wrapper-4">
                      Trusted Doctors
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-clients-frame-2">
              <div className="home-clients-imgbin-health-wrapper">
                <img
                  className="home-clients-imgbin-health"
                  alt="Imgbin health"
                  src="https://generation-sessions.s3.amazonaws.com/0c59900760edc6cce3c846d975d46592/img/imgbin-health-administration-health-care-medical-record-medicine-1@2x.png"
                />
              </div>
              <div className="home-clients-div-wrapper">
                <div className="home-clients-frame-3">
                  <div className="home-clients-frame-4">
                    <div className="home-clients-text-wrapper-2">1000+</div>
                    <div className="home-clients-text-wrapper-3">
                      Caring Staff
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-clients-frame-2">
              <div className="home-clients-imgbin-health-wrapper">
                <img
                  className="home-clients-imgbin-health"
                  alt="Imgbin health"
                  src="https://generation-sessions.s3.amazonaws.com/0c59900760edc6cce3c846d975d46592/img/imgbin-health-administration-health-care-medical-record-medicine-1@2x.png"
                />
              </div>
              <div className="home-clients-div-wrapper">
                <div className="home-clients-frame-3">
                  <div className="home-clients-frame-4">
                    <div className="home-clients-text-wrapper-2">1000+</div>
                    <div className="home-clients-text-wrapper-3">
                      Caring Staff
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
