import { ProductTabsData } from './types';

export const productTabsData: ProductTabsData = {
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
  
  additionalInfo: {
    weight: "0.3 kg",
    dimensions: "15 x 10 x 1 cm",
    colours: ["Black", "Browns", "White"],
    material: "Metal"
  },
  
  reviews: [
    {
      id: "1",
      author: "Scarlet withcn",
      rating: 3,
      date: "6 May, 2020",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet."
    },
    {
      id: "2",
      author: "Scarlet withcn",
      rating: 3,
      date: "6 May, 2020",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat."
    }
  ],
  
  reviewCount: 2
};