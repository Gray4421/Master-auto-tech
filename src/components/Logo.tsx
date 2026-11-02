import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showSubtitle = true
}) => {
  const heightStyles = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24'
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* MasterTech Official Logo on Solid Black Background */}
      <div className="bg-black rounded-lg p-0.5 flex items-center shrink-0">
        <img
          src="/assets/aistudio/mastertech_logo_black_bg.png"
          alt="MasterTech Auto Repair"
          className={`${heightStyles[size]} w-auto object-contain block`}
          loading="eager"
        />
      </div>

      {showSubtitle && size !== 'sm' && (
        <div className="hidden lg:flex flex-col border-l border-zinc-800 pl-2.5 leading-none">
          <span className="text-[10px] font-bold uppercase tracking-widest text-green-400">
            Spartanburg, SC
          </span>
          <span className="text-[9px] uppercase tracking-wider text-zinc-500 mt-0.5">
            151 S Forest St
          </span>
        </div>
      )}
    </div>
  );
};
