interface SkewedProps {
  children: React.ReactNode;
}

export function Skewed({ children }: SkewedProps) {
  return (
    <div className="group relative inline-block">
      <p className="relative z-10 px-4 py-3 pt-2 text-lg font-bold text-primary flex items-center gap-2">
        {children}
      </p>
      <div className="absolute inset-0 left-[unset] right-0 -skew-x-6 transform rounded-sm bg-[#F4F6FD] w-10/12" />
      <div className="absolute inset-0 left-0 skew-x-[10deg] transform rounded-sm bg-[#F4F6FD] ease-out w-5/12" />
    </div>
  );
} 