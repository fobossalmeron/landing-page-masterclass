export function BulletPoint({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
      {children}
    </li>
  );
}