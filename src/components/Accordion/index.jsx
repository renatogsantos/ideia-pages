"use client"
import { schemaQA } from "@/configs/ideia-pages-schema/schemaQA";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function MainAccordion() {
  return (
    <>
      <Accordion variant="light">
        {schemaQA.mainEntity.map((qa, i) => {
          return (
            <AccordionItem key={i} aria-label={qa.name} title={qa.name}>
              {qa.acceptedAnswer.text}
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
}
