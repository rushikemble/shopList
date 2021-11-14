import React, { useState } from "react";
import { useSelector } from "react-redux";
import Nav from "./Nav";
import ShopCard from "./ShopCard";

import "./Component css/homePage.css";
import FilterBar from "./FilterBar";
import EditModal from "./EditModal";

const HomePage = () => {
  const shops = useSelector((state) => state?.shopReducer);

  const [filterData, setfilterData] = useState(shops);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [modalId, setModalId] = useState("");

  const shopsSet = (shopItems, name) => {
    const areaArr = [];
    for (let i = 0; i < shopItems.length; i++) {
      areaArr.push(shopItems[i].data[name]);
    }
    console.log(areaArr);
    return areaArr;
  };

  const areaDataForDropdown = () => {
    const areaSet = shopsSet(shops, "area");
    return [...new Set(areaSet)];
  };
  const categoryDataForDropdown = () => {
    const categorySet = shopsSet(shops, "category");

    return [...new Set(categorySet)];
  };

  const filterByArea = (areaName) => {
    let filterdArea = shops.filter((element) => {
      if (areaName === "Select") {
        return element;
      } else if (element.data.area === areaName) {
        return element;
      }
    });

    setfilterData(filterdArea);
  };

  const filterbycategory = (categoryName) => {
    let filterdCategory = shops.filter((element) => {
      if (categoryName === "Select") {
        return element;
      } else if (element.data.category === categoryName) {
        return element;
      }
    });

    setfilterData(filterdCategory);
  };

  const resetAllData = (resetClicked) => {
    if (resetClicked) {
      setfilterData(shops);
    } else {
      return;
    }
  };

  const filterByStatus = (status) => {
    let filterStatus = shops.filter((element) => {
      if (status === "Select") {
        return element;
      } else if (element.status === status) {
        return element;
      }
    });

    setfilterData(filterStatus);
  };

  return (
    <div className="homepage-container">
      <Nav />
      <div className="header">
        <div className="header-container">
          <div className="content-flx-center">
            <div className="joblist-label is-purple">Shop List Board</div>
            <h1 className="heading-h1">
              Find The <span className="yellow-underline">Most Famous</span>{" "}
              Shops Near You
            </h1>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="homepage-list-container">
          <div className="filter-container">
            <FilterBar
              filterByArea={filterByArea}
              areaData={areaDataForDropdown()}
              categoryData={categoryDataForDropdown()}
              filterbycategory={filterbycategory}
              resetAllData={resetAllData}
              filterByStatus={filterByStatus}
            />
          </div>
          <div className="shops-list-wrapper">
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
          <EditModal
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            modalId={modalId}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
