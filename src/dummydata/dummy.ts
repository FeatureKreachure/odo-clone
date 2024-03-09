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

const generateDummyData = (): BlockProps[] => {
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
    return titles[Math.floor(Math.random() * titles.length)];
  };

  const getRandomDescription = () => {
    const descriptions = [
      "Lorem ipsum",
      "Dolor sit",
      "Amet consectetur",
      "Adipiscing elit",
    ];
    return descriptions[Math.floor(Math.random() * descriptions.length)];
  };

  const getRandomPrice = (knockoff: number) => {
    const discountPercentage = Math.floor(Math.random() * 41) + 10; // Between 10% and 50%
    const price = knockoff - (knockoff * discountPercentage) / 100;
    return { price, discount: discountPercentage };
  };

  const getRandomKnockoff = () => {
    return Math.floor(Math.random() * (999 - 99 + 1)) + 99; // Between 99 and 999
  };

  const dummyData: BlockProps[] = [];

  for (let i = 0; i < 4; i++) {
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
