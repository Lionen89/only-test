export interface eventType {
  year: number
  event: string
}

export interface EventList {
  id: number
  type?: string
  activeElement?: number
  points: {
    from: number
    to: number
  }
  pointName: string
  events: eventType[]
}
