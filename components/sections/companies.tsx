import { SectionContainer } from "@/components/ui/section-container";
import { companies } from "@/lib/data";

export function CompaniesSection() {
  return (
    <SectionContainer className="py-16 lg:py-24">
      <h2 className="text-center text-xl lg:text-2xl max-w-3xl mx-auto mb-12">
        las mejores empresas de Latinoamérica han confiado en nosotros y en nuestra compañía para el diseño y desarrollo de software
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center opacity-80">
        {companies.map((company) => (
          <div key={company.id} className="h-12 flex items-center">
            <div className="w-32 h-8 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}