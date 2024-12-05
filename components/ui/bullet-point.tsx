export function BulletPoint({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start">
      <div className="w-2.5 h-2.5 rounded-full bg-primary mr-2 mt-2.5"></div>
      <div>{children}</div>
    </li>
  );
}
