import Image from "next/image";
import { Button } from "@/components/ui/button";

interface NavProps {
  showButton?: boolean;
  onButtonClick?: () => void;
}

export function Nav({ showButton, onButtonClick }: NavProps) {
  return (
    <nav className="mb-10 md:mb-16 flex w-full items-center justify-between">
      <div className="flex items-center">
        <Image src="/img/logoblack.svg" alt="Acueducto" width={128} height={18} />
      </div>
      {showButton && (
        <Button variant="default" onClick={onButtonClick}>
          Ver clase gratuita
        </Button>
      )}
    </nav>
  );
} 