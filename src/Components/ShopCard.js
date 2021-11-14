import React from "react";
import "./Component css/shopCard.css";
import Delete from "../Icons/delete.png";
import Edit from "../Icons/edit.png";
import { useDispatch } from "react-redux";
import { deleteShop, editShop } from "../Actions/index";

const ShopCard = (props) => {
  const { shopName, category, area, openingDate, closingDate } =
    props.elem.data;

  const dispatch = useDispatch();

  const deleteClicked = () => {
    {
      dispatch(deleteShop(props.elem.id));
      window.location.reload();
    }
  };

  const editClicked = () => {
    {
      props.setModalIsOpen(true);
      props.setModalId(props.elem.id);
      dispatch(editShop(props.elem.id));
    }
  };
  return (
    <div className="job-listing-w">
      <div className="joblist-link w-inline-block">
        <div key={props.elem.id} className="joblist-info-flx-w">
          <div className="joblist-main-info w-clearfix">
            <div className="shoplist-name">{shopName}</div>
            <div className="shoplist-main-buttons-wrapper">
              <button onClick={deleteClicked}>
                <img src={Delete} alt="delete-icon" />
              </button>
              <button onClick={editClicked}>
                <img src={Edit} alt="delete-icon" />
              </button>
            </div>
          </div>
          <div className="joblist-senc-info">
            <div className="joblist-general-info-w">
              <div className="joblist-info-txt is-bold">{category}</div>
              <div className="joblist-info-txt">&nbsp; • &nbsp; </div>
              <div className="joblist-info-txt ft-by-area">{area}</div>
            </div>
            <div className="publishing-date-w">
              <div
                className="joblist-info-txt is-bold"
                style={{ marginRight: "10px" }}
              >
                {props.status}
              </div>
              <div className="shoplist-publish-date">
                {openingDate} - {closingDate}
              </div>
              <div className="utlity-date"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
