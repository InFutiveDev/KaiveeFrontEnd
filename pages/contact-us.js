import { ContactUsLayout } from "layout";
import Head from "next/head";
const ContactUs = () => {
  return (
    <div>
      <Head>
        <title>
        Contact Us - Reach Out and Connect with Us Today!
        </title>
        <meta
          name="description"
          content={
            "Reach Out and Connect: Contact Us for Assistance Today!"
          }
        />
      </Head>
      <ContactUsLayout />
    </div>
  );
};

export default ContactUs;
