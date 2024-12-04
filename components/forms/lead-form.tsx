"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { createToken } from "@/lib/auth";

export function LeadForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Create contact in Brevo
      const contactResponse = await fetch('/api/brevo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'createContact',
          data: formData
        }),
      });

      if (!contactResponse.ok) {
        throw new Error('Failed to create contact');
      }

      // Send welcome email
      const emailResponse = await fetch('/api/brevo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'sendEmail',
          data: formData
        }),
      });

      if (!emailResponse.ok) {
        throw new Error('Failed to send email');
      }

      // Create and store JWT
      await createToken({ 
        email: formData.email,
        name: formData.name
      });

      // Redirect to masterclass
      router.push('/masterclass');
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error. Por favor intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Tu nombre"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="nombre@ejemplo.com"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Celular</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="Ingresa 10 dígitos sin espacios"
            pattern="[0-9]{10}"
            required
          />
        </div>
      </div>

      <div className="flex items-start gap-2 text-sm text-gray-600">
        <Check className="h-5 w-5 text-blue-600 shrink-0" />
        <p>Prometemos no enviar spam. Solo contenido de valor para impulsar tus proyectos.</p>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        disabled={isLoading}
      >
        {isLoading ? 'Procesando...' : 'Ver clase gratuita'}
      </Button>
    </form>
  );
}