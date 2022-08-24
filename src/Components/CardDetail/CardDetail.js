import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import "./Card-Detail.css";

const CardDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  console.log(service);
  const [count, setCount] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setService(data));
  }, [serviceId]);

  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCount(data.quantity));
  }, [serviceId]);

  const handleSingleUniteDelevery = (event) => {
    event.preventDefault();

    const updatedQuentity = count - 1;
    setCount(updatedQuentity);
    if (count < 0 || updatedQuentity < 0) {
      alert("You mighthave mistaken");
      return;
    } else {
      const updatedInfo = { updatedQuentity };
      //send updated data in backend
      const url = `http://localhost:5000/service/${serviceId}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedInfo),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("success", updatedInfo);
          console.log(service);

          alert("Information updated successfully");
        });
    }
  };

  const handleUpdateDeleveredQuentity = (event) => {
    event.preventDefault();
    const inpvalue = parseInt(event.target.delevered.value);
    console.log(typeof inpvalue);
    const updatedQuentity = count - inpvalue;
    setCount(updatedQuentity);

    if (count < inpvalue || updatedQuentity < 0) {
      alert("You mighthave mistaken");
      return;
    } else {
      const updatedInfo = { updatedQuentity };
      //send updated data in backend
      const url = `http://localhost:5000/service/${serviceId}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedInfo),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("success", updatedInfo);
          console.log(service);
          alert("Informatin updated successfully");
          console.log(service);
          event.target.reset();
        });
    }
  };

  const handleResockItemQuentity = (event) => {
    event.preventDefault();
    const inpvalue = parseInt(event.target.restocked.value);
    const updatedQuentity = count + inpvalue;
    setCount(updatedQuentity);

    console.log(typeof inpvalue);

    if (count < event.target.restocked.value || updatedQuentity < 0) {
      alert("You mighthave mistaken");
      return;
    } else {
      const updatedInfo = { updatedQuentity };
      //send updated data in backend
      const url = `https://desolate-reef-26430.herokuapp.com/service/${serviceId}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedInfo),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("success", updatedInfo);
          console.log(service);
          alert("Informatin updated successfully");
          console.log(service);
          event.target.reset();
        });
    }
  };
  return (
    <div className="">
      <h1 className="text-center pt-4 mt-4  text-primary">{service.title}</h1>
      <Card className="mx-auto m-5 card" style={{ width: "28rem" }}>
        <Card.Img
          className="border rounded mx-auto  p-1 card-img"
          variant="top"
          src={service.img}
        />
        <Card.Body>
          <Card.Title className="title">{service.name}</Card.Title>
          <Card.Text className="text">{service.description}</Card.Text>
          <Card.Text className="text">Price: {service.price}</Card.Text>
          <Card.Text className="text quantity">Quantity: {count}</Card.Text>
          <Card.Text className="text">Supplier: {service.supplier}</Card.Text>
          <Card.Text className="text">Supplyer Id.: {service._id}</Card.Text>
        </Card.Body>
      </Card>

      <Form onSubmit={handleUpdateDeleveredQuentity} className="form-body mx-5">
        {/* single unite delevery operation */}
        <p>Click here for single unite delevery</p>
        <Button
          onClick={handleSingleUniteDelevery}
          className="mb-3 "
          variant="primary"
          type="submit"
        >
          <span className="mx-1">Delivered</span>
        </Button>
        <hr />

        {/* <ToastContainer /> */}
      </Form>

      {/* Re Stock Operations */}

      <div className="text-center">
        <Form
          onSubmit={handleResockItemQuentity}
          className="form-body mx-5 my-5"
        >
          <h2> Restock the items</h2>
          {/* Multiple unite delevery operation */}
          <Form.Group className="mb-3 mx-5 " controlId="formBasicEmail">
            <Form.Control
              className="mx-auto align-item-center justify-content-center update-deliver w-50"
              name="restocked"
              type="number"
              placeholder="How many delivered..!"
              required
            />
            <Form.Text className="text-muted">
              Make sure the gear is stocked.
            </Form.Text>
          </Form.Group>

          <Button className="mb-3 " variant="primary" type="submit">
            <i className="fa-solid fa-cash-register"></i>
            <span className="mx-1">Restock</span>
          </Button>
        </Form>
      </div>

      {/* <div className="text-center">
                <Link to="/mnagestock">
                    <Button className="mb-5">Manage Stock</Button>
                </Link>
            </div> */}
    </div>
  );
};

export default CardDetail;
