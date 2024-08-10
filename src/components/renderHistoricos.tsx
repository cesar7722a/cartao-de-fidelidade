import { BsPatchCheck } from "react-icons/bs";

export function RenderHistorico() {
  return (
    <div className="flex flex-col gap-4 px-5 pb-5 pt-6 bg-gray-100 rounded-2xl">
      <div className="flex justify-between">
        <h2 className="text-gray-500 uppercase font-bold text-sm">Histórico</h2>
        <span className="text-gray-500 text-xs">7 cortes</span>
      </div>
      <div className="h-px bg-gray-300" />

      <ul>
        <li className="flex justify-between items-center py-2">
          <div className="space-y-2">
            <h2 className="text-gray-600 text-sm">29/04/2024</h2>
            <h3 className="text-gray-500 text-xs">18:30</h3>
          </div>
          <div className="w-8 h-8 p-1 rounded-full bg-green-100 flex items-center justify-center">
            <BsPatchCheck className="size-5 text-green-600" />
          </div>
        </li>

        <li className="flex justify-between items-center py-2">
          <div className="space-y-2">
            <h2 className="text-gray-600 text-sm">29/04/2024</h2>
            <h3 className="text-gray-500 text-xs">18:30</h3>
          </div>
          <div className="w-8 h-8 p-1 rounded-full bg-green-100 flex items-center justify-center">
            <BsPatchCheck className="size-5 text-green-600" />
          </div>
        </li>

        <li className="flex justify-between items-center py-2">
          <div className="space-y-2">
            <h2 className="text-gray-600 text-sm">29/04/2024</h2>
            <h3 className="text-gray-500 text-xs">18:30</h3>
          </div>
          <div className="w-8 h-8 p-1 rounded-full bg-green-100 flex items-center justify-center">
            <BsPatchCheck className="size-5 text-green-600" />
          </div>
        </li>

        <li className="flex justify-between items-center py-2">
          <div className="space-y-2">
            <h2 className="text-gray-600 text-sm">29/04/2024</h2>
            <h3 className="text-gray-500 text-xs">18:30</h3>
          </div>
          <div className="w-8 h-8 p-1 rounded-full bg-green-100 flex items-center justify-center">
            <BsPatchCheck className="size-5 text-green-600" />
          </div>
        </li>

        <li className="flex justify-between items-center py-2">
          <div className="space-y-2">
            <h2 className="text-gray-600 text-sm">29/04/2024</h2>
            <h3 className="text-gray-500 text-xs">18:30</h3>
          </div>
          <div className="w-8 h-8 p-1 rounded-full bg-green-100 flex items-center justify-center">
            <BsPatchCheck className="size-5 text-green-600" />
          </div>
        </li>

        <li className="flex justify-between items-center py-2">
          <div className="space-y-2">
            <h2 className="text-gray-600 text-sm">29/04/2024</h2>
            <h3 className="text-gray-500 text-xs">18:30</h3>
          </div>
          <div className="w-8 h-8 p-1 rounded-full bg-green-100 flex items-center justify-center">
            <BsPatchCheck className="size-5 text-green-600" />
          </div>
        </li>
      </ul>
    </div>
  );
}
