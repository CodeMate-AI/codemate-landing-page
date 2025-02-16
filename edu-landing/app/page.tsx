"use client"
import styles from "@/styles/style";
import AnimatedLogoCloud from "@components/AnimatedLogoCloud";
import AnimatedRecognitionCloud from "@components/AnimatedRecognitionCloud";
import Clients from "@components/Clients";
import CTA from "@components/CTA";
import Footer from "@components/Footer";
import GuestFeatures from "@components/GuestFeatures";
import Hero from "@components/Hero";
import Navbar from "@components/Navbar";
import Stats from "@components/Stats";
import StudentFeatures from "@components/StudentFeatures";
import TeacherFeatures from "@components/TeacherFeatures";
import SimpleTestimonialCarousel from "@components/Testimonials";
// import MarqueeTestimonials from "@components/Testimonials";
const Home: React.FC = () => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <StudentFeatures />
            <TeacherFeatures/>
            <GuestFeatures />
            <SimpleTestimonialCarousel />
            <AnimatedLogoCloud />
            <AnimatedRecognitionCloud/>
            {/* <CTA /> */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home