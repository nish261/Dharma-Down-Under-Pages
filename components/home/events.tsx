'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { format, addDays } from 'date-fns'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'

const events = [
  {
    date: addDays(new Date(), 2),
    title: "Weekly Meditation Session",
    time: "10:00 AM AEST",
    location: "Sydney Meditation Center"
  },
  {
    date: addDays(new Date(), 5),
    title: "Youth Meet-up: Cultural Exchange",
    time: "6:00 PM AEST",
    location: "Community Hall"
  },
  {
    date: addDays(new Date(), 8),
    title: "Seva Project: Community Garden",
    time: "9:00 AM AEST",
    location: "Dharma Gardens"
  }
]

export function Events() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date())

  const getEventsForDate = (date: Date) => {
    return events.filter(event => 
      format(event.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    )
  }

  return (
    <section id="events" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Upcoming Events</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
              Join us for meditation sessions, cultural celebrations, and community gatherings
            </p>
          </div>
        </div>
        <div className="mt-8 space-y-4">
          <div className="rounded-lg border bg-card">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">
                  {format(currentMonth, 'MMMM yyyy')}
                </h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-px bg-muted rounded-lg overflow-hidden">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="bg-background p-3 text-center text-sm font-medium">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 35 }).map((_, index) => {
                  const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), index - currentMonth.getDay() + 1)
                  const dateEvents = getEventsForDate(date)
                  const isToday = format(date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')
                  const isSelected = selectedDate && format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
                  
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedDate(date)}
                      className={`bg-background p-3 text-center relative hover:bg-muted transition-colors min-h-[100px] ${
                        isSelected ? 'ring-2 ring-orange-500' : ''
                      }`}
                    >
                      <span className={`text-sm ${isToday ? 'font-bold text-orange-500' : ''}`}>
                        {format(date, 'd')}
                      </span>
                      {dateEvents.map((event, eventIndex) => (
                        <div
                          key={eventIndex}
                          className="mt-1 text-xs bg-orange-100 text-orange-900 p-1 rounded truncate"
                        >
                          {event.title}
                        </div>
                      ))}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
          {selectedDate && getEventsForDate(selectedDate).length > 0 && (
            <div className="rounded-lg border bg-card p-6">
              <h4 className="font-semibold mb-4">Events on {format(selectedDate, 'MMMM d, yyyy')}</h4>
              <div className="space-y-4">
                {getEventsForDate(selectedDate).map((event, index) => (
                  <div key={index} className="flex justify-between items-start border-b pb-4 last:border-0">
                    <div>
                      <h5 className="font-medium">{event.title}</h5>
                      <p className="text-sm text-muted-foreground">{event.time}</p>
                      <p className="text-sm text-muted-foreground">{event.location}</p>
                    </div>
                    <Button className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 hover:opacity-90">
                      Register
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}