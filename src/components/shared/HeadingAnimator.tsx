"use client"


import React, { useState, useEffect } from 'react';

type Props = {
  title?: string;
  animatedTitle: string[];
  description?: string;
}

const HeadingAnimatorMain = ({ title, animatedTitle, description }: Props) => {
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
    }, 50);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div>
      <h1 className='text-lg dark:text-white'>{title}  <span className='text-gray-600'>{animatedTitle[index].substring(0, subIndex)}</span></h1>
    </div>
  );
};

export default HeadingAnimatorMain
