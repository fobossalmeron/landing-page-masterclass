import Image from "next/image";
import { SectionContainer } from "@/components/ui/section-container";
import { companies } from "@/lib/data";

export function CompaniesSection() {
  return (
    <SectionContainer className="py-2 sm:py-10 md:py-16 lg:py-24 sm:mt-14">
      <h2 className="text-center text-lg md:text-2xl lg:text-3xl mx-auto mb-6 sm:mb-16 text-secondary font-bold max-w-[680px] !leading-normal">
        las mejores empresas de Latinoamérica han confiado en nosotros y en nuestra compañía para el diseño y desarrollo de software
      </h2>
      
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 md:gap-y-16 max-w-[940px] mx-auto">
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
              className="h-10 md:h-16 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}