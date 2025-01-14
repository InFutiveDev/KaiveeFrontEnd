import Content from "./content";

const ContactUsLayout = () => {
  return (
    <>
      <Content />

      <div className="row">
        <div className="col-12 h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4508047755!2d77.06715997457094!3d28.586249886182642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b3d620205b1%3A0xe21a1fe217f40c4!2sInFutive%20Technology%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1736764228427!5m2!1sen!2sin"
            width={"100%"}
            height={"100%"}
            allowFullScreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactUsLayout;
