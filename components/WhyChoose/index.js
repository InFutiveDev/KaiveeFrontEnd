import React from "react";

const WhyChoose = ({ data }) => {
  const sectionStyle = {
    padding: "50px 20px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
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
    backgroundColor: "#fff",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    // padding: "20px",
    display: "flex", // Flexbox for card layout
    flexDirection: "column", // Stack icon above title/description
    alignItems: "center", // Center align content horizontally
    gap: "22px", // Space between elements (icon, title, description)
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  };

  const iconStyle = {
    fontSize: "2.5rem",
    color: "#007bff",
  };

  const textContainerStyle = {
    textAlign: "center", // Center text horizontally
  };

  const featureTitleStyle = {
    fontSize: "1.2rem",
    color: "#333",
    marginBottom: "5px",
  };

  const descriptionStyle = {
    fontSize: "0.9rem",
    color: "#666",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Why <span style={{ color: "#D41958" }}>Kaivee</span> HealthCare</h2>
      <div style={gridStyle}>
        {data?.map((item, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div style={iconStyle}>
              {item.icon ? item.icon : (
                <img
                  src={item.image?.src}
                  alt={`Feature ${index}`}
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
              )}
            </div>
            {/* <div style={textContainerStyle}>
              <h3 style={featureTitleStyle}>{item.title}</h3>
              <p style={descriptionStyle}>{item.description}</p>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
