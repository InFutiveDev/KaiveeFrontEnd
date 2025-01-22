import React from "react";
import Image from "next/image";

// Replace these imports with actual paths to your images
import img1 from "assets/images/Finalimg/Facility/MRI Scan.webp";

import img2 from "assets/images/Finalimg/Facility/CT Scan.webp";
import img3 from "assets/images/Finalimg/Facility/digital xray.webp";
import img4 from "assets/images/Finalimg/Facility/Neurology tests.webp";

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
      padding: "50px 60px",
      backgroundColor: "#ffffff",
      textAlign: "center",
    },
    title: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "40px",
      textalign: "left",
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
    },
    step: {
      position: "absolute",
      top: "-10px",
      right: "130px",
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
      fontSize: "14px",
      fontWeight: "bold",
      marginBottom: "10px",
      textAlign: "left",
    },
    description: {
      fontSize: "10px",
      color: "#666",
      textAlign: "left",
    },
    svgConnector: {
      width: "100px",
      height: "50px",
      margin: "0 auto",
    },
  };

  return (
    <div style={styles.section}>
      <h2 style={styles.title}>Facilities</h2>
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
              {index < services.length - 1 && (
                <svg
                  style={styles.svgConnector}
                  viewBox="0 0 100 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 25 Q50 0 100 25"
                    fill="none"
                    stroke="#bbb"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                </svg>
              )}
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
