import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  href?: string;
}

export default function Logo({
  className,
  href = '/',
}: LogoProps) {
  return (
    <a href={href} className={cn('flex items-center', className)}>
      <span className="font-weight-display text-lg tracking-tight">
        [simon balfe]
      </span>
    </a>
  );
}
