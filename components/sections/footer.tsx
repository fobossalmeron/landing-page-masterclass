import { SectionContainer } from "@/components/ui/section-container";

export function Footer() {
  return (
    <footer className="border-t mt-16">
      <SectionContainer className="py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2024 Acueducto. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Política de privacidad
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Contacto
            </a>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}