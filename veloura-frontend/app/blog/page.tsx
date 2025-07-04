import { Metadata } from "next";

import { routes } from "@/src/constants/routes";

export const metadata: Metadata = {
  title: routes.BLOG.metaTitle,
  description: routes.BLOG.description,
  openGraph: {
    title: routes.BLOG.metaTitle,
    description: routes.BLOG.description,
    url: routes.BLOG.path,
  },
  alternates: {
    canonical: routes.BLOG.path,
  },
};

export { default } from "@/src/containers/blog";
