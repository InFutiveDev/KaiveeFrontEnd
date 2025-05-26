import WhyChoose from "components/WhyChoose";
import img1 from "assets/images/whychooseus/1.png";
import img2 from "assets/images/whychooseus/2-png.png";
import img3 from "assets/images/whychooseus/icon-3.png";
import img4 from "assets/images/whychooseus/3-png.png";
import img5 from "assets/images/whychooseus/4-png.png";
import img6 from "assets/images/whychooseus/5-png.png";
import img7 from "assets/images/whychooseus/6-png.png";
import img8 from "assets/images/whychooseus/7-png.png";
import Image from "next/image";

const WhyChooseAds = () => {
  return (
    <>
      <div>
             <WhyChoose data={data} padding={"50px"} />
     </div>
    </>
  );
};

const data = [
  {
    id: 1,
    title: "NABL Accredited Labs",
    description: "Follows all protocols as per NABL & CAP Guidelines",
    icon: <Image src={img3} alt="NABL Accredited Icon" />,
  },
  {
    id: 2,
    title: "Trusted by Leading Doctors & Hospitals",

    icon: <Image src={img2} alt="doctors Icon" />,
  },
  {
    id: 3,
    title: "Shortest Reporting Time",

    icon: <Image src={img5} alt="time Icon" />,
  },
  {
    id: 4,
    title: "Accurate Test Reports",

    icon: <Image src={img4} alt="report Icon" />,
  },
  {
    id: 5,
    title: "Satisfied Customers",

    icon: <Image src={img1} alt="customer Icon" />,
  },
  {
    id: 6,
    title: "Most Affordable Prices",

    icon: <Image src={img6} alt="NABL Accredited Icon" />,
  },
  {
    id: 7,
    title: "Painless Sample Collection",

    icon: <Image src={img7} alt="collection Icon" />,
  },
  {
    id: 8,
    title: "Scientific Orientation",

    icon: <Image src={img8} alt="scientific Icon" />,
  },
];
export default WhyChooseAds;
