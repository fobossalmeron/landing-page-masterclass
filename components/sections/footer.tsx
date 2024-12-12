import { SectionContainer } from "@/components/ui/section-container";

export function Footer({ marginTop = true }: { marginTop?: boolean }) {
  return (
    <footer className={`bg-secondary z-10 relative ${marginTop ? 'mt-16' : ''}`}>
      <SectionContainer className="py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center sm:text-left text-sm text-gray-400">
            © 2024 Acueducto. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="https://acueducto.studio" className="text-sm text-gray-200 hover:text-white transition-colors">
              acueducto.studio
            </a>
            <a href="https://acueducto.studio/privacidad" className="text-sm text-gray-200 hover:text-white transition-colors">
              política de privacidad
            </a>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}