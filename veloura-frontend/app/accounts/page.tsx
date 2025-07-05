import { Metadata } from "next";

import { routes } from "@/src/constants/routes";

export const metadata: Metadata = {
  title: routes.ACCOUNT.metaTitle,
  description: routes.ACCOUNT.description,
  openGraph: {
    title: routes.ACCOUNT.metaTitle,
    description: routes.ACCOUNT.description,
    url: routes.ACCOUNT.path,
  },
  alternates: {
    canonical: routes.ACCOUNT.path,
  },
};

export { default } from "@/src/containers/accounts";
