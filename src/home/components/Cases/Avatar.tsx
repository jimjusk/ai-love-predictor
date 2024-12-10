import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  fallback: string;
}

export default function Avatar({ src, alt, fallback }: Props) {
  return (
    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-primary/10">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-primary text-lg font-semibold">
          {fallback}
        </div>
      )}
    </div>
  );
} 