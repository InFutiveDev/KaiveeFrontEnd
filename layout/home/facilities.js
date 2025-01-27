import React from "react";
import Image from "next/image";

// Replace these imports with actual paths to your images
import img1 from "assets/images/Finalimg/Facility/MRI Scan.webp";

import img2 from "assets/images/Finalimg/Facility/CT Scan.webp";
import img3 from "assets/images/Finalimg/Facility/digital xray.webp";
import img4 from "assets/images/Finalimg/Facility/Neurology tests.webp";
import { AlignCenter } from "react-feather";

const Facilities = () => {
  const services = [
    {
      id: 1,
      title: "Pathology",
      imgSrc: img1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      id: 2,
      title: "MRI Scan",
      imgSrc: img2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      id: 3,
      title: "CT Scan",
      imgSrc: img3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      id: 4,
      title: "Laboratory",
      imgSrc: img4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
  ];

  const styles = {
    section: {
      padding: "20px 20px",
      backgroundColor: "#ffffff",
      textAlign: "center",
    },
    title: {
      fontSize: "32px",
      font: "semibold",
      fontWeight: "bold",
      marginBottom: "40px",     
    },
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "relative",
    },
    item: {
      width: "22%",
      textAlign: "center",
      position: "relative",
    },
    imageWrapper: {
      position: "relative",
      marginBottom: "20px",
      display: "flex",
    },
    image: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "2px solid #ddd",
      alignItems: "center",
      margin: "0px auto",
    },
    step: {
      position: "absolute",
      top: "5px",
      right: "81px",
      backgroundColor: "#D41958",
      color: "#fff",
      borderRadius: "50%",
      width: "25px",
      height: "25px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      fontSize: "12px",
    },
    titleText: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    description: {
      fontSize: "16px",
      color: "#666",
    },
  };

  return (
    <div style={styles.section}>
      <h2 className="font-semibold lg:text-[32px] text-xl font-source-pro text-left mb-2">Facilities</h2>
      <div style={styles.container}>
        {services.map((service, index) => (
          <div key={service.id} style={styles.item}>
            <div style={styles.imageWrapper}>
              <Image
                src={service.imgSrc}
                alt={service.title}
                style={styles.image}
              />
              {/* Add SVG after the image if not the last item */}
              {/* {index < services.length - 1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="100"
                  viewBox="0 0 200 140"
                >
                  <path
                    d="M20 80 C 80 30, 120 30, 180 80"
                    fill="none"
                    stroke="navy"
                    stroke-width="2"
                    stroke-dasharray="5,5"
                  />
                  <polygon points="177,80 180,74 188,80" fill="navy" />
                  <polygon points="23,80 22,85 15,80" fill="navy" />
                </svg>
              )} */}
              <div style={styles.step}>{`0${service.id}`}</div>
            </div>
            <h3 style={styles.titleText}>{service.title}</h3>
            <p style={styles.description}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
