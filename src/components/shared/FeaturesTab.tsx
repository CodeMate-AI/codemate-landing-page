"use client"

import { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import { useIsVisible } from '@/lib/useIsVisible';

const tabsData = [
  {
    title: 'Prevent project delays, get paid sooner',
    icon: '/logo/calendar.svg',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras sed felis eget velit aliquet sagittis id consectetur purus. Habitant morbi tristique senectus et netus. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Amet purus gravida quis blandit. Nisi est sit amet facilisis magna etiam.',
    imgContent: "https://github.com/images/modules/site/copilot/react/features-river-1.webp"
  },
  {
    title: 'Code with Confidence',
    icon: '/logo/checkmark.svg',
    content:
      'Faucibus purus in massa tempor nec feugiat nisl. Sodales ut etiam sit amet nisl purus. Sit amet porttitor eget dolor morbi non. Risus in hendrerit gravida rutrum quisque non tellus. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Vehicula ipsum a arcu cursus.',
    imgContent: "https://github.com/images/modules/site/copilot/react/features-river-2.webp"
  },
  {
    title: 'Streamline Your Workflow with 10x productivity',
    icon: '/logo/workflow.svg',
    content:
      'Faucibus purus in massa tempor nec feugiat nisl. Sodales ut etiam sit amet nisl purus. Sit amet porttitor eget dolor morbi non. Risus in hendrerit gravida rutrum quisque non tellus. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Vehicula ipsum a arcu cursus.',
    imgContent: "https://github.com/images/modules/site/copilot/react/features-river-2.webp"
  },
  // Add more tab data as needed
];

const FeaturesTab = () => {
  const ref1 = useRef(null)
  const isVisible = useIsVisible(ref1)
  const [selected, setSelected] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Function to check screen width and set the mobile state
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
  };

  useEffect(() => {
    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize); // Listen for window resize
    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the listener
    };
  }, []);

  const handleTabClick = (index: number) => {
    setSelected(index);
  };

  return (
    <div ref={ref1} className={`transition-opacity ease-in duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <h1 className='text-3xl md:text-5xl font-bold mt-10 mb-4 text-center'><span className='bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent'>Features</span> Codemate Provides</h1>
      <p className='text-xl md:text-2xl text-gray-700 dark:text-gray-300  text-center'>The AI coding assistant</p>
      <main className="relative mx-auto mt-10 mb-20 bg-white py-8 px-10 rounded-md shadow-md">
        {isMobile ? (
          // Horizontal menu for mobile
          <menu className="flex overflow-x-auto pb-4">
            {tabsData.map((tab, index) => (
              <button
                key={index}
                className={`text-gray-400 hover:text-white px-4 py-2 mx-2 ${selected === index ? 'text-white' : ''
                  }`}
                onClick={() => handleTabClick(index)}
              >
                <img
                  src={tab.icon}
                  alt=""
                  className={`mt-2 mb-2 hover:grayscale ${selected === index ? 'grayscale' : 'grayscale-0'
                    }`}
                  height={50}
                  width={50}
                />
              </button>
            ))}
          </menu>
        ) : (
          // Vertical menu for desktop
          <menu className="absolute top-2 -left-[74px] md:top-10 md:-left-[74px] bg-gray-950 dark:bg-gray-900 w-[75px] rounded-l-md">
            <ul>
              {tabsData.map((tab, index) => (
                <li key={index} className="gap-2">
                  <button
                    className={`text-gray-400 hover:text-white block w-full ${selected === index ? 'text-white' : ''
                      }`}
                    onClick={() => handleTabClick(index)}
                  >
                    <span className="block w-16 mx-2">
                      <img
                        src={tab.icon}
                        alt=""
                        className={`mt-2 mb-2 hover:grayscale ${selected === index ? 'grayscale' : 'grayscale-0'
                          }`}
                        height={200}
                        width={200}
                      />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </menu>
        )}
        <article className=" grid md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <h1 className="text-2xl md:text-5xl font-bold dark:text-black">{tabsData[selected].title}</h1>
            <p className="mb-2 text-base md:text-2xl text-gray-700 font-semibold leading-relaxed mt-3">{tabsData[selected].content}</p>
          </div>
          <div>
            <img src={tabsData[selected].imgContent} alt="" className='w-full rounded-2xl' />
          </div>
        </article>
      </main>
      <div className='flex items-center justify-center'>
        <Button size={"lg"}>
          Call to Action
        </Button>

      </div>
    </div>
  );
};

export default FeaturesTab;
