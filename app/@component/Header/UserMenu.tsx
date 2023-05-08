"use client"

import { AiOutlineMenu } from "react-icons/ai"
import Avatar from "./Avatar"
import { useCallback, useState } from "react"
import MenuItem from "./MenuItem"

const UserMenu = () => {
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
            당신의 공간을 공유하세요
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
              <Avatar />
            </div>
          </div>
        </div>

        {isOpen && (
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
              <MenuItem onClick={() => {}} label="로그인" />
              <MenuItem onClick={() => {}} label="회원가입" />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default UserMenu