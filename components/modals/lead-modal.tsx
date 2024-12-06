"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { LeadForm } from "@/components/forms/lead-form";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";

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
            <DrawerTitle className="text-2xl font-bold tracking-normal text-secondary">
              accede a nuestra máster class <span className="text-primary">gratuita</span>
            </DrawerTitle>
            <p className="mt-2 text-gray-600">
              <span className="font-medium text-primary">Regalo extra:</span> Ingresa tus datos para
              recibir gratis en tu correo la guía &ldquo;Diseña productos digitales como un
              pro&rdquo; con pasos clave para crear productos exitosos.
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
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle className="text-center text-4xl font-bold text-secondary max-w-[400px] self-center mb-5">
            accede a nuestra masterclass <span className="text-primary">gratuita</span>
          </DialogTitle>
          <DialogDescription className="mb-6 text-center text-lg text-gray-600 max-w-[600px] self-center">
            <span className="font-bold text-primary">Regalo extra:</span> Ingresa tus datos para
            recibir gratis en tu correo la guía <b className="text-secondary">&ldquo;Design digital products like a pro&rdquo; </b>
            con pasos clave para crear productos exitosos.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-8 pt-4 sm:grid-cols-2">
          <div>
            <LeadForm />
          </div>
          <div className="relative hidden sm:block pt-12">
          <Image
            src="/img/regalo-extra.png"
            alt="Regalo extra: Design digital products like a pro"
            width={650}
            height={543}
            className="drop-shadow-lg"
          />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
