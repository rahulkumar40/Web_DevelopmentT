import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Cards from "../Component/Cards";
function Home() {
  const {
    title,
    setTitle,
    searchValue,
    setSearchVal,
    newData,
    loading,
    setLoading,
    fetchData,
    errMsg,
  } = useContext(AppContext);
  return (
    <div className="h-full w-full">
      <div className="mx-auto w-11/12 max-w-[1150px] h-full">
        {!errMsg.status === 'ok' ? (
          <div className="flex justify-center items-center flex-col h-[89vh]">
            <h2 className="text-2xl">{errMsg.status}</h2>
            <p>{errMsg.code}</p>
            <p className="text-justify">{errMsg.message}</p>
          </div>
        ) : (
          <div>
            {" "}
            {loading ? (
              <div className="flex justify-center items-center h-[90vh] text center text-2xl">
                Data Loading
              </div>
            ) : (
              <Cards newData={newData}></Cards>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
