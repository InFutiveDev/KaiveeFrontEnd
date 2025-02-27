import React from "react";
import Image from "next/image";

const WhyChoose = ({ data }) => {
  const sectionStyle = {
    padding: "50px 20px",
    textAlign: "center",
    backgroundColor: "white",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "30px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const cardStyle = {
    backgroundColor: "white",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "22px",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  };

  const shadowContainer = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
   // backgroundColor: "#f0f0f0",
    //boxShadow: "gb(0 0 0 / 5%) 0px 4px 10px;", // Shadow effect
  };

  const iconStyle = {
    fontSize: "3.5rem",
    color: "#007bff",
  };

  const textContainerStyle = {
    textAlign: "center",
  };

  const featureTitleStyle = {
    fontSize: "1rem",
    color: "#333",
    marginBottom: "5px",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>
        Why <span style={{ color: "#D41958" }}>Kaivee</span> HealthCare
      </h2>
      <div style={gridStyle}>
        {data?.map((item, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div style={shadowContainer}>
              {item.icon ? (
                <div style={iconStyle}>{item.icon}</div>
              ) : (
                <Image
                  src={item.image?.src}
                  alt={`Feature ${index}`}
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
              )}
            </div>
            <div style={textContainerStyle}>
              <h3 style={featureTitleStyle}>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
