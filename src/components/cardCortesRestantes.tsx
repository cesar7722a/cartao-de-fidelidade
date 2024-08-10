import pinGift from "../../public/pinGift.png";

export function CardCorteRestantes() {
  return (
    <div className="h-24 rounded-2xl py-4 px-5 bg-gray-100 flex gap-6 items-center justify-between">
      <div className="w-full">
        <h3 className="text-gray-500 text-sm flex gap-2">
          <span className="text-gray-600 font-bold">3</span>
          cortes restantes
        </h3>
        <div className="flex items-center gap-3">
          <div className="h-2 bg-gray-300 rounded-full flex-1">
            <div className="w-32 h-2 bg-custom-gradient rounded-full"></div>
          </div>
          <span className="text-gray-500 text-xs">7 de 10</span>
        </div>
      </div>
      <div className="w-16 h-14 rounded-full bg-gray-200 flex justify-center items-center">
        <img src={pinGift} alt="imagem icon gift" width={32} height={32} />
      </div>
    </div>
  );
}
