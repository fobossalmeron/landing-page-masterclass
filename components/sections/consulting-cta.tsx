import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function ConsultingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="rounded-lg bg-white px-7 py-7 text-center">
        <h2 className="mb-2 text-2xl font-bold">¿Necesitas ayuda para construir tu MVP?</h2>
        <p className="mb-5 text-xl">Agenda una llamada con nosotros</p>
        <div className="flex justify-center gap-4">
          <a
            href="https://calendly.com/acueducto/discovery-con-acueducto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" size="lg">
              ¡Hablemos!
            </Button>
          </a>
          <Button variant="outline" size="lg">
            Continuar video
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
