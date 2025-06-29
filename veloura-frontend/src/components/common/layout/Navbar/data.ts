import { routes } from "@/src/constants/routes";
import search from "../../../../../public/search.svg";
import shoppingBag from "../../../../../public/shopping-cart.svg";
import user from "../../../../../public/user.svg";

export const navLinks = [
  {
    title: routes.SHOP.title,
    href: routes.SHOP.path,
  },
  {
    title: routes.BLOG.title,
    href: routes.BLOG.path,
  },
  {
    title: routes.OUR_STORY.title,
    href: routes.OUR_STORY.path,
  },
];

export const navLinksAuth = [
  {
    title: routes.SEARCH.title,
    href: routes.SEARCH.path,
       icon: search,

  },
  {
    title: routes.CART.title,
    href: routes.CART.path,
    icon: shoppingBag,
  
  },
  {
    title: routes.PROFILE.title,
    href: routes.PROFILE.path,
    icon: user,
  
  },
];

