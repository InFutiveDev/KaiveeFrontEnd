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
    gap: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  };

  const iconStyle = {
    fontSize: "2.5rem",
    color: "#007bff",
    marginBottom: "15px",
  };

  const featureTitleStyle = {
    fontSize: "1.2rem",
    color: "#333",
    marginBottom: "10px",
  };

  const descriptionStyle = {
    fontSize: "0.9rem",
    color: "#666",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Why Choose Us</h2>
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
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
              )}
            </div>
            <h3 style={featureTitleStyle}>{item.title}</h3>
            <p style={descriptionStyle}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
