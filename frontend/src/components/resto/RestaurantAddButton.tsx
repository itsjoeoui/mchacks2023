import { useState } from "react";
import { FiPlus, FiCheck } from "react-icons/fi";

type RestaurantAddButtonProps = {
  id: number;
  title: string;
  addToOrder: (title: string, id: number) => void;
};

export const RestaurantAddButton = ({
  id,
  title,
  addToOrder,
}: RestaurantAddButtonProps) => {
  const [checked, setChecked] = useState(false);

  const handleButtonClick = () => {
    setChecked(true);
    addToOrder(title, id);
    setTimeout(() => {
      setChecked(false);
    }, 1000);
  };

  return !checked ? (
    <FiPlus
      size={30}
      className="float-right mt-4 hover:bg-gray-200 rounded-md transition duration-150 p-1 cursor-pointer"
      onClick={handleButtonClick}
    />
  ) : (
    <FiCheck
      size={30}
      className="float-right mt-4 text-green-500 hover:bg-gray-200 rounded-md transition duration-150 p-1 cursor-pointer"
    />
  );
};
