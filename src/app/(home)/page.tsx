import PriorStartup from "@/components/PriorStartup";
import Typer from "@/components/Typer";
import UsedByDevelopers from "@/components/UsedByDevelopers";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <>
      {/* main page */}
      <div className='flex flex-col items-center justify-center min-h-screen text-center mt-10'>
        <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
          <p className='text-sm font-semibold text-gray-700'>
            CodeMate is now used by 25,000+ users globally!🥳
          </p>
        </div>
        <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
          The fastest way to write error-free code
          <span className='text-blue-600'>  in seconds.</span>{' '}
        </h1>

        <Typer />
        <Link
          className={buttonVariants({
            size: 'lg',
            className: 'mt-5',

          })}
          href='/dashboard'
          target='_blank'>
          Get started{' '}
          <ArrowRight className='ml-2 h-5 w-5' />
        </Link>
      </div>
      {/* youtube  */}
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.youtube.com/watch?v=wiIgqWa7_0M&t=132s"

          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        >
        </iframe>
      </div>

      {/* prior used organizations */}
      <PriorStartup />
      <UsedByDevelopers />
      {/*todo: Say goodbye to Overloading Tabs */}

      {/* Features */}
      {/* pricing */}

      {/* book a demo */}
      {/* slider  */}
    </>

  )
}
