// import React from "react";
// import Image from "next/image";
// import bannerImg from "assets/images/facilities/banner1.jpg";

// const FacilitiesBanner = () => {
//   return (
//     <div className="w-full">
//       {/* Desktop Banner */}
//       <div className="relative w-full items-center hidden sm:flex">
//         <Image
//           quality={100}
//           width={2000}
//           height={400}
//           layout="fixed"
//           alt="Static Facilities Banner"
//           className="object-fill md:mb-0 mb-3 h-auto w-full object-center"
//           src={bannerImg}
//         />
//       </div>

//       {/* Mobile Banner */}
//       <div className="relative w-full items-center flex sm:hidden">
//         <Image
//           quality={100}
//           width={2000}
//           height={400}
//           layout="fixed"
//           alt="Static Mobile Facilities Banner"
//           className="object-fill md:mb-0 mb-3 h-auto w-full object-center"
//           src={bannerImg}
//         />
//       </div>
//     </div>
//   );
// };

// export default FacilitiesBanner;



// ----------------------------------------------for dynamic image----------------------------------------------

import React from "react";
import Image from "next/image";
import nodatImage from "assets/images/No-Image-Placeholder.jpg";
 import bannerImg from "assets/images/facilities/banner.webp";

const FacilitiesBanner = ({ category }) => {
  return (
    <div className="w-full">
      
      {category?.category_image ? (
        <div className="relative w-full items-center hidden sm:flex">
          <Image
            priority
            quality={80}
            width={2000}
            height={400}
            layout="fixed"
            alt={category?.category_image_altTag}
            className="object-fill md:mb-0 mb-3 h-auto w-full object-center"
            src={category?.category_image || nodatImage}
          />
        </div>
      ) : (
        
        <div className="relative w-full items-center hidden sm:flex">
          <Image
            priority
            quality={80}
            width={2000}
            height={400}
            layout="fixed"
            alt="Facilities Banner"
            className="object-fill md:mb-0 mb-3 h-auto w-full object-center"
            src={category?.category_image || nodatImage}
          />
        </div>
      )}

     
      {category?.mobile_banner ? (
        <div className="relative w-full items-center flex sm:hidden">
          <Image
            priority
            quality={80}
            width={2000}
            height={400}
            layout="fixed"
            alt={category?.category_image_altTag}
            className="object-fill md:mb-0 mb-3 h-auto w-full object-center"
            src={category?.category_image || nodatImage}
          />
        </div>
      ) : (
      
        <div className="relative w-full items-center flex sm:hidden">
          <Image
            priority
            quality={80}
            width={2000}
            height={400}
            layout="fixed"
            alt=" Mobile Facilities Banner"
            className="object-fill md:mb-0 mb-3 h-auto w-full object-center"
            src={category?.category_image || nodatImage}
          />
        </div>
      )}
    </div>
  );
};

export default FacilitiesBanner;
