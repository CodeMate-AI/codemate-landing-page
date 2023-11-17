"use client"


import React, { useState, useEffect } from 'react';
import FeatureCard from './FeatureCard';

type Props = {
  title: string;
  animatedTitle: string[];
}

const HeadingAnimator = ({ title, animatedTitle }: Props) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === animatedTitle.length) {
      setIndex(0);
      return;
    }

    if (subIndex === animatedTitle[index].length + 1 &&
      !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prevIndex) => prevIndex === animatedTitle.length - 1 ? 0 : prevIndex + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
    }, 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div>
      <h1 className='text-5xl font-semibold text-center'>{title}  <span className='text-blue-600'>{animatedTitle[index].substring(0, subIndex)}</span></h1>
      <p className='text-center mt-7 text-zinc-400'>Focus on solving problems, not debugging.</p>

    </div>
  );
};

export default HeadingAnimator;
