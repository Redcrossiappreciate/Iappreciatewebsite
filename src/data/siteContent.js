import { assetPath } from "./assetPath";
import { galleryPageContent, galleryPreviewItems } from "./galleryImages";

export const siteContent = {
  navigation: [
    { label: "About", href: "#about" },
    { label: "Impact", href: "#impact" },
    { label: "Gallery", href: "#gallery" },
    { label: "Sponsors", href: "#support-needed" },
    { label: "Contact", href: "#contact" },
  ],
  navigationAction: { label: "Contact", href: "#contact" },
  hero: {
    eyebrow: "RCY NTU Flagship Initiative",
    title: "Project iAppreciate 2026",
    subtitle: "A flagship RCY NTU initiative celebrating the contributions of migrant workers in Singapore.",
    primaryAction: { label: "Partner With Us", href: "#contact" },
    secondaryAction: { label: "View Highlights", href: "./gallery.html" },
    image: assetPath("/images/hero/project-iappreciate-hero.jpg"),
    floatingCards: [
      { title: "600+ participants" },
      { title: "Annual flagship project" },
    ],
  },
  about: {
    id: "about",
    tag: "About Project iAppreciate",
    title: "A yearly gesture of appreciation grounded in dignity, gratitude, and human connection.",
    body: [
      "Project iAppreciate is an annual flagship initiative by the Red Cross Youth Chapter at Nanyang Technological University. It is created to recognise and appreciate the often unseen contributions of migrant workers who help keep Singapore moving every day.",
      "The event brings together migrant worker participants, student volunteers, and community partners through appreciation activities, interactive booths, welfare initiatives, and simple moments of meaningful engagement. At its heart, the project is about creating a respectful space where gratitude is felt, shared, and remembered.",
    ],
    image: assetPath("/images/highlights/about-photo.jpg"),
    callout: "",
  },
  whyItMatters: {
    id: "why-it-matters",
    tag: "Why It Matters",
    title: "Why this project deserves thoughtful support.",
    intro:
      "The project is designed to be simple in approach but meaningful in effect. Each part of the event is intended to affirm dignity, create moments of appreciation, and encourage a more caring campus-community relationship.",
    items: [
      {
        title: "Dignity and recognition",
        description:
          "The event acknowledges the contribution of migrant workers in a way that is personal, visible, and sincere.",
      },
      {
        title: "Community and belonging",
        description:
          "Interactive activities and welfare elements help create a welcoming atmosphere where participants feel seen and valued.",
      },
      {
        title: "Youth engagement",
        description:
          "Student volunteers gain first-hand experience in humanitarian service, empathy, and responsible community leadership.",
      },
      {
        title: "Continuity of impact",
        description:
          "As an annual initiative, Project iAppreciate builds on past editions while strengthening long-term relationships with partners and supporters.",
      },
    ],
  },
  impact: {
    id: "impact",
    tag: "Highlights and Impact",
    title: "A sponsor-facing snapshot of the scale and character of the event.",
    note: "",
    image: assetPath("/images/highlights/impact-photo-2.jpg"),
    stats: [
      { value: "600+", label: "expected migrant worker participants" },
      { value: "100+", label: "student volunteers involved" },
      { value: "2 times a year", label: "", detail: "December and June" },
    ],
    highlights: [
      "Appreciation activities that encourage meaningful interaction rather than one-way outreach",
      "Interactive booths and engagement stations designed for warmth, participation, and enjoyment",
      "Welfare and care-pack support that adds practical value alongside the event experience",
    ],
  },
  gallery: {
    id: "gallery",
    tag: "Past Event Gallery",
    title: "Moments from previous editions and the atmosphere we hope to build again in 2026.",
    intro:
      "A preview of past moments from Project iAppreciate. The full gallery now lives on its own page so the photography has more room to breathe.",
    items: galleryPreviewItems,
    cta: { label: "Open Full Gallery", href: "./gallery.html" },
  },
  supportNeeded: {
    id: "support-needed",
    tag: "Support We Are Looking For",
    title: "We welcome support that strengthens both the event experience and participant welfare.",
    items: [
      {
        title: "Financial sponsorship",
        description:
          "Support programme delivery, venue needs, welfare materials, logistics, and overall event quality.",
      },
      {
        title: "Vouchers",
        description:
          "Useful, flexible contributions that can be distributed as appreciation items or participant support.",
      },
      {
        title: "Snacks and beverages",
        description:
          "Food and drink contributions help create a hospitable, caring environment throughout the event.",
      },
      {
        title: "Care pack items",
        description:
          "Practical daily-use items that can be assembled into meaningful welfare packs for participants.",
      },
      {
        title: "Giveaway items",
        description:
          "Thoughtful branded or non-branded items that add delight while remaining useful and respectful.",
      },
      {
        title: "In-kind support",
        description:
          "Printing, logistics, event materials, equipment, manpower, or other resources that support delivery.",
      },
    ],
  },
  contact: {
    id: "contact",
    tag: "Contact",
    title: "Partner with us to make Project iAppreciate 2026 possible.",
    description:
      "We would be glad to speak with sponsors, donors, and community partners who would like to support the event. Reach out for partnership conversations, donation discussions, or general enquiries.",
    sponsorshipEmail: "redcross-iappreciate@e.ntu.edu.sg",
    generalEmail: "redcross-president@e.ntu.edu.sg",
    socialLinks: [
      {
        label: "Instagram",
        value: "@nturedcross",
        href: "https://www.instagram.com/nturedcross",
      },
      {
        label: "TikTok",
        value: "@ntu_red_cross_youth",
        href: "https://www.tiktok.com/@ntu_red_cross_youth?lang=en-GB",
      },
      {
        label: "LinkedIn",
        value: "NTU Red Cross Youth",
        href: "https://www.linkedin.com/company/ntu-red-cross-youth/about/?viewAsMember=true",
      },
      {
        label: "Facebook",
        value: "NTU Red Cross",
        href: "https://www.facebook.com/NTURedCross/",
      },
    ],
    contactCards: [
      {
        label: "Sponsorship enquiries",
        value: "redcross-iappreciate@e.ntu.edu.sg",
        href: "mailto:redcross-iappreciate@e.ntu.edu.sg",
      },
      {
        label: "General enquiries",
        value: "redcross-president@e.ntu.edu.sg",
        href: "mailto:redcross-president@e.ntu.edu.sg",
      },
    ],
  },
  footer: {
    minimal: true,
  },
};

export { galleryPageContent };
