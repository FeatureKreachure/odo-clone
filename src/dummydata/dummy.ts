import { v4 as uuidv4 } from "uuid";

interface BlockProps {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  price: number;
  knockoff: number;
  discount: number;
}

const generateDummyData = (index: number): BlockProps[] => {
  const images = [
    "/daily/black.svg",
    "/daily/blue.svg",
    "/daily/green.svg",
    "/daily/pink.svg",
    "/daily/purple.svg",
    "/daily/yellow.svg",
  ];

  const getRandomImage = () => {
    return images[Math.floor(Math.random() * images.length)];
  };

  const getRandomTitle = () => {
    const titles = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur"];
    return titles[Math.floor(Math.random() * titles.length)].toUpperCase();
  };

  const capitalizeFirstLetter = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const getRandomDescription = () => {
    const descriptions = [
      "Lorem ipsum",
      "Dolor sit",
      "Amet consectetur",
      "Adipiscing elit",
    ];
    const randomDescription =
      descriptions[Math.floor(Math.random() * descriptions.length)];

    return randomDescription
      .split(" ")
      .map((word) => capitalizeFirstLetter(word))
      .join(" ");
  };

  const getRandomPrice = (knockoff: number) => {
    const discountPercentage = Math.floor(Math.random() * 41) + 10; // Between 10% and 50%
    const price = knockoff - (knockoff * discountPercentage) / 100;
    return {
      price: Math.round(price), // Round to remove decimals
      discount: Math.round(discountPercentage), // Round to remove decimals
    };
  };

  const getRandomKnockoff = () => {
    return Math.floor(Math.random() * (999 - 99 + 1)) + 99; // Between 99 and 999
  };

  const dummyData: BlockProps[] = [];

  for (let i = 0; i < index; i++) {
    const knockoff = getRandomKnockoff();
    const { price, discount } = getRandomPrice(knockoff);

    dummyData.push({
      id: uuidv4(),
      imageSrc: getRandomImage(),
      title: getRandomTitle(),
      description: getRandomDescription(),
      price: price,
      knockoff: knockoff,
      discount: discount,
    });
  }

  return dummyData;
};

export default generateDummyData;
