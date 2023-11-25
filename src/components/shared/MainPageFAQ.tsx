"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQ_CONTENT } from "@/constants/faq-content"
import { Button, buttonVariants } from "../ui/button"
import React from "react"
import { useIsVisible } from "@/lib/useIsVisible"
import Link from "next/link"
import { cn } from "@/lib/utils"

type Props = {}

const FAQ = (props: Props) => {
  const ref1 = React.useRef(null)
  const isVisible1 = useIsVisible(ref1)
  return (
    <div ref={ref1} className={`transition-opacity ease-in duration-1000 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
      <h1 className="text-2xl md:text-5xl text-center font-bold mt-12 mb-6">Have any questions?</h1>
      <div className="mt-6">
        <Accordion type="single" collapsible className=" mt-5">
          {FAQ_CONTENT?.slice(0, 4)?.map((item) => (
            <div key={item.id}>
              <AccordionItem value={`item-${item.id}`}>
                <AccordionTrigger className="text-xl md:text-2xl  bg-opacity-25 backdrop-blur-md">{item.title}</AccordionTrigger>

                <AccordionContent className="text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>

      </div>
      <div className="flex justify-center">
        <Link href={"/contact"} className={cn(buttonVariants({
          size: "lg",
        }), "flex items-center justify-center mt-6 mb-9 py-5 my-6")}>
          Click here to see more
        </Link>
      </div>

    </div>
  )
}

export default FAQ
