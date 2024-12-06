"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";
import { SectionContainer } from "@/components/ui/section-container";
import { Nav } from "@/components/ui/nav";

export default function SuccessPage() {
  return (
    <>
      <SectionContainer className="pt-8 lg:pt-16">
        <Nav />
        <div className="flex flex-col">
          <div className="container mx-auto max-w-4xl px-4 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto mb-12 max-w-2xl text-center"
            >
              <h1 className="mb-6 text-4xl font-bold text-secondary">
                ¡Felicidades por dar el primer paso para lanzar tu MVP en{" "}
                <span className="text-primary">tiempo récord</span>!
              </h1>

              <div className="space-y-4 text-lg text-gray-600">
                <p>Recibirás un email con información importante sobre tu llamada.</p>
                <p>Estamos emocionados de ayudarte a construir tu MVP.</p>
              </div>

              <Link href="/">
                <Button className="mt-8 bg-blue-600 text-white hover:bg-blue-700" size="lg">
                  Volver al inicio
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </SectionContainer>
      <Footer />
    </>
  );
}
