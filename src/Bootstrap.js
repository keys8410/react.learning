import React from 'react';
import Card from 'react-bootstrap/Card';

const Bootstrap = () => {
  /* return (
    <div className="card bg-dark text-white m-5">
      <div className="card-header">Notebook</div>
      <div className="card-body">
        <h5 className="card-title">R$ 2500,00</h5>
        <p className="card-text">Esse é um notebook de...</p>
      </div>
    </div>
  );*/

  return (
    <Card bg="dark" text="white" style={{ maxWidth: '17rem' }}>
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>R$ 2500,00</Card.Title>
        <Card.Text>Esse é um notebook de...</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Bootstrap;
