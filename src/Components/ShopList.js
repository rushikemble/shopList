import React from "react";
import ShopCard from "./ShopCard";

function ShopList({ setModalIsOpen, setModalId, filterData }) {
  return (
    <>
      <div>
        {filterData.map((elem) => {
          return (
            <ShopCard
              elem={elem}
              key={elem.id}
              status={elem.status}
              setModalIsOpen={setModalIsOpen}
              setModalId={setModalId}
            />
          );
        })}
      </div>
    </>
  );
}

export default ShopList;
