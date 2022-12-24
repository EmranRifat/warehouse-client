import React, { useState } from "react";
import "./InventoryItem.css";

const InventoryItem = (props) => {
  const { name, img, _id, price, description, quantity, supplier } = props.item;
  const [items, setItems] = useState([]);

  const handleNavigate = () => {
    alert.success = "Confirm";
  };

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure want to remove this..!");
    if (proceed) {
      const url = `https://ware-house-server.vercel.app/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = items.filter((item) => item._id !== id);
            setItems(remaining);
          }
        });
    }
  };
  return (
    <div className=" col-sm-12 col-lg-4 col-md-6">
      <div className="card " style={{ width: "18rem" }}>
        <img
          className="w-100"
          style={{ height: "12rem" }}
          src={img}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <small className="card-text">{description}</small>
          <p>Id: {_id}</p>
          <p className="fw-bold" d>
            Price: {price}
          </p>
          {/* <p>Supplier: {supplier}</p> */}
          <p>Quantity: {quantity}</p>

          <button onClick={() => handleDelete(_id)} className="delever">
            Delete
          </button>
          <button className="delever " onClick={handleNavigate()}>
            {" "}
            Buy now
          </button>

          {/* <Link onClick={() => naviagteServiceDetail(id)} href="" className="btn btn-primary book-btn">Book Now</Link>  */}
        </div>
      </div>
    </div>
  );
};

export default InventoryItem;
