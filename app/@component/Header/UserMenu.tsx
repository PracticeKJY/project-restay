"use client"

import { AiOutlineMenu } from "react-icons/ai"
import Avatar from "./Avatar"
import { FC, useCallback, useState } from "react"
import MenuItem from "./MenuItem"
import useRegisterModal from "@/@hooks/useRegisterModal"
import useLoginModal from "@/@hooks/useLoginModal"
import { signOut } from "next-auth/react"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { User } from "@prisma/client"

type UserMenuProps = {
  isLogin?: User | null
}

const UserMenu: FC<UserMenuProps> = ({ isLogin }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  return (
    <>
      <div
        className="
      relative
      "
      >
        <div
          className="
      flex
      flex-row
      items-center
      gap-3
      "
        >
          <div
            className="
      hidden
      md:block
      text-sm
      font-semibold
      py-3
      px-4
      rounded-full
      hover:bg-netual-100
      transition
      cursor-pointer
      "
          >
            {isLogin
              ? `${isLogin.name}님 오늘은 어디로 떠나보실래요?`
              : "당신의 공간을 공유하세요"}
          </div>
          <div
            className="
          p-4
          md:py-1
          md:px-3
          border-[1px]
          border-netural-200
          flex
          flex-row
          items-center
          gap-3
          rounded-full
          cursor-pointer
          hover:shadow-md
          transition
          "
            onClick={toggleOpen}
          >
            <AiOutlineMenu />
            <div className="hidden md:block">
              <Avatar accountImage={isLogin?.image} />
            </div>
          </div>
        </div>

        {isOpen &&
          (isLogin ? (
            <IsLoginMenuContainer>
              <LogoutMenu />
            </IsLoginMenuContainer>
          ) : (
            <IsLoginMenuContainer>
              <LoginMenu />
            </IsLoginMenuContainer>
          ))}
      </div>
    </>
  )
}

export default UserMenu

interface IsLoginMenuContainerProps {
  children: React.ReactNode
}

export const IsLoginMenuContainer: FC<IsLoginMenuContainerProps> = ({
  children,
}) => {
  return (
    <div
      className="
  absolute
  rounded-xl
  shadow-md
  w-[150px]
  bg-white
  overflow-hidden
  right-0
  top-12
  text-sm
  "
    >
      <div
        className="
      
  flex
  flex-col
  cursor-pointer
  "
      >
        {children}
      </div>
    </div>
  )
}

export const LoginMenu = () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()

  return (
    <>
      <MenuItem onClick={loginModal.onOpen} label="로그인" />
      <MenuItem onClick={registerModal.onOpen} label="회원가입" />
    </>
  )
}

export const LogoutMenu = () => {
  const router = useRouter()

  const logOutHandler = async () => {
    try {
      await signOut({
        redirect: false,
        callbackUrl: "/",
      })

      toast.success("또 만났으면 좋겠어요!🤙")
      router.refresh()
    } catch (error) {
      toast.error((error as any).message)
    }
  }

  return (
    <>
      <MenuItem onClick={() => {}} label="여행" />
      <MenuItem onClick={() => {}} label="위시리스트" />
      <MenuItem onClick={() => {}} label="알림" />
      <MenuItem onClick={() => {}} label="메세지" />
      <MenuItem onClick={logOutHandler} label="로그아웃" />
    </>
  )
}
