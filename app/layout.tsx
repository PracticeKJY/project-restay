import "./globals.css"
import { Noto_Serif_KR } from "next/font/google"
import Navbar from "./@component/Header/Navbar"

const notoSerif = Noto_Serif_KR({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
})

export const metadata = {
  title: "여행, 그리고 휴식 -Restay ",
  description: "restay homepage",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko-KR">
      <body className={notoSerif.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
