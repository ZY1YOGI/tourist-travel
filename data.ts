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
    img: "/places/alx.jpg",
    title: "Alexandria",
    region: "Egypt, Alexandria",
    rate: "4.3",
    review: "2.8k",
  },
  {
    id: 2,
    img: "/places/aswan.jpg",
    title: "Cairo",
    region: "Egypt, cairo",
    rate: "4.3",
    review: "2.8k",
  },
  {
    id: 3,
    img: "/places/luxor.jpg",
    title: "Luxor",
    region: "Egypt, luxor",
    rate: "4.3",
    review: "2.8k",
  },
  {
    id: 4,
    img: "/places/cairo.jpg",
    title: "Cairo",
    region: "Egypt, cairo",
    rate: "4.3",
    review: "2.8k",
  },
];
