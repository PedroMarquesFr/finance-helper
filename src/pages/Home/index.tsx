import React from "react";
import PieChart from "../PieChart";
import { Container, Title } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Financial Administration</Title>
      <PieChart/>
    </Container>
  );
};

export default Home;
