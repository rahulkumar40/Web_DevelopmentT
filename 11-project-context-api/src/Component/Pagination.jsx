import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Pagination() {
  const {page,hendlePageChange,totalPages} = useContext(AppContext);
  return (
    <div className="bg-gray-900 text-white flex justify-between px-4 items-center fixed bottom-0 w-11/12 max-w-[1190px] mx-auto left-5">
      { page>1 &&
              <button className="px-6 rounded-md border-2 py-2 my-2" onClick={()=>hendlePageChange(page-1)}>Previ</button>
        }
      {
        page < totalPages && 
        <button className="px-6 rounded-md border-2 py-2 my-2" onClick={ ()=>hendlePageChange(page+1)}>
          Next
        </button>
        
      }
      <div>
        <span>{page}</span> / <span>{totalPages}</span>
      </div>
    </div>
  );
}

export default Pagination;
