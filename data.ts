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
    img: "/assets/places/alx.jpg",
    title: "Marsa Alam",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    tags: ["Marsa Alam", "Travel", "family"],
  },
  {
    id: 2,
    img: "/assets/places/aswan.jpg",
    title: "Marsa Alam",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    tags: ["Marsa Alam", "travel"],
  },
  {
    id: 3,
    img: "/assets/places/luxor.jpg",
    title: "Marsa Alam",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    tags: ["Marsa Alam", "travel"],
  },
  {
    id: 4,
    img: "/assets/places/cairo.jpg",
    title: "Marsa Alam",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    tags: ["Marsa Alam", "travel"],
  },
];
