import { MinusIcon } from "assets/images/SvgImage";
import { PlusIcon } from "assets/images/SvgImage";
import React, { memo, useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

const renderHTML = (htmlString) => {
  return { __html: htmlString };
};
const FaqsAds = ({ faq }) => {
  const [open, setOpen] = useState("");

  const toggle = (id) => {
    if (open === id) {
      setOpen("");
    } else {
      setOpen(id);
    }
  };

  return (
    <div className="container mx-auto">
      <h3 className="text-[20px] mb-[15px]">Frequently Asked Questions</h3>
      <Accordion open={open} toggle={toggle}>
        {faq.map((item, index) => (
          <AccordionItem
            key={index}
            className={`p-[10px] rounded-lg ${
              open == item?._id ? "bg-orange/90 " : "bg-white"
            }`}
          >
            <AccordionHeader
              targetId={item?._id}
              className={`flex justify-between ${
                open == index + 1 ? "active-accordion" : "inactive-accordion"
              } `}
            >
              <span className="text-[18px] font-medium font-poppins">
                {index + 1}. {item?.faq_title}
              </span>
              <span>{open == item?._id ? <MinusIcon /> : <PlusIcon />}</span>
            </AccordionHeader>
            <AccordionBody
              accordionId={item?._id}
              className="!text-white visible font-poppins text-[18px] font-normal"
            >
              <div className="editor_faq">
                <div
                  dangerouslySetInnerHTML={renderHTML(item?.faq_description)}
                />
              </div>
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default memo(FaqsAds);
