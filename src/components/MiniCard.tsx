interface PropsCard {
  title: string;
  image: string;
  value: number | string;
}

export default function MiniCard({ title, image, value }: PropsCard) {
  return (
    <div
      className="flex bg-white rounded-md w-52 h-20 p-4 gap-4"
      style={{ boxShadow: "-1px 4px 15px 1px rgba(255,255,255, 0.28)" }}
    >
      <img src={image} alt="albumicon" className="w-10 h-10" />
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <h2 className="text-2xl font-normal">{value}</h2>
      </div>
    </div>
  );
}
