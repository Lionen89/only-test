export interface eventType {
  year: number
  event: string
}

export interface EventList {
  id: number
  type?: string
  activeElement?: number
  events: eventType[]
}
