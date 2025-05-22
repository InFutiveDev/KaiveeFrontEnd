import Content from "./content";

const ContactUsLayout = () => {
  return (
    <>
      <Content />

      <div className="row">
        <div className="col-12 h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1183944972404!2d77.3973573!3d28.5662073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef0218a5d79d%3A0xb9e21e2afdcc53f6!2sKaivee-%20Zen%20Health%20%7C%20Pathology%20Lab%20%7C%20Diagnostic%20Centre%20%7C%20Healthcare%20Lab%20%7C%20Noida!5e0!3m2!1sen!2sin!4v1747830202578!5m2!1sen!2sin"
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
