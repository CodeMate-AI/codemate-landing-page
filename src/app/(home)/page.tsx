
import CodePage from "@/components/CodePage/CodePage";
import KeyFeatures from "@/components/KeyFeatures";
import PriorStartup from "@/components/PriorStartup";
import Typer from "@/components/Typer";
import UsedByDevelopers from "@/components/UsedByDevelopers";
import Footer from "@/components/footer/Footer";
import Pinned from "@/components/shared/Pinned";
import Slider from "@/components/shared/Slider";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import "simplebar-react/dist/simplebar.min.css";


export default function Home() {
  return (
    <>
      {/* main page */}
      <div className='flex flex-col items-center justify-center min-h-screen text-center mt-10'>
        <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
          <p className='text-sm font-semibold  text-gray-700'>
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


      <div className="md:min-h-screen mt-6 md:mt-4   mx-auto">
        <CodePage />
      </div>

      {/* youtube  */}
      <div className="aspect-w-8 aspect-h-5  "> {/*8 is normal */}
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
      {/* Features page */}
      {/* pricing page */}
      {/* contact page + faq */}
      {/* book a demo */}
      <Pinned buttonTitle="Book a Demo" title={"For Teams and Enterprises"} description="Make your teams 10x more productive while programming by automating debugging and code review process in your organisation." link={""} />
      {/* slider  */}
      <h1 className="text-2xl md:text-6xl font-semibold text-center">Proud to be recognized by</h1>
      {/* TODO: add a canva collage in each picture and replace picture with existing one */}
      <Slider />

    </>

  )
}
