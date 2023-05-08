import "./globals.css"
import { Noto_Serif_KR } from "next/font/google"
import Navbar from "./@component/Header/Navbar"
import Modal from "./@component/Modal/Modal"
import RegisterModal from "./@component/Modal/RegisterModal"
import ToasterProvider from "./@providers/ToasterProvider"

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
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
