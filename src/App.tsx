import { CornerDownLeft } from "lucide-react";
import logo from "../public/Vector.png";
import userImagem from "../public/Picture.png";
import pinGift from "../public/pinGift.png";
import { HiBadgeCheck } from "react-icons/hi";
import { IoGiftOutline } from "react-icons/io5";

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
        <div className="rounded-2xl px-5 pt-6 pb-5 bg-gray-100 flex flex-col gap-5">
          <div className="flex gap-4 justify-between">
            <div className="space-y-1 w-52">
              <h3 className="text-gray-500 text-lg uppercase">
                Cartão Fidelidade
              </h3>
              <p className="text-gray-500">
                Ao fazer cortes de cabelo, o décimo sai de graça!
              </p>
            </div>
            <span className="bg-gray-300 font-bold text-gray-500 px-2.5 h-8 py-1 rounded-full">
              ID: 124-537-835-230
            </span>
          </div>
          <div className="grid grid-cols-5 gap-2">
            <span className="size-20 bg-gray-200 rounded-xl flex items-center justify-center">
              <HiBadgeCheck className="size-8 text-[#45B442]" />
            </span>
            <span className="size-20 bg-gray-200 rounded-xl flex items-center justify-center">
              <HiBadgeCheck className="size-8 text-[#45B442]" />
            </span>
            <span className="size-20 bg-gray-200 rounded-xl flex items-center justify-center">
              <HiBadgeCheck className="size-8 text-[#45B442]" />
            </span>
            <span className="size-20 bg-gray-200 rounded-xl flex items-center justify-center">
              <HiBadgeCheck className="size-8 text-[#45B442]" />
            </span>
            <span className="size-20 bg-gray-200 rounded-xl flex items-center justify-center">
              <HiBadgeCheck className="size-8 text-[#45B442]" />
            </span>
            <span className="size-20 bg-gray-200 rounded-xl flex items-center justify-center">
              <HiBadgeCheck className="size-8 text-[#45B442]" />
            </span>
            <span className="size-20 bg-gray-200 rounded-xl flex items-center justify-center">
              <HiBadgeCheck className="size-8 text-[#45B442]" />
            </span>
            <span className="size-20 bg-gray-200 rounded-xl flex items-center justify-center"></span>
            <span className="size-20 bg-gray-200 rounded-xl flex items-center justify-center"></span>
            <span className="size-20 bg-gray-200 rounded-xl flex items-center justify-center">
              <IoGiftOutline className="size-8 text-gray-500" />
            </span>
          </div>
        </div>
        <div className="h-24 rounded-2xl py-4 px-5 bg-gray-100 flex gap-6 items-center justify-between">
          <div className="w-full">
            <h3 className="text-gray-500 text-sm flex gap-2">
              <span className="text-gray-600 font-bold">3</span>
              cortes restantes
            </h3>
            <div className="flex items-center gap-3">
              <div className="h-2 bg-gray-300 rounded-full flex-1">
                <span></span>
              </div>
              <span className="text-gray-500 text-xs">7 de 10</span>
            </div>
          </div>
          <div className="w-16 h-14 rounded-full bg-gray-200 flex justify-center items-center">
            <img src={pinGift} alt="imagem icon gift" width={32} height={32} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
