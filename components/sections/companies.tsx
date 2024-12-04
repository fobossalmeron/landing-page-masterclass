import Image from "next/image";
import { SectionContainer } from "@/components/ui/section-container";
import { companies } from "@/lib/data";

export function CompaniesSection() {
  return (
    <SectionContainer className="py-16 lg:py-24">
      <h2 className="text-center text-xl lg:text-2xl max-w-3xl mx-auto mb-12 text-secondary font-bold">
        las mejores empresas de Latinoamérica han confiado en nosotros y en nuestra compañía para el diseño y desarrollo de software
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
        {companies.map((company) => (
          <div 
            key={company.id} 
            className="h-12 flex items-center"
            role="img"
            aria-label={`Logo de ${company.name}`}
          >
            <Image
              src={`/img/clients/${company.logo}`}
              alt={`Logo de ${company.name}`}
              width={160}
              height={48}
              className="h-16 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}