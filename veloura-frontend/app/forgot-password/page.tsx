import { Metadata } from "next";

import { routes } from "@/constants/routes";

export const metadata: Metadata = {
  title: routes.FORGOT_PASSWORD.metaTitle,
  description: routes.FORGOT_PASSWORD.description,
  openGraph: {
    title: routes.FORGOT_PASSWORD.metaTitle,
    description: routes.FORGOT_PASSWORD.description,
    url: routes.FORGOT_PASSWORD.path,
  },
  alternates: {
    canonical: routes.FORGOT_PASSWORD.path,
  },
};

export { default } from "@/containers/forget-password";
