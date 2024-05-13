import { CardProps } from "../types";

export default function Card({ imageUrl, artistName, value }: CardProps) {
  return (
    <div className="ml-4 relative w-44 h-44 flex items-center justify-center">
      <img
        style={{ boxShadow: "-1px 4px 15px 1px rgba(255,255,255, 0.28)" }}
        src={imageUrl}
        alt="Imagem 1"
        className="rounded-md w-full h-full brightness-75"
      />
      <p className="absolute text-white text-2xl font-medium">{artistName}</p>
      <p className="absolute text-white text-xl font-medium bottom-2 right-2">
        R$ {value}
      </p>
    </div>
  );
}
