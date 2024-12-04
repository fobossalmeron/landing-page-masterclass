"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { LeadForm } from "@/components/forms/lead-form";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useState } from "react";
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
            <DrawerTitle className="text-2xl font-bold">
              accede a nuestra máster class{" "}
              <span className="text-blue-600">gratuita</span>
            </DrawerTitle>
            <p className="text-gray-600 mt-2">
              <span className="text-blue-600 font-medium">Regalo extra:</span>{" "}
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
          <DialogTitle className="text-3xl font-bold text-center">
            accede a nuestra máster class{" "}
            <span className="text-blue-600">gratuita</span>
          </DialogTitle>
        </DialogHeader>
        <div className="grid sm:grid-cols-2 gap-8 pt-4">
          <div>
            <p className="text-gray-600 mb-6">
              <span className="text-blue-600 font-medium">Regalo extra:</span>{" "}
              Ingresa tus datos para recibir gratis en tu correo la guía &ldquo;Diseña productos digitales como un pro&rdquo; con pasos clave para crear productos exitosos.
            </p>
            <LeadForm />
          </div>
          <div className="relative hidden sm:block">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=1974"
                alt="Design guide preview"
                fill
                className="object-cover rounded-lg"
                priority
              />
              <div className="absolute -right-4 -top-4 bg-blue-600 text-white px-4 py-2 rounded-full">
                Regalo extra
              </div>
            </div>
            <div className="absolute -z-10 top-0 right-0 w-48 h-48 bg-yellow-300 blur-3xl opacity-20" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}