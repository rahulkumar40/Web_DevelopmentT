import React from "react";

function FotterLinkCard({datas}) {
  return (
    <div className="text-white flex">
      {datas.map((data) => {
        <div key={data.id}>
          <p>{data.title}</p>
        </div>;
      })}
    </div>
  );
}

export default FotterLinkCard;
