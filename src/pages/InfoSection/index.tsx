import React from "react";
// import { ResponsiveContainer } from "recharts";

import { Section, TitleSec, Text } from "./styles";

type InfoSectionProps = {
  title: string;
  lastUpdate: string;
  children: JSX.Element[] | JSX.Element; //ReactElement<any, string | JSXElementConstructor<any>>;
};

const InfoSection: React.FC<InfoSectionProps> = (props) => {
  return (
    <Section>
      <TitleSec>{props.title}</TitleSec>
      <Text>{props.lastUpdate}</Text>
      {props.children}
    </Section>
  );
};

export default InfoSection;
