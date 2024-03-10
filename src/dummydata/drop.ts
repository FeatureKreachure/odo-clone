import generateDummyData from "./dummy";
import { BlockProps } from "@/components/Block";
import { DropProps } from "@/components/Drop";

const generateRandomDropProps = (): DropProps => {
  const randomIndex = Math.floor(Math.random() * (12 - 5 + 1)) + 5;
  const randomColor = getRandomColor();
  const randomHeading = generateHeading();

  return {
    dummyData: generateDummyData(randomIndex),
    color: randomColor,
    heading: randomHeading,
  };
};

const getRandomColor = (): string => {
  const colors = ["#001489", "#ec429a", "#ed1b24", "#000000"];

  return colors[Math.floor(Math.random() * colors.length)];
};

function generateHeading(): string {
  const words = [
    "Lorem",
    "Ipsum",
    "Dolor",
    "Sit",
    "Amet",
    "Consectetur",
    "Adipiscing",
    "Elit",
  ];

  const numWords = Math.floor(Math.random() * 5) + 1;
  let heading = "";

  for (let i = 0; i < numWords; i++) {
    const wordIndex = Math.floor(Math.random() * words.length);
    const word = words[wordIndex];
    heading += word.charAt(0).toUpperCase() + word.slice(1) + " ";
  }

  return heading.trim();
}

// Example usage:
const randomHeading = generateHeading();
console.log(randomHeading); // Output will be a random heading of 1-5 Latin-style words with each word capitalized

export default generateRandomDropProps;
