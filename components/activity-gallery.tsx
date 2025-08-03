"use client"

import { useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230624_140805.jpg-ZdFTxfijFW7pm7KvZ1fJaqrAxY3t1p.jpeg",
    alt: "CoderDojoたまちの活動風景 - 子どもたちがパソコンで学習している様子",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20241020_051523870.MP.jpg-qulRNpkK5txf3vupiMLcr44aYMsFlc.jpeg",
    alt: "CoderDojoたまちの活動風景 - 子どもたちがプログラミングに取り組んでいる様子",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/L1005011.jpg-mVRDV7V7Wf3Z5HORdPUTez3WC6jKci.jpeg",
    alt: "CoderDojoたまちの活動風景 - 子どもたちがプログラミングを学んでいる様子",
  },
]

export default function ActivityGallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 pb-6 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-[300px] md:min-w-[500px] h-[300px] md:h-[350px] relative rounded-lg overflow-hidden snap-center"
          >
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2">
        <Button
          onClick={scrollLeft}
          size="icon"
          variant="ghost"
          className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">前へ</span>
        </Button>
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2">
        <Button
          onClick={scrollRight}
          size="icon"
          variant="ghost"
          className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">次へ</span>
        </Button>
      </div>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
