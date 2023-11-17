
import CodePage from "@/components/CodePage/CodePage";
import KeyFeatures from "@/components/KeyFeatures";
import PriorStartup from "@/components/PriorStartup";
import Typer from "@/components/Typer";
import UsedByDevelopers from "@/components/UsedByDevelopers";
import Pinned from "@/components/shared/Pinned";
import Slider from "@/components/shared/Slider";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import "simplebar-react/dist/simplebar.min.css";


export default function Home() {
  return (
    <>
      {/* main page */}
      <div className='flex flex-col items-center justify-center min-h-screen text-center mt-10'>
        <div className='mx-auto mb-4 flex  items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
          <p className='md:text-sm text-xs font-semibold  text-gray-700'>
            CodeMate is now used by 25,000+ users globally!🥳
          </p>
        </div>
        <h1 className='max-w-4xl animate text-3xl font-bold md:text-6xl lg:text-7xl animate-in fade-in zoom-in duration-400'>
          The fastest way to write error-free code
          <span className='text-blue-600'>  in seconds.</span>{' '}
        </h1>

        <Typer />
        <Link
          className={cn(buttonVariants({
            size: 'lg',
            className: 'mt-5 ',

          }),)}
          href='/dashboard'
          target='_blank'>
          Get started{' '}
          <ArrowRight className='ml-2 h-5 w-5' />
        </Link>
      </div>


      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-xl md:text-3xl text-center font-bold">Write Code faster than ever</h1>
        <p className="text-lg md:text-xl dark:text-gray-600 text-center">Join us on our Journey</p>
        <div className="mt-14">
          <CodePage />
        </div>
      </div>

      {/* youtube  */}
      <div className="aspect-w-8 aspect-h-5  ">
        <iframe
          src="https://www.youtube.com/embed/wiIgqWa7_0M?si=I1-FdVTVm1C8rp1Q"

          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        >
        </iframe>
      </div>

      {/* prior used organizations */}
      <PriorStartup />
      {/* need some image fixing */}
      <UsedByDevelopers />
      {/* Key FEature */}
      <KeyFeatures />
      <Pinned buttonTitle="Book a Demo" title={"For Teams and Enterprises"} description="Make your teams 10x more productive while programming by automating debugging and code review process in your organisation." link={"https://cal.com/AyushSinghal/30min"} />
      <h1 className="text-2xl md:text-6xl font-semibold text-center">Proud to be recognized by</h1>
      {/* slider  */}

      <Slider />

    </>

  )
}
