/**
 * Centralized testimonials data — single source of truth for client feedback.
 * Consumed by: Testimonials component.
 */

export type Testimonial = {
  image: string;
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    image: "/images/testimonials/keri-lynn-engel.png",
    quote:
      "Mohit has a great work ethic - always reliable and never missed a deadline!",
    name: "Keri Lynn Engel",
    role: "Program Manager",
    company: "Exploding Topics",
  },
  {
    image: "/images/testimonials/adrian-try.png",
    quote:
      "I enjoyed working with Mohit on the WPBeginner team. He consistently delivered clear, well-designed graphics that complemented the articles I and the team were writing. He stayed on schedule, was easy to work with, and always came across as approachable and responsive.",
    name: "Adrian Try",
    role: "WordPress Content Writer",
    company: "Awesome Motive, Inc.",
  },
  {
    image: "/images/testimonials/mohammad-shohag.png",
    quote:
      "Working with Mohit was always a great experience. He has a strong eye for design, communicates clearly, and brings a thoughtful, user-focused approach to his work. He's collaborative, reliable, and genuinely easy to work with.",
    name: "Mohammad Shohag",
    role: "UI/UX Designer",
    company: "SeedProd · Awesome Motive Inc.",
  },
  {
    image: "/images/testimonials/kishan-jasani.png",
    quote:
      "I had a fantastic experience working with Mohit on our design projects. He consistently delivers creative, user-focused UI/UX solutions and always communicates clearly and professionally. Mohit's collaborative approach and attention to detail make him a pleasure to work with.",
    name: "Kishan Jasani",
    role: "Senior Web Engineer",
    company: "WordPress VIP Projects",
  },
];