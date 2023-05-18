"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import logo from "/public/mainLogo.svg"
const Logo = () => {
  const router = useRouter()

  return (
    <Image
      onClick={() => router.push("/")}
      alt="Logo"
      className="hidden md:block cursor-pointer"
      height={100}
      width={100}
      src={logo}
    />
  )
}

export default Logo
