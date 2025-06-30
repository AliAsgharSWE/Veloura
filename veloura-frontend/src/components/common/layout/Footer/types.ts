// types.ts
export interface FooterLink {
  title: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string; // Path to SVG file in public folder
}

export interface LegalLinks {
  termsOfUse: string;
  privacyPolicy: string;
}

export interface Newsletter {
  placeholder: string;
}

export interface FooterData {
  links: FooterLink[];
  socialLinks: SocialLink[];
  companyName: string;
  year: number;
  legalLinks: LegalLinks;
  newsletter: Newsletter;
}