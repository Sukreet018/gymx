export interface PricingPlan{
  id: number
  name: string
  price: number
  period: string
  description: string
  features: string[]
  popular?:boolean
}