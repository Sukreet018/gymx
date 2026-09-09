import type { Review } from "../types/review";

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Nancy Wheeler',
    role: 'Member',
    image:
      'https://images.unsplash.com/photo-1657567685816-e35a1dd7df74?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5,
    review:
      'The trainers are knowledgeable and the environment makes it easy to stay consistent.',
  },
  {
    id: 2,
    name: 'Will Byers',
    role: 'Premium Member',
    image:
      'https://images.unsplash.com/photo-1607882787523-13643a222bcb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.5,
    review:
      'I finally found a gym where the trainers actually pay attention to technique and progress.',
  },
  {
    id: 3,
    name: 'Dustin Henderson',
    role: 'Elite Member',
    image:
      'https://images.unsplash.com/photo-1777445976125-96f07fa0d644?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5,
    review:
      'Good equipment, professional trainers and a clean environment. The personal training is excellent.',
  },
]