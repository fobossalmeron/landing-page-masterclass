import { VideoPlayer } from "@/components/video/player";
import { Footer } from "@/components/sections/footer";
import { SectionContainer } from "@/components/ui/section-container";
import { Nav } from "@/components/ui/nav";

export default function MasterClassPage() {
  return (
    <main className="min-h-screen">
      <SectionContainer className="pt-8 lg:pt-16">
        <Nav />
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold text-secondary lg:text-3xl">
            construye tu MVP en 3 horas:
            <br />
            <span className="text-primary">web-app full stack</span>
          </h1>
          <p className="max-w-sm text-lg text-gray-600">
            Mira el tutorial completo y descubre cómo lanzar un MVP en tiempo récord.
          </p>
        </div>
        <VideoPlayer />
      </SectionContainer>
      <Footer />
    </main>
  );
}
