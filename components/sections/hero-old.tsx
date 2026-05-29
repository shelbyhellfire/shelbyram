"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                UX Frontend Developer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4">
              Bridging the gap between design and code
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-500 mb-8">
              Specializing in component libraries, design systems, and creating
              seamless user experiences with clean, maintainable code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg">
                <a href="#work">View My Work</a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex flex-col">
                <span className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  5+
                </span>
                <span>Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  20+
                </span>
                <span>Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  10+
                </span>
                <span>Design Systems</span>
              </div>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Decorative background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-600/20 rounded-full blur-3xl" />

              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <Image
                  src="/headshot.png"
                  alt="Shelby Ramseth - UX Frontend Developer"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 60%" }}
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
