import patient from 'images/patient.png'
import medicalTeam from 'images/medical-team.png'
import employeeImage from 'images/medical-team.png'
import happyclient from '../../assets/images/happyclient.svg'
import doctor from '../../assets/images/doctor.svg'
import grouppersons from "../../assets/images/grouppersons.svg"
import assign from "../../assets/images/assign.svg"
import Image from 'next/image'

const Stats = () => {
	return (
		<section className="home_collection counter_wrapper">
			<div className="container">
				<p>Happy Client</p>
				<div className="clientdetail">
					<div className="">
						{/* <Image width={160} height={160} style={{objectFit:'contain'}} src={patient?.src} alt="patient " /> */}
						<div className='client-star d-flex flex-col align-items-center justify-content-center'>
							<div>
								<div className='d-flex align-items-center justify-content-center mb-3'>
									<Image src={happyclient} ></Image>
								</div>
								<div className='text-left text_content'>
									<span className="counter mb-2">2000000+</span>
									<h2>Happy Patients</h2>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='client-star d-flex flex-col align-items-center justify-content-center'>
							<div>
								<div className='d-flex align-items-center justify-content-center mb-3'>
									<Image src={doctor} ></Image>
								</div>
								<div className='text-left text_content'>
									<span className="counter">30000+</span>
									<h2>Trusted Doctors</h2>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='client-star d-flex flex-col align-items-center justify-content-center'>
							<div>
								<div className='d-flex align-items-center justify-content-center mb-3'>
									<Image src={grouppersons} ></Image>
								</div>
								<div className='text-left text_content'>
									<span className="counter">1000+</span>
									<h2>Caring Staff</h2>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='client-star d-flex flex-col align-items-center justify-content-center'>
							<div>
								<div className='d-flex align-items-center justify-content-center mb-3'>
									<Image src={assign} ></Image>
								</div>
								<div className='text-left text_content'>
									<span className="counter">1000+</span>
									<h2>Caring Staff</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Stats