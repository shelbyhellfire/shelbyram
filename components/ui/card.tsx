"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`group relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-2xl border border-gray-200 dark:border-gray-700 hover:border-primary-500/20 dark:hover:border-primary-500/30 transition-all duration-300 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:via-accent-500/5 group-hover:to-primary-500/5 transition-all duration-500" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
