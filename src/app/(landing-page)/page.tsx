import CodePage from "@/components/CodePage/CodePage";
import Pinned from "@/components/shared/Pinned";
import Slider from "@/components/shared/Slider";
import CelebrationDailog from "@/components/ui/CelebrationDailog";
import "simplebar-react/dist/simplebar.min.css";
import "../../../styles/main.css"
import DemoVideoSection from "@/components/DemoVideoSection";
import TrustedBySection from "@/components/TrustedBySection";
import LanguageSupport from "@/components/LanguageSupport";
import MediaFeatures from "@/components/MediaFeatures";
import Reviews from "@/components/Reviews";
import ProductHuntBadges from "@/components/ProductHuntBadges";
import TimeLine from "@/components/TimeLine";
import FAQ from "@/components/shared/MainPageFAQ";
import FeaturesTab from "@/components/shared/FeaturesTab";
import IndustrialStandard from "@/components/IndustrialStandard";
import ComingSoonToCLi from "@/components/shared/ComingSoonToCLi";
import CodemateFigures from "@/components/CodemateFigures";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center justify-center mt-28 text-center '>
        <CelebrationDailog />
        <h1 className='max-w-5xl animate text-3xl font-bold md:text-8xl lg:text-8xl animate-in fade-in zoom-in duration-400'>
          The fastest way to write error-free code in <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 animate-backgroundPan duration-100">seconds</span>
        </h1>
        <h1 className="text-gray-700 text-base md:text-lg dark:text-zinc-200">Code 10x faster as CodeMate autocorrects your errors, all without leaving your environment.</h1>
        <div className="flex md:flex-row flex-col gap-5 mt-3">

          <button className="vs-code-btn px-2 py-2 md:px-6 md:py-3 ">
            <img src="/logo/vs-code.svg" alt="vs code" className="mr-1" />
            <Link href={"https://marketplace.visualstudio.com/items?itemName=AyushSinghal.Code-Mate"} className="vs-code-span text-xs font-bold md:text-lg">
              Install our VS Code Extension
            </Link>
          </button>

          <button id="pricing-stylish-button">
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" id="pricing-svg" className="icon icon-tabler icon-tabler-report-money" width="30" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                  <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                  <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                  <path d="M12 17v1m0 -8v1" />
                </svg>
              </div>
            </div>
            <Link href={"/pricing"} className="pricing-text ">Compare Plans</Link>
          </button>
        </div>
      </div>
      <DemoVideoSection />
      <TrustedBySection />
      <h1 className="text-xl md:text-5xl text-center font-bold mt-12 bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent uppercase">Write Code faster than ever</h1>
      <p className="text-lg md:text-2xl dark:text-gray-600 text-center">Join us on our Journey</p>
      <div className="items-center justify-center  w-full mt-12  ">
        <div className="mt-14 my-9 min-h-[600px] overflow-hidden">
          <CodePage />
        </div>
      </div>
      <LanguageSupport />
      <IndustrialStandard />
      <FeaturesTab />
      <TimeLine />
      <Pinned buttonTitle="Book a Demo" title={"For Teams and Enterprises"} description="Make your teams 10x more productive while programming by automating debugging and code review process in your organisation." link={"https://cal.com/AyushSinghal/30min"} />
      <MediaFeatures />
      <h1 className="text-2xl uppercase md:text-6xl font-semibold text-center mt-7">Proud to be <span className="bg-gradient-to-r from-teal-500 to-gray-500 bg-clip-text text-transparent">
        recognized by </span></h1>
      <Slider />
      <CodemateFigures />
      <Reviews />
      <FAQ />
      <ProductHuntBadges />
      <ComingSoonToCLi />
    </>

  )
}
