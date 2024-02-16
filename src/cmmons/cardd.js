import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Calendar from "react-calendar";

function BasicExample() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [sousServices, setSousServices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNext, setIsNext] = useState(false);

  const handleNext = () => {
    setIsNext(true);
    setSousServices([]);
  };

  const handleOrderNow = async (serviceId) => {
    setShowModal(true);
    setIsLoading(true);

    try {
      if (sousServices.length > 0) {
        setSousServices([]);
      } else {
        const response = await axios.post(
          "http://localhost:3900/api/GetAllSingleSousServiceByService",
          {
            IdService: serviceId,
          }
        );

        setSousServices(response.data.results);
        setIsLoading(false);
      }
    } catch (err) {
      setError(err);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsNext(false);
    setSousServices([]);
    setSelectedService(null);
  };

  const handleSelectService = (sousService) => {
    setSelectedService(sousService);
  };

  useEffect(() => {
    axios
      .post("http://localhost:3900/api/GetAllServices")
      .then((res) => {
        setServices(res.data.results);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {services.map((service) => (
        <Card key={service._id} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={`http://localhost:3900/Public/uploads/${service.coverURI}`}
            alt={service.title}
            className="w-100 h-64 border border-black"
          />
          <Card.Body>
            <Card.Title className="p-1 text-center border border-zinc-600 rounded cursor-pointer bg-blue-200">
              {service.nom_FR}
            </Card.Title>
            <Card.Text className="p-2">{service.Description}</Card.Text>
            <div className="d-flex justify-content-center">
              <Button
                variant="info"
                onClick={() => handleOrderNow(service._id)}
              >
               ! اطلب الان
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Pricing Details</Modal.Title>
        </Modal.Header>
        {isLoading ? (
          <div className="d-flex align-items-center justify-content-center vh-100">
            <div class="spinner-border text-primary   " role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <Modal.Body className="border border-black  m-2 cursor-pointer">
              {sousServices.map((sousService) => (
                <div
                  key={sousService._id}
                  className={`mb-2 p-2 border ${
                    selectedService === sousService
                      ? "btn btn-info text-black  "
                      : ""
                  }`}
                  onClick={() => handleSelectService(sousService)}
                >
                  <p className=""> {sousService.nom_FR}</p>
                  <p class="text-center p-4 text-blue-600">
                    Prix: {sousService.prix}
                  </p>
                </div>
              ))}
              {isNext ? (
                <div className="">
                  {" "}
                  <div className=" d-flex align-items-center justify-content-center">
                    <label className=" " for="meeting-time">
                      Choose a time for your appointment:
                    </label>
                    <input
                      className="text-center"
                      type="datetime-local"
                      id="meeting-time"
                      name="meeting-time"
                      value="2018-06-12T19:30"
                      min="2018-06-07T00:00"
                      max="2018-06-14T00:00"
                    />
                  </div>
                  <div class="input-group mb-2 p-4">
                    <div class="mt-2 input-group-prepend">
                      <span class="m-2 p-2" id="inputGroup-sizing-default">
                        Ville
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                  <div class="input-group mb-2 p-4">
                    <div class="mt-2 input-group-prepend">
                      <span class=" m-2 p-2  " id="inputGroup-sizing-default">
                        City
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                  <div class="input-group mb-2 p-4">
                    <div class="mt-2 input-group-prepend">
                      <span class="m-2 p-2" id="inputGroup-sizing-default">
                        ZIP
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                </div>
              ) : (
                <></>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="btn btn-primary text-black"
                onClick={handleCloseModal}
              >
                Close
              </Button>
              <Button
                onClick={handleNext}
                variant="btn btn-primary text-black cursor-pointer "
                disabled={!selectedService}
              >
                Next
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
}

export default BasicExample;
