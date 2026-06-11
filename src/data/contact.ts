import { profile } from "./profile";

export type ContactIconType = "email" | "phone" | "location" | "linkedin" | "github";

export interface ContactInfoItem {
  icon: ContactIconType;
  label: string;
  value: string;
  link: string | null;
}

export const contactCopy = {
  seoTitle: "Let's Connect",
  pageTitle: "I'd love to hear from you!",
  pageDesc: "Let's build something amazing together 🚀",
  ctaTitle: "Let's build something amazing together! 🚀",
  ctaDesc: "Open to full-time roles, freelance projects and tech collaborations.",
  errorRequired: "Please fill in Name, Email, and Message.",
  successMessage: "✓ Message sent! I'll get back to you soon.",
};

export const contactInfo: ContactInfoItem[] = [
  {
    icon: "email",
    label: "Email",
    value: profile.email,
    link: `mailto:${profile.email}`,
  },
  {
    icon: "phone",
    label: "Phone",
    value: profile.phone,
    link: `tel:${profile.phone.replace(/-/g, "")}`,
  },
  {
    icon: "location",
    label: "Location",
    value: profile.location,
    link: null,
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: profile.linkedinHandle,
    link: profile.linkedinUrl,
  },
  {
    icon: "github",
    label: "GitHub",
    value: profile.githubHandle,
    link: profile.githubUrl,
  },
];

export const formFields = {
  name: { label: "Your Name", placeholder: "Your Name" },
  email: { label: "Your Email", placeholder: "Your Email" },
  company: { label: "Company / Organization", placeholder: "Company / Organization" },
  subject: { label: "Subject", placeholder: "Subject" },
  message: { label: "Your Message", placeholder: "Your Message" },
};
