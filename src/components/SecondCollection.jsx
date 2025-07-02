import collection from './Collection.json';
import { SecsingleCard } from './SingleCard';
export default function SecondCollection() {
  return (
    <div>
      <ul className="flex md:justify-between justify-center items-center px-7 font-bold w-full border-b-2 border-b-gray-200">
        <li>COLLECTION</li>
        <ol className="md:flex hidden justify-around items-center text-center text-xl w-[50%] gap-3">
          <li className=" text-center p-[10px] border-b-2 border-transparent hover:border-b-red-500 cursor-pointer transition duration-400">
            Men
          </li>
          <li className="text-center p-[10px] border-b-2 border-transparent hover:border-b-red-500 cursor-pointer transition duration-400">
            Women
          </li>
          <li className="text-center p-[10px] border-b-2 border-transparent hover:border-b-red-500 cursor-pointer transition duration-400">
            Kids
          </li>
          <li className="text-center p-[10px] border-b-2 border-transparent hover:border-b-red-500 cursor-pointer transition duration-400">
            Accessories
          </li>
        </ol>
      </ul>
      <ul className="bg-red-100 flex justify-center items-center mt-8 gap-3 p-3">
        {collection[1].map((item) => (
          <SecsingleCard item={item} />
        ))}
      </ul>
    </div>
  );
}
