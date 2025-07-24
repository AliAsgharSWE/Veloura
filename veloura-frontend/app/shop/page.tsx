import { Metadata } from "next";

import { routes } from "@/constants/routes";

export const metadata: Metadata = {
  title: routes.SHOP.metaTitle,
  description: routes.SHOP.description,
  openGraph: {
    title: routes.SHOP.metaTitle,
    description: routes.SHOP.description,
    url: routes.SHOP.path,
  },
  alternates: {
    canonical: routes.SHOP.path,
  },
};

export { default } from "@/containers/shop";
