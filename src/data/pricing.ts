import type { PricingPlan } from '../types/pricing'

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: 'Basic',
    price: 999,
    period: 'month',
    description: 'Everything you need to start your fitness journey.',
    features: [
      'Gym access',
      'Basic equipment access',
      'Locker access',
      'Free fitness assessment',
    ],
  },
  {
    id: 2,
    name: 'Premium',
    price: 1499,
    period: 'month',
    description: 'More guidance and benefits for consistent progress.',
    features: [
      'Everything in Basic',
      'Personal training sessions',
      'Nutrition guidance',
      'Group fitness classes',
      'Progress tracking',
    ],
    popular: true,
  },
  {
    id: 3,
    name: 'Elite',
    price: 2499,
    period: 'month',
    description: 'A complete premium fitness experience.',
    features: [
      'Everything in Premium',
      'Unlimited personal training',
      'Custom nutrition plan',
      'Priority trainer booking',
      'Advanced progress analytics',
    ],
  },
]