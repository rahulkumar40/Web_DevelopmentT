import React, { useContext } from "react";
import { AppContextA } from "../Context/AppContextA";

function Paggination() {
  const { page, totalPage, handlePageChange } = useContext(AppContextA);
  return (
    <div className="w-full h-full sticky bottom-0">
      <div className="w-11/12 w-max-[1160px] mx-auto  bg-blue-600 text-black flex justify-between px-4 py-4">
        {page > 1 && <p onClick={() => handlePageChange(page - 1)}>Prev</p>}
        {page < totalPage && (
          <div className="text-red-600 bg-green-700">
            <p onClick={() => handlePageChange(page + 1)}>Next</p>
          </div>
        )}
        <p>
          {page} / {totalPage || "Total Page"}
        </p>
      </div>
    </div>
  );
}

export default Paggination;
