import { MinusIcon } from "assets/images/SvgImage";
import { PlusIcon } from "assets/images/SvgImage";
import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { GET_FAQ_S } from "redux/actions/feedback";

const renderHTML = (htmlString) => {
  return { __html: htmlString };
};

const FAQsComponents = ({ id }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const faqsList = useSelector((state) => state?.feedbackReducer?.faqsList);

  useEffect(() => {
    dispatch(GET_FAQ_S(id));
  }, [dispatch, id]); 
  

  const toggle = (id) => {
    if (open === id) {
      setOpen(false);
    } else {
      setOpen(id);
    }
  };
  console.log("open", open);
  return (
    <>
      {faqsList?.faqTestIdData?.length > 0 && (
        <div>
          <div className="container max-auto py-3">
            <p className="text-black font-semibold text-[32px] mb-[20px] font-source-pro">
              FAQ
            </p>
          </div>
          <Accordion open={open} toggle={toggle}>
            {faqsList?.faqTestIdData?.map((item, i) => {
              return (
                <AccordionItem
                  key={i}
                  className={`p-[10px] rounded-lg ${
                    open == i + 1 ? "bg-orange " : "bg-white"
                  }`}
                >
                  <AccordionHeader
                    targetId={i + 1}
                    className={`flex justify-between ${
                      open == i + 1 ? "active-accordion" : "inactive-accordion"
                    } `}
                  >
                    <span className="text-[18px] font-medium font-poppins">
                      {i + 1}. {item?.faq_title}
                    </span>
                    <span>{open == i + 1 ? <MinusIcon /> : <PlusIcon />}</span>
                  </AccordionHeader>
                  <AccordionBody
                    accordionId={i + 1}
                    className="text-gray-700 visible font-poppins text-[18px] font-normal"
                  >
                    <div className="editor_faq">
                      <div
                        dangerouslySetInnerHTML={renderHTML(
                          item?.faq_description
                        )}
                      />
                    </div>
                  </AccordionBody>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      )}
    </>
  );
};

export default memo(FAQsComponents);
