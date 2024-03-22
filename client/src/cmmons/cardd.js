import React, { useEffect, useState } from "react";
import { Card, Button, Modal, Input, DatePicker, Rate } from "antd"; // Import Rate component from Ant Design
import axios from "axios";

const { Meta } = Card;

const BasicExample = () => {
  const [services, setServices] = useState([]);
  const [sousServices, setSousServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
      console.error("Error fetching sous services:", err);
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
        console.error("Error fetching services:", err);
      });
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          maxWidth: "960px",
        }}
      >
        {services.map((service) => (
          <div key={service._id} style={{ width: "48%", marginBottom: "20px" }}>
            <Card
              hoverable
              style={{ border: "1px solid black" }} // Add border style here
            >
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1, paddingRight: "20px" }}>
                  <img
                    className="border  "
                    alt={service.title}
                    src={`http://localhost:3900/Public/uploads/${service.coverURI}`}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div
                  style={{
                    flex: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    
                    <Meta
                      title={
                        <div style={{ textAlign: "center" }}>
                          {service.nom_FR}
                        </div>
                      }
                      description={
                        <div style={{ textAlign: "center" }}>
                          {service.Description}
                        </div>
                        
                      }
                    />
                    <div style={{ textAlign: "center" }}>
                      <Rate allowHalf defaultValue={3.5} style={{ display: "inline-block" }} />{" "}
                    </div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <Button
                      type="primary"
                      style={{ backgroundColor: "red" }}
                      className="m-2"
                      onClick={() => handleOrderNow(service._id)}
                    >
                      اطلب الآن
                    </Button>
                    
                    {/* Add Rate component */}
                  </div>
                  
                </div>
                
              </div>
            </Card>
          </div>
        ))}
      </div>
      <Modal
        visible={showModal}
        onCancel={handleCloseModal}
        footer={[
          <Button key="cancel" onClick={handleCloseModal}>
            Close
          </Button>,
          <Button
            key="next"
            type="primary"
            danger
            disabled={!selectedService}
            onClick={handleNext}
          >
            Next
          </Button>,
        ]}
      >
        {isLoading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "200px",
            }}
          >
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {sousServices.map((sousService) => (
                <Button
                  key={sousService._id}
                  type={selectedService === sousService ? "primary" : "default"}
                  onClick={() => handleSelectService(sousService)}
                >
                  {sousService.nom_FR} - Prix: {sousService.prix}
                </Button>
              ))}
            </div>
            {isNext && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <DatePicker style={{ width: "100%" }} />
                <Input placeholder="Ville" />
                <Input placeholder="City" />
                <Input placeholder="ZIP" />
              </div>
            )}
          </>
        )}
      </Modal>
    </div>
  );
};

export default BasicExample;
