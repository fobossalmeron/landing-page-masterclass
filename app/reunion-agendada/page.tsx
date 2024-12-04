"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <div className="text-2xl font-bold mb-12">acueducto</div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h1 className="text-4xl font-bold mb-6">
              ¡Felicidades por dar el primer paso para lanzar tu MVP en{" "}
              <span className="text-blue-600">tiempo récord</span>!
            </h1>
            
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                Recibirás un email con información importante sobre tu llamada.
              </p>
              <p>
                Estamos emocionados de ayudarte a construir tu MVP.
              </p>
            </div>

            <Link href="/">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white mt-8"
                size="lg"
              >
                Volver al inicio
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full max-w-lg mx-auto"
          >
            <div className="relative aspect-[4/3] w-full">
              <div className="absolute inset-0 bg-blue-600 rounded-lg">
                <div className="absolute right-8 top-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      delay: 0.5,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 260,
                      damping: 20
                    }}
                    className="w-16 h-16 bg-yellow-400 rounded-full"
                  />
                </div>
                <div className="absolute right-32 top-16">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      delay: 0.7,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 260,
                      damping: 20
                    }}
                    className="w-8 h-8 bg-yellow-400 rounded-full"
                  />
                </div>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2"
                >
                  <svg
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-64 h-64"
                  >
                    <path
                      d="M100 180C144.183 180 180 144.183 180 100C180 55.8172 144.183 20 100 20C55.8172 20 20 55.8172 20 100C20 144.183 55.8172 180 100 180Z"
                      fill="#FFB6A2"
                    />
                    <path
                      d="M65 100L90 125L135 80"
                      stroke="#1E40AF"
                      strokeWidth="12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
                <motion.div
                  initial={{ x: -100, rotate: -45 }}
                  animate={{ x: 0, rotate: 0 }}
                  transition={{ 
                    delay: 0.8,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="absolute left-12 top-1/2 -translate-y-1/2"
                >
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 60L60 100L100 20"
                      stroke="#86EFAC"
                      strokeWidth="12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}