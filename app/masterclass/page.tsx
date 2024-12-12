import { VideoPlayer } from "@/components/video/player";
import { Footer } from "@/components/sections/footer";
import { SectionContainer } from "@/components/ui/section-container";
import { Nav } from "@/components/ui/nav";

export default function MasterClassPage() {
  return (
    <>
      <SectionContainer className="pt-8 lg:pt-16 min-h-[90svh] lg:mb-10">
        <Nav />
        <div className="mb-8">
          <h1 className="mb-2 sm:mb-4 text-2xl sm:text-3xl font-bold text-secondary lg:text-3xl max-w-[470px]">
            construye tu MVP en 3 horas:
            <span className="text-primary"> web-app full stack</span>
          </h1>
          <p className="text-base max-w-sm sm:text-lg text-gray-600">
            Mira el tutorial completo y descubre cómo lanzar un MVP en tiempo récord.
          </p>
        </div>
        <VideoPlayer />
      </SectionContainer>
      <Footer />
    </>
  );
}
