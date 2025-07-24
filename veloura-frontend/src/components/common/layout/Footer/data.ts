import { routes } from "@/constants/routes";
import { FooterData } from './types';

export const footerData: FooterData = {
  links: [
   {
    title: routes.CONTACT.title,
    href: routes.CONTACT.path,
  },
  {
    title: routes.TERMS_OF_SERVICES.title,
    href: routes.TERMS_OF_SERVICES.path,
  },
  {
    title: routes.SHIPPING_AND_RETURNS.title,
    href: routes.SHIPPING_AND_RETURNS.path,
  },
  ],
  socialLinks: [
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: "/linkedIn.svg"
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: "/facebook.svg"
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: "/instagram.svg"
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: "/twitter.svg"
    }
  ],
  companyName: "Shelly",
  year: 2021,
  legalLinks: {
    termsOfUse: "/terms-of-use",
    privacyPolicy: "/privacy-policy"
  },
  newsletter: {
    placeholder: "Give an email, get the newsletter."
  }
};
