"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Frontend Prototyper & UX Engineer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4">
              Master of the front of the frontend
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-500 mb-8 max-w-2xl mx-auto">
              I rapidly transform ideas into interactive prototypes and
              production-ready experiences. Understanding both what users need
              and how to build it—bridging the gap between vision and reality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg">
              <a href="#work">View My Work</a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 flex justify-center space-x-8 text-sm text-gray-600 dark:text-gray-400"
          >
            {/* <div className="flex flex-col items-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                5+
              </span>
              <span>Years Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                20+
              </span>
              <span>Projects</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                10+
              </span>
              <span>Design Systems</span>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
