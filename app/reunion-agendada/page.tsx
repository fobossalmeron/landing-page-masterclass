"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";
import { SectionContainer } from "@/components/ui/section-container";
import { Nav } from "@/components/ui/nav";
import Image from "next/image";

export default function SuccessPage() {
  return (
    <>
      <SectionContainer className="pt-8 lg:pt-16">
        <Nav />
      <div className="flex flex-col lg:grid lg:grid-cols-2">
        <div className="flex items-start justify-start py-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-28 text-start"
          >
            <h1 className="mb-6 text-4xl font-bold text-secondary lg:text-5xl !leading-[125%] max-w-[500px]">
              ¡Felicidades por dar el primer paso para lanzar tu MVP en{" "}
              <span className="text-primary">tiempo récord</span>!
            </h1>

            <div className="space-y-4 text-xl text-gray-600 max-w-[370px]">
              <p className="font-bold">Recibirás un email con información importante sobre tu llamada.</p>
              <p>Estamos emocionados de ayudarte a construir tu MVP.</p>
            </div>

            <Link href="/">
              <Button className="mt-8 bg-blue-600 text-white hover:bg-blue-700" size="lg">
                Volver al inicio
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="absolute right-0 top-0 h-[300px] w-full bg-blue-600 lg:bg-transparent lg:h-screen">
          <Image
            src="/img/bg.png"
            alt="Imagen de fondo"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
      </div>
      </SectionContainer>
      <Footer marginTop={false} />
    </>
  );
}
