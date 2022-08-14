import React from "react";

import { Container, ChartSection } from "./styles";

const PieChart: React.FC = () => {
  return (
    <Container>
      <ChartSection  percentage={20} width={"22px"} color={"red"} size={"150px"}/>
    </Container>
  );
};

export default PieChart;
