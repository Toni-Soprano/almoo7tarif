import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import axios from "axios";
import { useEffect, useState } from "react";

function BasicExample() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

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
              <Button variant="info">اطلب الان!</Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default BasicExample;
