'use client';

import { Button } from '@/components/animate-ui/components/buttons/button';
import { easeOut, motion } from 'motion/react';
import * as React from 'react';
import { Globe } from 'lucide-react';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export interface FlipCardData {
  title: string;
  image: string;
  link?: string;
  description: string;
  createdDuration: string;
  websiteUrl?: string;
  githubUrl?: string;
}

interface FlipCardProps {
  data: FlipCardData;
}

export function FlipCard({ data }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const isTouchDevice =
    typeof window !== 'undefined' && 'ontouchstart' in window;

  const handleClick = () => {
    if (isTouchDevice) setIsFlipped(!isFlipped);
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) setIsFlipped(false);
  };

  const cardVariants = {
    front: { rotateY: 0, transition: { duration: 0.5, ease: easeOut } },
    back: { rotateY: 180, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <div
      className="mt-2 relative w-full max-w-sm aspect-[4/4] md:w-full perspective-1000 cursor-pointer mx-auto"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* FRONT: Image + Title */}
      <motion.div
        className="absolute inset-0 backface-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col items-center bg-white dark:bg-neutral-900 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        animate={isFlipped ? 'back' : 'front'}
        variants={cardVariants}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="w-full aspect-video bg-neutral-200 dark:bg-neutral-800 relative overflow-hidden">
           <img
             src={data.image}
             alt={data.title}
             className="w-full h-full object-cover"
           />
        </div>
        <div className="p-6 flex flex-col items-center justify-center flex-grow w-full text-center bg-black/90">
          <h2 className="text-2xl font-bold text-foreground mb-2 text-white">{data.title}</h2>
          {data.link && (
            <p className="text-sm text-zinc-300 hover:underline">{data.link}</p>
          )}
        </div>
      </motion.div>

      {/* BACK: Description + Stats + Links */}
      <motion.div
        className="absolute inset-0 backface-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 px-6 py-8 flex flex-col justify-between items-center bg-neutral-50 dark:bg-neutral-900 shadow-sm"
        initial={{ rotateY: 180 }}
        animate={isFlipped ? 'front' : 'back'}
        variants={cardVariants}
        style={{ transformStyle: 'preserve-3d', rotateY: 180 }}
      >
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-4 dark:text-white">{data.title}</h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="w-full flex flex-col items-center gap-6 mt-4">
          <div className="bg-neutral-200/50 dark:bg-neutral-800/50 px-4 py-2 rounded-full">
            <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
              Built {data.createdDuration}
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full">
            {data.websiteUrl && (
              <a href={data.websiteUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full gap-2" variant="default">
                  <Globe size={16} /> Visit Website
                </Button>
              </a>
            )}
            {data.githubUrl && (
              <a href={data.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full gap-2" variant="outline">
                  <GithubIcon size={16} /> View Source
                </Button>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
