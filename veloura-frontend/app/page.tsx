import { routes } from "@/constants/routes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: routes.HOME.metaTitle,
  description: routes.HOME.description,
  openGraph: {
    title: routes.HOME.metaTitle,
    description: routes.HOME.description,
    url: routes.HOME.path,
  },
  alternates: {
    canonical: routes.HOME.path,
  },
};

export { default } from "@/containers/home";
