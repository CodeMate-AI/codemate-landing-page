"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

type PricingSwitchProps = {
  onSwitch: (value: string) => void
}

type PricingCardProps = {
  isYearly?: boolean
  isLTD?: boolean
  title: string
  monthlyPrice?: number
  yearlyPrice?: number
  LTDPrice?: number
  description?: string | undefined
  features: string[]
  actionLabel: string
  popular?: boolean
  exclusive?: boolean
}

const PricingHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <section className="text-center">
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className="text-xl pt-1">{subtitle}</p>
    <br />
  </section>
)

const PricingSwitch = ({ onSwitch }: PricingSwitchProps) => (
  <Tabs defaultValue="0" className="w-40 mx-auto" onValueChange={onSwitch}>
    <TabsList className="py-6 px-2">
      <TabsTrigger value="0" className="text-base">
        Monthly
      </TabsTrigger>
      <TabsTrigger value="1" className="text-base">
        Yearly
      </TabsTrigger>
      <TabsTrigger value="2" className="text-base">
        LTD
      </TabsTrigger>
    </TabsList>
  </Tabs>
)

const PricingCard = ({ isYearly, title, LTDPrice, isLTD, monthlyPrice, yearlyPrice, description, features, actionLabel, popular, exclusive }: PricingCardProps) => (
  <Card
    className={cn(`w-72 flex flex-col justify-between py-1 ${popular ? "border-rose-400" : "border-zinc-700"} mx-auto sm:mx-0`, {
      "animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors":
        exclusive,
    })}>
    <div>
      <CardHeader className="pb-8 pt-4">
        {isYearly && yearlyPrice && monthlyPrice && LTDPrice ? (
          <div className="flex justify-between">
            <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">{title}</CardTitle>
            <div
              className={cn("px-2.5 rounded-xl h-fit text-sm py-1 bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white", {
                "bg-gradient-to-r from-orange-400 to-rose-400 dark:text-black ": popular,
              })}>
              Save ${monthlyPrice * 12 - yearlyPrice}
            </div>
          </div>
        ) : (
          <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">{title}</CardTitle>
        )}
        <div className="flex gap-0.5">
          <h3 className="text-3xl font-bold">
            {
              isLTD && LTDPrice ? `$${LTDPrice}/lifetime` :
                isYearly && yearlyPrice ? `$${yearlyPrice}/year` :
                  monthlyPrice ? `$${monthlyPrice}/month` :
                    "Custom"
            }
          </h3>

        </div>
        <CardDescription className="pt-1.5 h-6">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {features.map((feature: string) => (
          <CheckItem key={feature} text={feature} />
        ))}
      </CardContent>
    </div>
    <CardFooter className="mt-2">
      <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-black text-white dark:bg-white px-6 font-medium  dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
        {actionLabel}
      </Button>
    </CardFooter>
  </Card>
)

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex gap-2">
    <div className="w-5 h-5 flex items-center justify-center">
      <CheckCircle2 size={18} className="text-green-400" />
    </div>
    <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>
  </div>
)


export default function page() {
  const [isYearly, setIsYearly] = useState(false)
  const [isLTD, setIsLTD] = useState(false)
  const togglePricingPeriod = (value: string) => {
    setIsYearly(parseInt(value) === 1)
    setIsLTD(parseInt(value) === 2);
  }


  const plans = [
    {
      title: "Premium",
      monthlyPrice: 15,
      yearlyPrice: 120,
      LTDPrice: 59,
      features: ["Debug and Optimise code", "Access to CodeMate chat", "Advanced ML models with browsing capabilities and faster response", "Review code with detailed PDF report and score", "Unlimited access to CodeMate-GPT", "6 requests/min limit", "250 internet searches/month", "Train on GitHub repository", "Dedicated knowledge base storage (upto 5 projects)"],
      actionLabel: "Subscribe",
    },
    {
      title: "Pro",
      monthlyPrice: 30,
      yearlyPrice: 199,
      LTDPrice: 169,
      description: "Everything in Premium plan +",
      features: ["10 requests/min", "Greater knowledge base storage (upto 10 projects)", "Add content from any Web URL to your Knowledge base", "Train on Private Github repository", "Chat with any web URL", "2X faster response", "Unlimited internet searches", "Priority Live support via Whatsapp and dedicated Discord channel", "Beta features Access with early updates"],
      actionLabel: "Subscribe",
      popular: true,
    },

  ]
  return (
    <div className="py-8 mt-24">
      <PricingHeader title="Pricing Plans" subtitle="Choose the plan that's right for you" />
      <PricingSwitch onSwitch={togglePricingPeriod} />
      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-6">
        {plans.map((plan) => {
          return <PricingCard key={plan.title} {...plan} isYearly={isYearly} isLTD={isLTD} />;
        })}
      </section>
    </div>
  )
}
