interface PlayButtonProps {
  onClick?: () => void;
  className?: string;
}

export function PlayButton({ onClick, className }: PlayButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`h-20 w-20 rounded-full border-2 border-white bg-white/20 hover:bg-white/30 transition-colors duration-300 flex items-center justify-center group ${className} group-hover:border-0`}
    >
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M6.6665 40C6.6665 21.5905 21.5904 6.66668 39.9999 6.66668C48.8404 6.66668 57.3189 10.1786 63.5701 16.4298C69.8212 22.681 73.3331 31.1595 73.3331 40C73.3331 58.4095 58.4094 73.3334 39.9999 73.3334C21.5904 73.3334 6.6665 58.4095 6.6665 40ZM33.9 54.2668L53.3332 42.1334C54.0605 41.6676 54.5004 40.8636 54.5004 40C54.5004 39.1365 54.0605 38.3324 53.3332 37.8668L33.8332 25.7334C33.0652 25.2491 32.095 25.2194 31.2987 25.6555C30.5025 26.0918 30.0052 26.9254 30 27.8334V52.1668C29.9892 53.0968 30.4956 53.9559 31.3145 54.3968C32.1334 54.8378 33.1294 54.7876 33.9 54.2668Z" 
          className="fill-muted group-hover:fill-white transition-all group-hover:scale-105 origin-center"
        />
      </svg>
    </button>
  );
} 