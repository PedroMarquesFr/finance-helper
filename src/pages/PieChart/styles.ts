import styled from "styled-components";
interface ChartProps {
  percentage: number;
  width: string;
  color: string;
  size: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChartSection = styled.section`
  --p: ${(props: ChartProps) => props.percentage}; //20
  --b: ${(props: ChartProps) => props.width}; //22px;
  --c: ${(props: ChartProps) => props.color}; //darkred;
  --w: ${(props: ChartProps) => props.size}; //150px;
  border-radius: 50%;
  width: var(--w);
  aspect-ratio: 1;
  position: relative;
  display: inline-grid;
  margin: 5px;
  place-content: center;
  font-size: 25px;
  font-weight: bold;
  font-family: sans-serif;

  background-color: red;

  &:before,
  &:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    background-color: green;
  }
  &:before {
    inset: 0;
    background: radial-gradient(farthest-side, var(--c) 98%, #0000) top/var(--b)
        var(--b) no-repeat,
      conic-gradient(var(--c) calc(var(--p) * 1%), #0000 0);
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(99% - var(--b)),
      #000 calc(100% - var(--b))
    );
    mask: radial-gradient(
      farthest-side,
      #0000 calc(99% - var(--b)),
      #000 calc(100% - var(--b))
    );
  }
  &:after {
    inset: calc(50% - var(--b) / 2);
    background: var(--c);
    transform: rotate(calc(var(--p) * 3.6deg))
      translateY(calc(50% - var(--w) / 2));
  }
  .animate {
    animation: p 1s 0.5s both;
  }
  .no-round:before {
    background-size: 0 0, auto;
  }
  .no-round:after {
    content: none;
  }
  @keyframes p {
    from {
      --p: 0;
    }
  }
`;
