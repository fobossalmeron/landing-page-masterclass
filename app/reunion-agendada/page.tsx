"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";
import { SectionContainer } from "@/components/ui/section-container";
import Image from "next/image";

export default function SuccessPage() {
  return (
    <div className="space-between relative flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col lg:grid lg:grid-cols-2">
        <SectionContainer className="sm:pt-8 lg:px-0 lg:pr-10">
          <div className="z-20 flex w-full items-center md:items-start justify-center md:justify-start py-8 lg:pl-[15%] lg:pr-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-2 md:mb-28 text-start justify-center items-center flex flex-col md:items-start"
            >
              <Image
                src="/img/logoblack.svg"
                alt="Acueducto"
                width={128}
                height={18}
                className="mb-10 md:mb-20"
              />
              <h1 className="mb-6 max-w-[500px] text-center text-2xl sm:text-3xl md:text-4xl font-bold !leading-[125%] text-secondary md:text-left xl:text-5xl">
                ¡Felicidades por dar el primer paso para lanzar tu MVP en{" "}
                <span className="text-primary">tiempo récord</span>!
              </h1>
              <div className="max-w-[370px] space-y-4 text-center text-base md:text-xl text-gray-600 md:text-left">
                <p className="font-bold">
                  Recibirás un email con información importante sobre tu llamada.
                </p>
                <p>Estamos emocionados de ayudarte a construir tu MVP.</p>
              </div>
              <Link href="/">
                <Button className="mt-8">Volver al inicio</Button>
              </Link>
            </motion.div>
          </div>
        </SectionContainer>

        <div className="relative right-0 bottom-0 z-10 h-[300px] w-full lg:w-1/2 bg-blue-600 lg:absolute lg:h-[80vh] lg:bg-transparent">
          <Image
            src="/img/bg.png"
            alt="Imagen de fondo"
            fill
            className="object-cover md:object-contain pt-4 lg:pt-0 !left-[unset] !w-[unset]"
            priority
            quality={100}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
