import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Users, Code, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ActivityGallery from "@/components/activity-gallery"
import events from "@/data/events"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="coderdojo-tamachi-logo.svg"
                alt="CoderDojo Tamachi Logo"
                width={40}
                height={40}
                className="h-8 w-auto"
              />
              <span className="inline-block font-bold text-xl">CoderDojoたまち</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="#about"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-[#0fa6ba]"
              >
                CoderDojoとは
              </Link>
              <Link
                href="#gallery"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-[#0fa6ba]"
              >
                活動の様子
              </Link>
              <Link
                href="#testimonials"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-[#0fa6ba]"
              >
                参加者の声
              </Link>
              <Link
                href="#activities"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-[#0fa6ba]"
              >
                活動内容
              </Link>
              <Link
                href="#events"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-[#0fa6ba]"
              >
                イベント
              </Link>
              <Link
                href="#faq"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-[#0fa6ba]"
              >
                よくある質問
              </Link>
              <Link
                href="#contact"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-[#0fa6ba]"
              >
                お問い合わせ
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Link
              href="https://x.com/dojoTamachi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#0fa6ba]"
              aria-label="X (旧Twitter)"
            >
              <Image
                src="x-logo.svg"
                alt="X Logo"
                width={20}
                height={20}
                className="h-5 w-5"
              />
            </Link>
            <Link
              href="https://coderdojo-tamachi.connpass.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex"
            >
              <Button className="bg-[#0fa6ba] hover:bg-[#0fa6ba]/90">参加申し込み</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#0fa6ba]/10 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">CoderDojoたまち</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    子どもたちのためのプログラミング道場。楽しく学び、創造し、共有しよう！
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="https://coderdojo-tamachi.connpass.com/" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="gap-1 bg-[#0fa6ba] hover:bg-[#0fa6ba]/90">
                      参加する <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#about">
                    <Button variant="outline" size="lg">
                      詳しく知る
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="coderdojo-tamachi-logo.svg"
                width={500}
                height={400}
                alt="CoderDojoたまちのロゴ"
                className="mx-auto w-full max-w-[300px] h-auto"
              />
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">CoderDojoとは</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  CoderDojoは7〜17歳の子どもたちを対象にした、ボランティアが運営する無料のプログラミング道場です。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0fa6ba]/10">
                      <Code className="h-5 w-5 text-[#0fa6ba]" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">自由な学び</h3>
                      <p className="text-muted-foreground">
                        子どもたちは自分のペースで、自分の興味のあることに取り組みます。
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0fa6ba]/10">
                      <Users className="h-5 w-5 text-[#0fa6ba]" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">コミュニティ</h3>
                      <p className="text-muted-foreground">
                        プログラミングを楽しむ仲間と出会い、メンターからサポートを受けられます。
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0fa6ba]/10">
                      <MapPin className="h-5 w-5 text-[#0fa6ba]" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">世界的な活動</h3>
                      <p className="text-muted-foreground">
                        CoderDojoは世界100カ国以上、2,000以上の道場があるグローバルな活動です。
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-[#0fa6ba]/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">CoderDojoでやりたいこと</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>プログラミングを楽しく学ぶ環境を提供する</li>
                  <li>子どもたちの好奇心と創造性を育む</li>
                  <li>失敗を恐れずに挑戦できる場所をつくる</li>
                  <li>互いに教え合い、学び合うコミュニティを育てる</li>
                  <li>テクノロジーを通じて問題解決能力を身につける機会を提供する</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">活動の様子</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  CoderDojoたまちでの実際の活動風景です
                </p>
              </div>
            </div>
            <ActivityGallery />
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">CoderDojoでできること</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  CoderDojoたまちでは、以下のようなことができます
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-col items-start space-y-2">
                  <div className="p-2 bg-[#0fa6ba]/10 rounded-md">
                    <Code className="h-6 w-6 text-[#0fa6ba]" />
                  </div>
                  <h3 className="text-xl font-bold">自由なプログラミング学習や制作</h3>
                  <p className="text-muted-foreground">
                    自分の興味や関心に合わせて、好きなプログラミング言語やツールを使って自由に学習や制作ができます。初心者から経験者まで、それぞれのレベルに合わせた活動が可能です。
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-col items-start space-y-2">
                  <div className="p-2 bg-[#0fa6ba]/10 rounded-md">
                    <Users className="h-6 w-6 text-[#0fa6ba]" />
                  </div>
                  <h3 className="text-xl font-bold">メンターに相談できる</h3>
                  <p className="text-muted-foreground">
                    プログラミングの知識や経験を持つメンターが参加者をサポートします。わからないことや困ったことがあれば、いつでも気軽に相談できる環境です。
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-col items-start space-y-2">
                  <div className="p-2 bg-[#0fa6ba]/10 rounded-md">
                    <Code className="h-6 w-6 text-[#0fa6ba]" />
                  </div>
                  <h3 className="text-xl font-bold">作品を発表できる</h3>
                  <p className="text-muted-foreground">
                    自分が作ったプログラムやゲーム、アプリなどを他の参加者に発表する機会があります。フィードバックをもらうことで、さらに作品を改良するヒントが得られます。
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-col items-start space-y-2">
                  <div className="p-2 bg-[#0fa6ba]/10 rounded-md">
                    <Users className="h-6 w-6 text-[#0fa6ba]" />
                  </div>
                  <h3 className="text-xl font-bold">いろんな人と交流できる</h3>
                  <p className="text-muted-foreground">
                    同じ興味を持つ仲間や異なる学校の友達と出会い、交流することができます。お互いの知識や経験を共有し、一緒に学び合う楽しさを体験できます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">参加者の声</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  CoderDojoたまちに参加した子どもたちの感想です
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-col items-start space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-[#0fa6ba]/20 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#0fa6ba]"
                      >
                        <circle cx="12" cy="8" r="5" />
                        <path d="M20 21a8 8 0 0 0-16 0" />
                      </svg>
                    </div>
                    <div className="text-sm">小学6年生</div>
                  </div>
                  <div className="text-4xl text-[#0fa6ba]">"</div>
                  <p className="text-lg italic">やったことがない色々なことにチャレンジできて楽しいです。</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-col items-start space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-[#0fa6ba]/20 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#0fa6ba]"
                      >
                        <circle cx="12" cy="8" r="5" />
                        <path d="M20 21a8 8 0 0 0-16 0" />
                      </svg>
                    </div>
                    <div className="text-sm">小学6年生</div>
                  </div>
                  <div className="text-4xl text-[#0fa6ba]">"</div>
                  <p className="text-lg italic">色々な人と出会えるのが楽しいです。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="activities" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">活動内容</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  CoderDojoたまちでは、以下のような活動を行っています。
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-col items-start space-y-2">
                  <div className="p-2 bg-[#0fa6ba]/10 rounded-md">
                    <Code className="h-6 w-6 text-[#0fa6ba]" />
                  </div>
                  <h3 className="text-xl font-bold">Scratch</h3>
                  <p className="text-muted-foreground">
                    ビジュアルプログラミングで、ゲームやアニメーションを作成します。初心者におすすめです。
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-col items-start space-y-2">
                  <div className="p-2 bg-[#0fa6ba]/10 rounded-md">
                    <Code className="h-6 w-6 text-[#0fa6ba]" />
                  </div>
                  <h3 className="text-xl font-bold">Webサイト制作</h3>
                  <p className="text-muted-foreground">
                    HTML、CSS、JavaScriptを使って、自分だけのWebサイトを作成します。
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-col items-start space-y-2">
                  <div className="p-2 bg-[#0fa6ba]/10 rounded-md">
                    <Code className="h-6 w-6 text-[#0fa6ba]" />
                  </div>
                  <h3 className="text-xl font-bold">Python</h3>
                  <p className="text-muted-foreground">
                    本格的なプログラミング言語を使って、ゲームやアプリケーションを開発します。
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-col items-start space-y-2">
                  <div className="p-2 bg-[#0fa6ba]/10 rounded-md">
                    <Code className="h-6 w-6 text-[#0fa6ba]" />
                  </div>
                  <h3 className="text-xl font-bold">ロボティクス</h3>
                  <p className="text-muted-foreground">
                    ロボットキットを使って、プログラミングでロボットを動かす体験をします。
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-col items-start space-y-2">
                  <div className="p-2 bg-[#0fa6ba]/10 rounded-md">
                    <Code className="h-6 w-6 text-[#0fa6ba]" />
                  </div>
                  <h3 className="text-xl font-bold">自由制作</h3>
                  <p className="text-muted-foreground">
                    自分の興味のあるプロジェクトに取り組み、メンターがサポートします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">開催予定</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  CoderDojoたまちは定期的に開催しています。参加には事前申し込みが必要です。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12">
              {events.length > 0 ? (
                events.map((event) => (
                  <div key={event.id} className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date} {event.time}</span>
                      </div>
                      <h3 className="text-xl font-bold">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{event.venue}</span>
                      </div>
                      <div className="pt-4">
                        {event.url ? (
                          <Link
                            href={event.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="bg-[#0fa6ba] hover:bg-[#0fa6ba]/90">参加申し込み</Button>
                          </Link>
                        ) : (
                          <Button disabled className="bg-muted text-muted-foreground cursor-not-allowed">
                            申し込み準備中
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">現在予定されているイベントはありません。</p>
                  <p className="text-muted-foreground mt-2">次回の開催をお楽しみに！</p>
                </div>
              )}
            </div>
            <div className="flex justify-center">
              <Link href="https://coderdojo-tamachi.connpass.com/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">過去のイベントを見る</Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">よくある質問</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  CoderDojoたまちについてよくある質問と回答です。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12">
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold">参加費はかかりますか？</h3>
                <p className="mt-2 text-muted-foreground">
                  CoderDojoは完全無料です。ボランティアによって運営されています。
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold">パソコンは持参する必要がありますか？</h3>
                <p className="mt-2 text-muted-foreground">
                  可能であればノートパソコンをご持参ください。台数に限りはありますが、貸出用のパソコンもご用意しています。
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold">プログラミング経験がなくても参加できますか？</h3>
                <p className="mt-2 text-muted-foreground">
                  はい、初心者大歓迎です。メンターがサポートしますので、安心してご参加ください。
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold">保護者の同伴は必要ですか？</h3>
                <p className="mt-2 text-muted-foreground">
                  小学生のお子様は保護者の同伴をお願いしています。中学生以上は保護者の同伴は任意です。
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold">メンターになるには？</h3>
                <p className="mt-2 text-muted-foreground">
                  各回のメンター枠でお申し込みください。Scratchやプログラミング自体の技術力は問いません。子ども達の相談にのって一緒に考えてサポートしてくれる方のご協力をお待ちしております。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">お問い合わせ</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  CoderDojoたまちについてのお問い合わせは、以下のフォームからご連絡ください。
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12 flex flex-col items-center">
              <Link href="https://forms.gle/ZKCKT8m5jfLBEgta8" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#0fa6ba] hover:bg-[#0fa6ba]/90">
                  お問い合わせフォームを開く
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-8 md:py-12 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold mb-4">免責事項</h2>
              <p className="text-muted-foreground">
                CoderDojoたまちの活動参加中や行き帰りなどで発生したトラブル、損失、損害、傷病、事故に対して、CoderDojoたまちは一切責任を負いません。これらに対して自己責任においてご参加くださるようお願いいたします。
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Image
              src="coderdojo-tamachi-logo.svg"
              alt="CoderDojo Logo"
              width={30}
              height={30}
              className="h-6 w-auto"
            />
            <p className="text-center text-sm leading-loose md:text-left">
              &copy; {new Date().getFullYear()} CoderDojoたまち. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://x.com/dojoTamachi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#0fa6ba]"
              aria-label="X (旧Twitter)"
            >
              <Image
                src="x-logo.svg"
                alt="X Logo"
                width={20}
                height={20}
                className="h-5 w-5"
              />
            </Link>
            <Link
              href="https://coderdojo.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:underline"
            >
              CoderDojo Japan
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
