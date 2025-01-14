import { MinusIcon } from "assets/images/SvgImage";
import { PlusIcon } from "assets/images/SvgImage";
import React, { memo, useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

const AccordionComponents = () => {
  const [open, setOpen] = useState(false);

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  
  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem
          className={`p-[5px] md:p-[10px] rounded-lg ${
            open == "1" ? "bg-orange " : "bg-white"
          }`}
        >
          <AccordionHeader
            targetId="1"
            className={`flex justify-between ${
              open == "1" ? "active-accordion" : "inactive-accordion"
            } `}
          >

            <span className="text-[15px] md:text-[18px] font-medium font-poppins">1. Why is CBC Test Done.</span>
            <span>{open == 1 ? <MinusIcon /> : <PlusIcon />}</span>
          </AccordionHeader>
          <AccordionBody
            accordionId="1"
            className="!text-white visible font-poppins text-[12px] md:text-[18px] font-normal"
          >
            CBC is done as a marker of general health, a basic investigation to
            suggest further line of testing or treatment. It is used to screen
            anaemia, determine type of anaemia and screen for
            HaemoglobinopathyIn cases of fever to know the extent and type of
            infection.Presence of immature cells / blasts/ atypical cells in CBC
            can suggest leukemia/ lymphoma/ blood cancers and indicate further
            bone marrow studies/ Immunophenotyping of cells.Presence of
            increased or decreased platelet count can suggest urgent medical
            management / bone marrow study
          </AccordionBody>
        </AccordionItem>
        <AccordionItem
          className={`p-[5px] md:p-[10px] rounded-lg ${
            open == "2" ? "bg-orange " : "bg-white"
          }`}
        >
          <AccordionHeader
            targetId="2"
            className={`flex justify-between ${
              open == "2" ? "active-accordion" : "inactive-accordion"
            } `}
          >

            <span className="text-[15px] md:text-[18px] font-medium font-poppins">2. What Dose CBC Test Measure</span>
            <span>{open == 2 ? <MinusIcon /> : <PlusIcon />}</span>
          </AccordionHeader>
          <AccordionBody
            accordionId="2"
            className="!text-white visible font-poppins text-[12px] md:text-[18px] font-normal"
          >
            CBC is done as a marker of general health, a basic investigation to
            suggest further line of testing or treatment. It is used to screen
            anaemia, determine type of anaemia and screen for
            HaemoglobinopathyIn cases of fever to know the extent and type of
            infection.Presence of immature cells / blasts/ atypical cells in CBC
            can suggest leukemia/ lymphoma/ blood cancers and indicate further
            bone marrow studies/ Immunophenotyping of cells.Presence of
            increased or decreased platelet count can suggest urgent medical
            management / bone marrow study
          </AccordionBody>
        </AccordionItem>
        <AccordionItem
          className={`p-[5px] md:p-[10px] rounded-lg ${
            open == "3" ? "bg-orange " : "bg-white"
          }`}
        >
          <AccordionHeader
            targetId="3"
            className={`flex justify-between ${
              open == "3" ? "active-accordion" : "inactive-accordion"
            } `}
          >

            <span className="text-[15px] md:text-[18px] font-medium font-poppins">3. What to Expect During CBC Test.</span>
            <span>{open == 3 ? <MinusIcon  /> : <PlusIcon />}</span>
          </AccordionHeader>
          <AccordionBody
            accordionId="3"
            className="!text-white visible font-poppins text-[12px] md:text-[18px] font-normal"
          >
            CBC is done as a marker of general health, a basic investigation to
            suggest further line of testing or treatment. It is used to screen
            anaemia, determine type of anaemia and screen for
            HaemoglobinopathyIn cases of fever to know the extent and type of
            infection.Presence of immature cells / blasts/ atypical cells in CBC
            can suggest leukemia/ lymphoma/ blood cancers and indicate further
            bone marrow studies/ Immunophenotyping of cells.Presence of
            increased or decreased platelet count can suggest urgent medical
            management / bone marrow study
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default memo(AccordionComponents);
