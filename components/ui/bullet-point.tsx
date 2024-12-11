export function BulletPoint({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start">
      <div className="w-[10px] h-[10px] min-w-[10px] min-h-[10px] rounded-full bg-primary mr-2 mt-2.5"></div>
      <div>{children}</div>
    </li>
  );
}
