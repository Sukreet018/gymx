import type { Trainer } from "../types/trainer";

export const trainers: Trainer[] = [
  {
    id: 1,
    name: "Steve Harrington",
    role: "Strength Coach",
    image:
      "https://images.unsplash.com/photo-1633008692793-aafdd155486a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Specializes in strength development, compound movements, and structured training programs.",
    specialties: ["Strength", "Powerlifting", "Conditioning"],
  },
  {
    id: 2,
    name: "Jim Hopper",
    role: "Fitness Coach",
    image:
      "https://images.unsplash.com/photo-1758875568932-0eefd3e60090?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Helps members build sustainable fitness habits through practical and personalized training.",
    specialties: ["Weight Loss", "Mobility", "HIIT"],
  },
  {
    id: 3,
    name: "Lucas Sinclair",
    role: "Performance Coach",
    image:
      "https://plus.unsplash.com/premium_photo-1672774471359-d0103cd2a632?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Focuses on athletic performance, functional movement, and high-performance conditioning.",
    specialties: ["Athletic Training", "Mobility", "Performance"],
  },
];
