"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ConsultingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-16"
    >
      <h2 className="text-2xl font-bold mb-4">
        ¿Necesitas ayuda para construir tu MVP?
      </h2>
      <p className="text-xl mb-8">Agenda una llamada</p>
      <Button 
        variant="primary"
        size="lg"
        className="bg-blue-600 hover:bg-blue-700 text-white px-8"
      >
        Contáctanos
      </Button>
    </motion.div>
  );
}