"use client"

import { User } from "@prisma/client"

import Container from "../Container"
import Logo from "@/@component/Header/Logo"
import Search from "./Search"
import UserMenu from "./UserMenu"
import { FC } from "react"
import { SessionProvider } from "next-auth/react"

type NavbarProps = {
  isLogin?: User | null
}

const Navbar: FC<NavbarProps> = ({ isLogin }) => {
  return (
    <>
      <SessionProvider>
        <div className="fixed w-full bg-white z-10 shadow-sm">
          <div className="py-4 border-b-[1px]">
            <Container>
              <div
                className="
              flex
              flex-row
              items-center
              justify-between
              gap-3
              md:gap-0
              "
              >
                <Logo />
                <Search />
                <UserMenu isLogin={isLogin} />
              </div>
            </Container>
          </div>
          <div>여기에 짜란하고뜨겟지아래에</div>
        </div>
      </SessionProvider>
    </>
  )
}

export default Navbar
