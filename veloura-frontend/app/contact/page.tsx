import { Metadata } from "next";

import { routes } from "@/constants/routes";

export const metadata: Metadata = {
  title: routes.CONTACT.metaTitle,
  description: routes.CONTACT.description,
  openGraph: {
    title: routes.CONTACT.metaTitle,
    description: routes.CONTACT.description,
    url: routes.CONTACT.path,
  },
  alternates: {
    canonical: routes.CONTACT.path,
  },
};

export { default } from "@/containers/contact";
