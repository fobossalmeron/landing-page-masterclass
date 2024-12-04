export function BulletPoint({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center">
      <div className="w-2.5 h-2.5 rounded-full bg-primary mr-2"></div>
      {children}
    </li>
  );
}