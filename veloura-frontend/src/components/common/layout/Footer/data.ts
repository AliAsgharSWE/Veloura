import { routes } from "@/src/constants/routes";

export const footerLinks = [
  { title: routes.HOME.title, href: routes.HOME.path },
  { title: routes.PRICING.title, href: routes.PRICING.path },
  { title: routes.API_INTEGRATION.title, href: routes.API_INTEGRATION.path },
  { title: routes.CONTACT_US.title, href: routes.CONTACT_US.path },
];

export const socialLinks = [
  { href: "#", icon: "/icons/facebook.svg", alt: "Facebook" },
  { href: "#", icon: "/icons/twitter.svg", alt: "Twitter" },
  { href: "#", icon: "/icons/vimeo.svg", alt: "Vimeo" },
  { href: "#", icon: "/icons/youtube.svg", alt: "YouTube" },
];

export const legalLinks = [
  { href: "/terms", title: "Terms of Service" },
  { href: "/privacy", title: "Privacy Policy" },
];

export const copyrightData = {
  text: "© 2025 VEEDIT. All rights reserved.",
};
