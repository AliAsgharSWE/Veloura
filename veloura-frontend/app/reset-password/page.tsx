import { Metadata } from "next";

import { routes } from "@/constants/routes";

export const metadata: Metadata = {
  title: routes.RESET_PASSWORD.metaTitle,
  description: routes.RESET_PASSWORD.description,
  openGraph: {
    title: routes.RESET_PASSWORD.metaTitle,
    description: routes.RESET_PASSWORD.description,
    url: routes.RESET_PASSWORD.path,
  },
  alternates: {
    canonical: routes.RESET_PASSWORD.path,
  },
};

export { default } from "@/containers/reset-password";
