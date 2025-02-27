import FooterAds from "layout/ads/footer";
import Navbar from "layout/ads/navbar";
import Image from "next/image";
import React from "react";
import Head from "next/head";
import { MakeProtectedApiCall } from "utility/api";
import orderImage from "assets/images/delivery-man.svg";

const ThankYou = ({ data }) => {
  console.log("data--->>>>", data);
  return (
    <>
      {/* Add Gtag in Head */}
      {/* <Head>
        
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-10839812032"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-10839812032');
            `,
          }}
        />
      </Head> */}

      <Navbar data={data} />
      <div className=" min-h-[50vh] my-5 flex flex-col items-center container mx-auto bg-[#F7A708]/20 rounded-xl text-center p-2">
        <div className="w-full flex justify-center  ">
          <div className="relative d-flex align-items-center">
            <Image
              width={200}
              height={200}
              layout="fixed"
              className="rounded-lg h-[16rem] w-full object-fill"
              alt="About"
              src={orderImage?.src}
            />
          </div>
        </div>
        <p className="text-center text-gray-800 text-[18px] font-[600]">
          Thank you for reaching out to us. We will get back to you shortly.
        </p>
        <p className="text-center text-gray-800 text-[18px] font-[500] mt-[8px]">
          In the meantime, if you have any urgent queries or need further
          assistance, please get in touch with us at.
        </p>
        <div className="my-2 flex justify-start items-center space-x-2">
          <a
            href="tel:01147252098"
            className=" bg-orange text-white shadow px-4 py-1 rounded-lg text-[18px]"
          >
            01147252098
          </a>
        </div>
      </div>
      <FooterAds data={data} />
    </>
  );
};

export default ThankYou;

export const getServerSideProps = async ({ query }) => {
  console.log("query---->>", query);
  let slugContent = query.id;
  const baseUrl = process.env.REACT_APP_BASE_URL;
  let data;
  const url = `${baseUrl}/landingData/getById/${slugContent}`;
  const getHeaders = () => {
    return {
      "content-type": "application/json",
    };
  };
  const res = await MakeProtectedApiCall(url, "GET", getHeaders());
  data = res?.data?.data || [];
  console.log("Data", data);
  return {
    props: {
      data: data?.[0] || "",
    },
  };
};
