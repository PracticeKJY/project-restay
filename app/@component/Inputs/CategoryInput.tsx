"use client"

import { FC } from "react"
import { IconType } from "react-icons"

interface CategoryInput {
  onClick: (value: string) => void
  selected: boolean
  label: string
  icon: IconType
}

const CategoryInput: FC<CategoryInput> = ({
  onClick,
  selected,
  label,
  icon,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`
    rounded-xl border-2 p-4 flex flex-col gap-3
    hover:border-black transition cursor-pointer
    ${selected ? "border-black" : "border-neutral-200"}
    `}
    >
      <div></div>
    </div>
  )
}

export default CategoryInput
