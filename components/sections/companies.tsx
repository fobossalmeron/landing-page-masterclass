import Image from "next/image";
import { SectionContainer } from "@/components/ui/section-container";
import { companies } from "@/lib/data";

export function CompaniesSection() {
  return (
    <SectionContainer className="py-16 lg:py-24 mt-14">
      <h2 className="text-center text-xl lg:text-3xl mx-auto mb-16 text-secondary font-bold max-w-[680px] !leading-normal">
        las mejores empresas de Latinoamérica han confiado en nosotros y en nuestra compañía para el diseño y desarrollo de software
      </h2>
      
      <div className="flex flex-wrap items-center justify-center gap-12 gap-y-16 max-w-[940px] mx-auto">
        {companies.map((company) => (
          <div 
            key={company.id} 
            className="h-12 flex items-center justify-center"
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