"use client"
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography
} from "./Material-Components";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
 
export default function FAQ() {
  const [open, setOpen] = useState(0);
    const faqs = [{
        id: 1,
        title: 'What is a maternity hospital?',
        description: () => {
            return(<div>
                A maternity hospital is a hospital that specializes in the care of pregnant women and newborns. Maternity hospitals offer a wide range of services, including:
                Labor and delivery
                <ol>
                    <li> Postpartum care</li>
                    <li> Newborn care</li>
                    <li> NICU care</li>
                    <li> Breastfeeding support</li>
                    <li> Parenting classes</li>
                </ol>
                </div>)
        }
    },
    {
        id: 2,
        title: 'What should I pack for my stay in a maternity hospital?',
        description: ()=> {}
    }];
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  
  return (
    <div className="w-3/5">
      <Typography variant="h3" color="blue-gray" className="mb-5">FAQs</Typography>
      {faqs.map((faq, i) => (
        <Accordion key={faq.id} open={open === i} icon={<Icon id={i} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(i)}>
            {faq.title}
        </AccordionHeader>
        <AccordionBody>
            {faq.description()}
        </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
}