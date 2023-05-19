import "./globals.css"
import { Noto_Serif_KR } from "next/font/google"
import Navbar from "./@component/Header/Navbar"
import RegisterModal from "./@component/Modal/RegisterModal"
import ToasterProvider from "./@providers/ToasterProvider"
import LoginModal from "./@component/Modal/LoginModal"
import getCurrentUser from "./@actions/getCurrentUser"
import RentModal from "./@component/Modal/RentModal"
// import RecoilProvider from "./@recoil/provider/RecoilProvider"

const notoSerif = Noto_Serif_KR({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
})

export const metadata = {
  title: "여행, 그리고 휴식 -Restay ",
  description: "restay homepage",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()

  return (
    <html lang="ko-KR">
      <body className={notoSerif.className}>
        <ToasterProvider />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <Navbar isLogin={currentUser} />
        {children}
      </body>
    </html>
  )
}
