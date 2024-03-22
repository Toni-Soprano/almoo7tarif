import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col, Spin, Empty } from 'antd';

const { Meta } = Card;

function Reservation() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const idUser = localStorage.getItem('id');

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.post('http://localhost:3900/api/GetReservationByIdUser', {
          idUser: idUser
        });
        setReservations(response.data.reservations);
      } catch (error) {
        console.error('Error fetching reservations:', error.message);
      }
      setLoading(false);
    };

    fetchReservations();
  }, [idUser]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Your Reservations</h1>
      {loading ? (
        <Spin size="large" />
      ) : (
        <Row gutter={[16, 16]}>
          {reservations && reservations.length > 0 ? (
            reservations.map(reservation => (
              <Col key={reservation._id} xs={24} sm={12} md={8} lg={6}>
                <Card hoverable>
                  <Meta
                    title={`Reservation ID: ${reservation._id}`}
                    description={
                      <>
                        <p>Service: {reservation.service}</p>
                        <p>Date: {reservation.date}</p>
                        {/* Add more details as needed */}
                      </>
                    }
                  />
                </Card>
              </Col>
            ))
          ) : (
            <Empty description="No reservations found" />
          )}
        </Row>
      )}
    </div>
  );
}

export default Reservation;
