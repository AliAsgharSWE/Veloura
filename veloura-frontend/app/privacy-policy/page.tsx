import { Metadata } from "next";

import { routes } from "@/constants/routes";

export const metadata: Metadata = {
  title: routes.PRIVACY_POLICY.metaTitle,
  description: routes.PRIVACY_POLICY.description,
  openGraph: {
    title: routes.PRIVACY_POLICY.metaTitle,
    description: routes.PRIVACY_POLICY.description,
    url: routes.PRIVACY_POLICY.path,
  },
  alternates: {
    canonical: routes.PRIVACY_POLICY.path,
  },
};

export { default } from "@/containers/privacy-policy";
