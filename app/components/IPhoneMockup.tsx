interface IPhoneMockupProps {
  children: React.ReactNode;
}

export function IPhoneMockup({ children }: IPhoneMockupProps) {
  return (
    <div className="relative mx-auto w-full">
      {children}
    </div>
  );
}
