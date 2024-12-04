import { SectionContainer } from "@/components/ui/section-container";

export function Footer() {
  return (
    <footer className="bg-secondary mt-16">
      <SectionContainer className="py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2024 Acueducto. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="https://acueducto.studio/privacidad" className="text-sm text-white hover:text-gray-200">
              Política de privacidad
            </a>
            <a href="#" className="text-sm text-white hover:text-gray-200">
              Contacto
            </a>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}