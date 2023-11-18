
import CodePage from "@/components/CodePage/CodePage";
import KeyFeatures from "@/components/KeyFeatures";
import PriorStartup from "@/components/PriorStartup";
import UsedByDevelopers from "@/components/UsedByDevelopers";
import HeadingAnimatorMain from "@/components/shared/HeadingAnimator";
import Pinned from "@/components/shared/Pinned";
import Slider from "@/components/shared/Slider";
import CelebrationDailog from "@/components/ui/CelebrationDailog";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import "simplebar-react/dist/simplebar.min.css";


export default function Home() {
  return (
    <>
      {/* main page */}
      <div className='flex flex-col items-center justify-center min-h-screen text-center mt-2'>
        <CelebrationDailog />
        <h1 className='max-w-4xl animate text-3xl font-bold md:text-6xl lg:text-7xl animate-in fade-in zoom-in duration-400'>
          The fastest way to write error-free code
          <span className='text-blue-600'>  in seconds.</span>{' '}
        </h1>

        <HeadingAnimatorMain animatedTitle={["Code 10x faster as CodeMate autocorrects your errors, all without leaving your environment."]} />
        <div className="flex md:flex-row flex-col gap-5 mt-3">
          <Link style={{ width: '250px', height: '54px' }} href={"https://marketplace.visualstudio.com/items?itemName=AyushSinghal.Code-Mate"} className={buttonVariants({
            size: "lg"
          })}>
            <img src={"/logo/vs-code.svg"} alt="" className="w-10 h-10 mr-3" />
            Install our VS Code Extension
          </Link>

          <Link href="https://www.producthunt.com/posts/codemate-ai?utm_source=badge-featured&amp;utm_medium=badge&amp;utm_souce=badge-codemate-ai" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=392150&amp;theme=light" alt="CodeMate AI - Grammarly for Programmers: Auto-GPT for fixing errors | Product Hunt" style={{ width: '250px', height: '54px' }} width="250" height="54" /></Link>

        </div>

        <p className="text-center mt-5 text-lg text-zinc-900 dark:text-zinc-400"><span className="mr-1 bg-red-200 bg-opacity-25 text-red-600 border border-red-400 rounded-md px-2 py-1">1954354</span>
          lines of code reviewed so far</p>
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
