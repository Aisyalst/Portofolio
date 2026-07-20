'use client';

import * as React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, type Transition } from 'motion/react';

const transition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 26,
};

const getCardVariants = (i: number) => ({
  collapsed: {
    marginTop: i === 0 ? 0 : -44,
    scaleX: 1 - i * 0.05,
  },
  expanded: {
    marginTop: i === 0 ? 0 : 4,
    scaleX: 1,
  },
});

const textSwitchTransition: Transition = {
  duration: 0.22,
  ease: 'easeInOut',
};

const notificationTextVariants = {
  collapsed: { opacity: 1, y: 0, pointerEvents: 'auto' },
  expanded: { opacity: 0, y: -16, pointerEvents: 'none' },
};

const viewAllTextVariants = {
  collapsed: { opacity: 0, y: 16, pointerEvents: 'none' },
  expanded: { opacity: 1, y: 0, pointerEvents: 'auto' },
};

export interface HardSkillItem {
  id: string | number;
  title: string;
}

interface HardSkillsListProps {
  skills: HardSkillItem[];
}

function NotificationList({ skills = [] }: HardSkillsListProps) {
  return (
    <motion.div
      className="bg-neutral-900 p-3 rounded-3xl w-64 space-y-3 shadow-md"
      initial="collapsed"
      whileHover="expanded"
    >
      <div>
        {skills.map((skill, i) => (
          <motion.div
            key={skill.id}
            className="bg-neutral-800 rounded-xl px-4 py-3 shadow-sm hover:shadow-lg transition-shadow duration-200 relative flex items-center"
            variants={getCardVariants(i)}
            transition={transition}
            style={{
              zIndex: skills.length - i,
            }}
          >
            <h1 className="text-sm font-semibold text-neutral-100">{skill.title}</h1>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <div className="size-5 rounded-full bg-neutral-700 text-neutral-300 text-xs flex items-center justify-center font-medium">
          {skills.length}
        </div>
        <span className="grid">
          <motion.span
            className="text-sm font-medium text-neutral-300 row-start-1 col-start-1"
            variants={notificationTextVariants}
            transition={textSwitchTransition}
          >
            Hard Skills
          </motion.span>
          <motion.span
            className="text-sm font-medium text-neutral-300 flex items-center gap-1 cursor-pointer select-none row-start-1 col-start-1"
            variants={viewAllTextVariants}
            transition={textSwitchTransition}
          >
            Total Hard Skills <ArrowUpRight className="size-4" />
          </motion.span>
        </span>
      </div>
    </motion.div>
  );
}

export { NotificationList as HardSkillsList };
