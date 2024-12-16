import React from "react";
import Modal from "../UI/Modal";

const MealDetail = ({ onClose, detail }) => {
  return (
    <Modal onClose={onClose}>
      <div className="rounded-lg overflow-hidden shadow-lg bg-white p-4">
        <div className="flex justify-center">
          <img
            alt={detail.name}
            src={detail.src}
            className="w-full h-48 object-cover rounded-t-lg sm:h-56 md:h-64 lg:h-72 xl:h-80"
          />
        </div>

        <div className="p-4">
          <h1 className="text-xl font-semibold text-gray-800 truncate">
            {detail.name}
          </h1>
          <h2 className="text-gray-600 text-sm mt-2">{detail.des}</h2>
          <h3 className="text-lg font-bold text-green-600 mt-3">
            {detail.price}
          </h3>
        </div>

        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="font-inherit cursor-pointer bg-[#8a2b06] border border-[#8a2b06] text-white py-1 px-8 rounded-full font-bold hover:bg-[#641e03] active:bg-[#641e03] hover:border-[#641e03] active:border-[#641e03]"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default MealDetail;
