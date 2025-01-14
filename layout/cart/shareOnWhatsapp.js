import React, { useRef } from "react";

const CaptureScreenshot = ({ cartData, payableAmount }) => {
  const screenshotRef = useRef(null);

  function formatDataForWhatsApp() {
    const data = Object.values(cartData);
    let message = "*City X-Ray & Scan Clinic*\nWe are pleased to provide you the price for the Tests asked by you.\nPlease find the details below:\n\n";
    
    data.forEach((item, index) => {
      message += `${index + 1}. ${item?.test_name} - ₹${item?.offer_price}/-\n`;
    });
    
    message += `*Total Payable Amount - ₹${payableAmount}/-*\n\n`;
    message += "Please note that prices are subject to change without prior notice.\nTo know more about these services or to book a free home collection, please feel free to contact us:\n 📞 Call: 011-47252000\n 📲 WhatsApp: 9577727772\nWebsite - www.cityxrayclinic.com\nT&C Apply";

    return message;
  }

  const captureScreenshot = () => {
    const formattedData = formatDataForWhatsApp();
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(formattedData)}`;
    
    window.open(whatsappURL, "_blank");
  };

  return (
    <div>
      <button className="cart-text-wrapper-12" onClick={captureScreenshot}>
        Share on WhatsApp
      </button>
      <img ref={screenshotRef} alt="Screenshot" style={{ display: "none" }} />
    </div>
  );
};

export default CaptureScreenshot;
