"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"

// イベント情報の型定義
type Event = {
  id: string
  title: string
  date: string
  time: string
  description: string
  venue: string
  url: string
}

export default function EventList() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch("/api/events")
        if (!response.ok) {
          throw new Error("イベント情報の取得に失敗しました")
        }
        const data = await response.json()
        setEvents(data)
      } catch (err) {
        setError("イベント情報を読み込めませんでした")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  if (loading) {
    return <div className="text-center py-8">読み込み中...</div>
  }

  if (error) {
    return <div className="text-center py-8 text-destructive">{error}</div>
  }

  if (events.length === 0) {
    return <div className="text-center py-8">現在予定されているイベントはありません。</div>
  }

  return (
    <div className="grid gap-6">
      {events.map((event) => (
        <div
          key={event.id}
          className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>
                {event.date} {event.time}
              </span>
            </div>
            <h3 className="text-xl font-bold">{event.title}</h3>
            <p className="text-muted-foreground">{event.description}</p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{event.venue}</span>
            </div>
            <div className="pt-4">
              <Link href={event.url} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#0fa6ba] hover:bg-[#0fa6ba]/90">参加申し込み</Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
