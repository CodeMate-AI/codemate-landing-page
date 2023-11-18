"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQ_CONTENT } from "@/constants/faq-content"

type Props = {}

const FAQ = (props: Props) => {
  return (
    <Accordion type="single" collapsible className="w-full mt-5">
      {FAQ_CONTENT.map((item) => (
        <div key={item.id}>
          <AccordionItem value={`item-${item.id}`}>
            <AccordionTrigger className="text-2xl">{item.title} </AccordionTrigger>
            <AccordionContent className="text-xl">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        </div>
      ))}

    </Accordion>
  )
}

export default FAQ
