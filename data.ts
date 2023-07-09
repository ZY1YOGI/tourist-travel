interface ICard {
  id: number;
  img: string;
  title: string;
  region: string;
  rate: string;
  review: string;
}

export const cardData: ICard[] = [
  {
    id: 1,
    img: "/img-1.svg",
    title: "Alexandria",
    region: "Egypt, Alexandria",
    rate: "4.3",
    review: "2.8k",
  },
  {
    id: 2,
    img: "/img-2.svg",
    title: "Cairo",
    region: "Egypt, cairo",
    rate: "4.3",
    review: "2.8k",
  },
  {
    id: 3,
    img: "/img-3.svg",
    title: "Luxor",
    region: "Egypt, luxor",
    rate: "4.3",
    review: "2.8k",
  },
  {
    id: 4,
    img: "/img-3.svg",
    title: "Luxor",
    region: "Egypt, luxor",
    rate: "4.3",
    review: "2.8k",
  },
];
