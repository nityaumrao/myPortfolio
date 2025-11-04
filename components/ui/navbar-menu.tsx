"use client";
import React from "react";
import { motion } from "framer-motion";



const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  href,
  children,
}: {
  setActive?: (item: string | null) => void;
  active?: string | null;
  item: string;
  href?: string;
  children?: React.ReactNode;
}) => {
  const isDropdown = Boolean(children);

  const handleMouseEnter = () => {
    if (isDropdown && setActive) {
      setActive(item);
    }
  };

  const handleMouseLeave = () => {
    if (isDropdown && setActive) {
      setActive(null);
    }
  };

  const linkProps = isDropdown
    ? { role: "button" as const, tabIndex: 0 }
    : { href: href ?? "#" };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block group"
    >
      <span
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-emerald-200/50 opacity-0 scale-75 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:shadow-[0_10px_25px_rgba(16,185,129,0.18)]"
        aria-hidden="true"
      />
      <motion.a
        transition={{ duration: 0.2 }}
        className="relative inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-black transition-colors duration-300 group-hover:text-emerald-900 dark:text-white dark:group-hover:text-emerald-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
        {...linkProps}
      >
        {item}
      </motion.a>
      {isDropdown && active === item && setActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
            <motion.div
              transition={transition}
              layoutId="active" // layoutId ensures smooth animation
              className="bg-emerald-100
 dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border-grey-800 border-black/[0.2] dark:border-white/[0.2] shadow-xl"
            >
              <motion.div
                layout // layout ensures smooth animation
                className="w-max h-full p-4"
              >
                {children}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative flex justify-center space-x-2 rounded-full border border-black/30 bg-emerald-100 px-5 py-1.5 text-sm shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-white/20 dark:bg-black/40"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </a>
  );
};
