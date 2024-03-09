import generateDummyData from "./dummy";
import { BlockProps } from "@/components/Block";

interface DropProps {
  dummyData: BlockProps[];
  color: string;
}

const generateRandomDropProps = (): DropProps => {
  const randomIndex = Math.floor(Math.random() * (12 - 5 + 1)) + 5;
  const randomColor = getRandomColor();

  return {
    dummyData: generateDummyData(randomIndex),
    color: randomColor,
  };
};

const getRandomColor = (): string => {
  const colors = ["#001489", "#ec429a", "#ed1b24", "#000000"];

  return colors[Math.floor(Math.random() * colors.length)];
};

export default generateRandomDropProps;
