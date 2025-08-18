import Image from "next/image"

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
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => (
        <div
          key={index}
          className="h-[300px] md:h-[350px] relative rounded-lg overflow-hidden"
        >
          <Image src={image.src || "placeholder.svg"} alt={image.alt} fill className="object-cover" />
        </div>
      ))}
    </div>
  )
}
