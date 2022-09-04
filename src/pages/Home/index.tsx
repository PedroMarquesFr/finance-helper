import React, { useState } from "react";
import { Pie, PieChart } from "recharts";
import RenderActivePieShape from "../../components/RenderActivePieShape";
// import { ChartCoordinate } from "recharts/types/util/types";
import InfoSection from "../InfoSection";
import { Container, Title } from "./styles";

const Home: React.FC = () => {
  const data = [
    { name: "inv1", value: 400 },
    { name: "inv2", value: 300 },
    { name: "inv3", value: 300 },
    { name: "inv4", value: 200 },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  return (
    <Container>
      <Title>Financial Administration</Title>
      <InfoSection
        title={"Divisão por porcentagem"}
        lastUpdate={"Último update 30, jan 2022"}
      >
        <PieChart width={560} height={300}>
          <Pie
            activeIndex={activeIndex}
            activeShape={RenderActivePieShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            onClick={onPieEnter}
          />
        </PieChart>
      </InfoSection>
      <InfoSection
        title={"Divisão por porcentagem"}
        lastUpdate={"Último update 30, jan 2022"}
      >
        <PieChart width={560} height={300}>
          <Pie
            activeIndex={activeIndex}
            activeShape={RenderActivePieShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      </InfoSection>
    </Container>
  );
};

export default Home;
