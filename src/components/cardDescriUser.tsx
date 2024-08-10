import userImagem from "../../public/Picture.png";

export function CardDescriptionUser() {
  return (
    <div className="h-24 rounded-2xl py-4 px-4 bg-gray-100 flex gap-4">
      <img
        src={userImagem}
        alt="user Imagem"
        className="rounded-[10px] border border-spacing-4 size-16"
      />
      <div className="space-y-1">
        <h1 className="text-gray-600 font-bold text-2xl">Natália Miranda</h1>
        <h2 className="text-gray-500">Cliente desde 18/09/2023</h2>
      </div>
    </div>
  );
}
