"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

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

// 管理者用のイベント管理ページ
export default function AdminEventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState<Omit<Event, "id">>({
    title: "",
    date: "",
    time: "",
    description: "",
    venue: "三田いきいきプラザ",
    url: "https://coderdojo-tamachi.connpass.com/",
  })

  // フォームの入力値を更新する関数
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // フォームを送信する関数
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // ここでAPIを呼び出してイベント情報を保存する処理を実装
    // 実際の実装ではデータベースに保存する処理が必要

    alert("イベント情報が保存されました（デモ表示）")

    // フォームをリセット
    setFormData({
      title: "",
      date: "",
      time: "",
      description: "",
      venue: "三田いきいきプラザ",
      url: "https://coderdojo-tamachi.connpass.com/",
    })
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">イベント管理</h1>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6 border p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">新規イベント登録</h2>

          <div className="space-y-2">
            <Label htmlFor="title">イベントタイトル</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="例: CoderDojoたまち #25"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">開催日</Label>
              <Input
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                placeholder="例: 2025年3月15日（土）"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">開催時間</Label>
              <Input
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                placeholder="例: 13:00-15:00"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">イベント内容</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="イベントの内容を入力してください"
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="venue">開催場所</Label>
            <Input id="venue" name="venue" value={formData.venue} onChange={handleChange} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="url">申し込みURL</Label>
            <Input
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              required
              placeholder="https://coderdojo-tamachi.connpass.com/"
            />
          </div>

          <Button type="submit" className="w-full">
            イベントを登録
          </Button>
        </form>

        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">登録済みイベント一覧</h2>
          <p className="text-muted-foreground mb-4">
            ここに登録済みのイベント一覧が表示されます。実際の実装ではデータベースから取得したイベント情報を表示します。
          </p>
        </div>
      </div>
    </div>
  )
}
