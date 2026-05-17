'use client';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function Logo({ size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
  };

  return (
    <div className="flex items-center gap-2">
      {/* Simplified CompoNet Icon - representing composting/waste management */}
      <div className={`${sizes[size]} flex items-center justify-center bg-primary rounded-md`}>
        <div className="text-white font-bold text-xs">C</div>
      </div>
      {showText && (
        <div className={`flex items-baseline gap-0.5 ${textSizes[size]} font-bold`}>
          <span className="text-primary">Compo</span>
          <span className="text-accent">Net</span>
        </div>
      )}
    </div>
  );
}
