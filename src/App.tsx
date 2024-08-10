import { CornerDownLeft } from "lucide-react";
import logo from "../public/Vector.png";
import { RenderHistorico } from "./components/renderHistoricos";
import { RenderCartao } from "./components/renderCatao";
import { CardDescriptionUser } from "./components/cardDescriUser";
import { CardCorteRestantes } from "./components/cardCortesRestantes";

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
        <button className="size-10 bg-gray-700 rounded-lg hover:bg-gray-600">
          <CornerDownLeft className="mx-auto text-white" />
        </button>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <CardDescriptionUser />
        <RenderCartao />
        <CardCorteRestantes />
        <RenderHistorico />
      </div>
    </div>
  );
}

export default App;
