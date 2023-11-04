import React from "react";
import product from "./Product";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";

const firstName = "John";

function App() {
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Image imageUrl={product.imageUrl} />
        <Card.Body>
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
        </Card.Body>
      </Card>
      <p>Hello, {firstName ? firstName : "there"}!</p>
      {firstName && <Image imageUrl={product.imageUrl} />}
    </Container>
  );
}

export default App;
