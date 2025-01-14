import WhyChoose from "components/WhyChoose";
import img2 from "assets/images/Finalimg/Why Choose Us/10M+ Happy Patients.webp";
import img3 from "assets/images/Finalimg/Why Choose Us/30 Years of Excellence in Diagnostic Health Care.webp";
import img5 from "assets/images/Finalimg/Why Choose Us/Affordable.webp";
import img6 from "assets/images/Finalimg/Why Choose Us/Fast & Accurate Results.webp";
import img7 from "assets/images/Finalimg/Why Choose Us/Free Home Sample Collection.webp";
import img9 from "assets/images/Finalimg/Why Choose Us/Large Menu of Tests Available.webp";
import img8 from "assets/images/Finalimg/Why Choose Us/NABL & NABH Certified Centre.webp";
import img1 from "assets/images/Finalimg/Why Choose Us/Team of Experienced Doctor & Staffs.webp";
import img4 from "assets/images/Finalimg/Why Choose Us/World Class Technology.webp";

const WhyChooseAds = () => {
  return (
    <>
      <div className=" py-[70px]">
        <WhyChoose data={data} />
      </div>
    </>
  );
};

const data = [
  {
    title: "Team of Experienced <br /> Doctors & Staffs",
    image: img1,
  },
  {
    title: "10M+ Happy Patients",
    image: img2,
  },
  {
    title: "31 Year of Excellence in <br /> Diagnostic Healthcare",
    image: img3,
  },
  {
    title: "World Class Technology",
    image: img4,
  },
  {
    title: "Fast & Accurate Results",
    image: img6,
  },
  {
    title: "Affordable",
    image: img5,
  },
  {
    title: "Free Home Sample <br /> Collection",
    image: img7,
  },
  {
    title: "NABL & NABH Certified <br /> Centre",
    image: img8,
  },
  {
    title: "Large Menu of Tests <br /> Available ",
    image: img9,
  },
];
export default WhyChooseAds;
