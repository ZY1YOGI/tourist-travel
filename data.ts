interface ICard {
  id: number;
  img: string;
  title: string;
  description: string;
  tags: string[];
}

export const cardData: ICard[] = [
  {
    id: 1,
    img: "/places/alx.jpg",
    title: "Alexandria",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    tags: ["Alexandria", "Travel", "family"],
  },
  {
    id: 2,
    img: "/places/aswan.jpg",
    title: "Cairo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    tags: ["photography", "travel"],
  },
  {
    id: 3,
    img: "/places/luxor.jpg",
    title: "Luxor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    tags: ["photography", "travel"],
  },
  {
    id: 4,
    img: "/places/cairo.jpg",
    title: "Cairo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    tags: ["photography", "travel"],
  },
];
