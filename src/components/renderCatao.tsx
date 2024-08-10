import { HiBadgeCheck } from "react-icons/hi";
import { IoGiftOutline } from "react-icons/io5";

export function RenderCartao() {
  return (
    <div className="rounded-2xl px-5 pt-6 pb-5 bg-gray-100 flex flex-col gap-5">
      <div className="flex gap-4 justify-between">
        <div className="space-y-1 w-52">
          <h3 className="text-gray-500 text-lg uppercase">Cartão Fidelidade</h3>
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
  );
}
