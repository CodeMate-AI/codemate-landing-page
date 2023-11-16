"use client"

import React from "react";
import Typed from "typed.js";

type Props = {}

const Typer = (props: Props) => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Code 10x faster as CodeMate autocorrects your errors, all without leaving your environment.'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <span ref={el} className='mt-5 max-w-prose text-zinc-400 sm:text-lg' />
  )
}

export default Typer
