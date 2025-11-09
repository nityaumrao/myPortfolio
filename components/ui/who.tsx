'use client';

import * as React from 'react';
import { motion } from 'motion/react';

type ColourfulTextProps = Omit<React.ComponentProps<'span'>, 'children'> & {
  text: string;
  interval?: number;
  colors?: string[];
  animationDuration?: number;
  staggerDelay?: number;
};

const defaultColors = [
  'rgb(131, 179, 32)',
  'rgba(121, 133, 226, 1)',
  'rgb(42, 169, 210)',
  'rgb(47, 82, 73)',
  'rgba(142, 203, 11, 0.79)',
  'rgb(67, 112, 87)',
  'rgb(151, 176, 103)',
  'rgb(227, 222, 97)',
  'rgb(42, 169, 210)',
  'rgb(249, 129, 47)',
];

function ColourfulText({
  ref,
  text,
  interval = 5000,
  colors = defaultColors,
  animationDuration = 0.5,
  staggerDelay = 0.05,
  ...props
}: ColourfulTextProps) {
  const localRef = React.useRef<HTMLSpanElement>(null);
  React.useImperativeHandle(ref, () => localRef.current as HTMLSpanElement);

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, interval);

    return () => clearInterval(intervalId);
  }, [colors, interval]);

  const characters = React.useMemo(() => text.split(''), [text]);

  return (
    <span ref={localRef} data-slot="colourful-text" {...props}>
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${count}-${index}`}
          initial={{ y: 0 }}
          animate={{
            color: currentColors[index % currentColors.length],
            y: [0, -3, 0],
            scale: [1, 1.01, 1],
            filter: ['blur(0px)', 'blur(5px)', 'blur(0px)'],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: animationDuration,
            delay: index * staggerDelay,
          }}
          className="inline-block whitespace-pre font-sans tracking-tight will-change-transform will-change-opacity will-change-filter"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export { ColourfulText, type ColourfulTextProps };