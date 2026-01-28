import { Flower2 } from 'lucide-react';

interface OrnamentProps {
  className?: string;
}

export default function Ornament({ className = '' }: OrnamentProps) {
  return (
    <div className={`divider-ornament ${className}`}>
      <Flower2 className="h-5 w-5 text-gold" />
    </div>
  );
}
