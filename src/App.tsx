import { CornerDownLeft } from "lucide-react";
import logo from "../public/Vector.png";
import userImagem from "../public/Picture.png";
import pinGift from "../public/pinGift.png";
import { RenderHistorico } from "./components/renderHistoricos";
import { RenderCartao } from "./renderCatao";

function App() {
  return (
    <div className="px-3 pb-4">
      <div className="h-28 flex items-center">
        <img src={logo} alt="logo imagem" className="w-24 h-12 mx-auto" />
      </div>
      <div className="h-14 rounded-xl flex px-2 py-2 gap-3 bg-[#D3CFD2]">
        <input
          type="text"
          placeholder="ID do cartão"
          className="bg-transparent px-2 flex-1 outline-none"
        />
        <button className="size-10 bg-gray-700 rounded-lg">
          <CornerDownLeft className="mx-auto text-white" />
        </button>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <div className="h-24 rounded-2xl py-4 px-4 bg-gray-100 flex gap-4">
          <img
            src={userImagem}
            alt="user Imagem"
            className="rounded-[10px] border border-spacing-4 size-16"
          />
          <div className="space-y-1">
            <h1 className="text-gray-600 font-bold text-2xl">
              Natália Miranda
            </h1>
            <h2 className="text-gray-500">Cliente desde 18/09/2023</h2>
          </div>
        </div>

        <RenderCartao />

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

        <RenderHistorico />
      </div>
    </div>
  );
}

export default App;
