"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { LeadForm } from "@/components/forms/lead-form";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Regalo } from "@/components/ui/regalo";

interface LeadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LeadModal({ open, onOpenChange }: LeadModalProps) {
  const isMobile = useMediaQuery("(max-width: 640px)");

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent>
          <DrawerHeader className="text-center">
            <DrawerTitle className="text-2xl font-bold text-secondary">
              accede a nuestra máster class{" "}
              <span className="text-primary">gratuita</span>
            </DrawerTitle>
            <p className="text-gray-600 mt-2">
              <span className="text-primary font-medium">Regalo extra:</span>{" "}
              Ingresa tus datos para recibir gratis en tu correo la guía &ldquo;Diseña productos digitales como un pro&rdquo; con pasos clave para crear productos exitosos.
            </p>
          </DrawerHeader>
          <div className="px-4 pb-8">
            <LeadForm />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-secondary">
            accede a nuestra máster class{" "}
            <span className="text-primary">gratuita</span>
          </DialogTitle>
        </DialogHeader>
        <div className="grid sm:grid-cols-2 gap-8 pt-4">
          <div>
            <p className="text-gray-600 mb-6">
              <span className="text-primary font-medium">Regalo extra:</span>{" "}
              Ingresa tus datos para recibir gratis en tu correo la guía &ldquo;Diseña productos digitales como un pro&rdquo; con pasos clave para crear productos exitosos.
            </p>
            <LeadForm />
          </div>
          <div className="relative hidden sm:block">
          <Regalo />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}