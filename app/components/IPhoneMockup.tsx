interface IPhoneMockupProps {
  children: React.ReactNode;
}

export function IPhoneMockup({ children }: IPhoneMockupProps) {
  return (
    <div className="relative mx-auto w-[80%] max-w-[280px] md:max-w-[320px]">
      {/* iPhone frame */}
      <div className="relative rounded-[40px] border-[8px] border-zinc-800 bg-zinc-900 p-2 shadow-2xl">
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-10 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-zinc-800" />
        
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[28px] bg-black aspect-[9/19.5]">
          {children}
        </div>
        
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-zinc-600" />
      </div>
    </div>
  );
}
