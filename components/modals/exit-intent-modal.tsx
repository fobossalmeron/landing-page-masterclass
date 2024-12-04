"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ExitIntentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ExitIntentModal({ open, onOpenChange }: ExitIntentModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0">
        <div className="relative p-6">
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>

          <div className="text-center space-y-4">
            <DialogTitle className="text-2xl font-bold">
              la máster class estará disponible por{" "}
              <span className="text-blue-600">tiempo limitado</span>
            </DialogTitle>

            <p className="text-gray-600">
              ¡Aprovecha esta oportunidad única para aprender a lanzar un MVP en menos de 3 horas! 
              Regresa ahora y no te pierdas esta valiosa máster class.
            </p>

            <Button
              variant="default"
              className="bg-blue-600 hover:bg-blue-700 text-white w-full"
              onClick={() => onOpenChange(false)}
            >
              Volver a máster class
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}