"use client"

import axios from "axios"
import { signIn } from "next-auth/react"
import { useCallback, useState } from "react"
import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from "react-icons/Fc"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import useLoginModal from "@/@hooks/useLoginModal"
import Modal from "./Modal"
import Heading from "../Heading"
import Input from "../Inputs/Input"
import { toast } from "react-hot-toast"
import Button from "../Button"
import { useRouter } from "next/navigation"

const LoginModal = () => {
  const router = useRouter()
  const loginModal = useLoginModal()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false)

      if (callback?.ok) {
        toast.success("만나서 반가워요!🖐")
        router.refresh()
        loginModal.onClose()
      }

      if (callback?.error) {
        toast.error(callback.error)
      }
    })
  }

  const bodyContent = (
    <div
      className="
    flex
    flex-col
    gap-4
    "
    >
      <Heading
        title={"Restay에 온걸 환영합니다."}
        subtitle={"이메일,비밀번호를 입력하세요."}
      />
      <Input
        id={"email"}
        label={"Email"}
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id={"password"}
        label={"Password"}
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  const footerContent = (
    <div
      className="
      flex
      flex-col
      gap-4
      mt-3
      "
    >
      <Button
        outline
        label={"Continue with Google"}
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label={"Continue with Github"}
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div
        className="
      text-neutral-500
      text-center
      mt-4
      font-light
      "
      >
        <div
          className="
        flex
        flex-row
        items-center
        gap-2
        justify-center
        "
        >
          <div>비밀번호가 기억이 나지 않으신가요?</div>
          <div
            onClick={loginModal.onClose}
            className="
            text-black
          cursor-pointer
          hover:underline
          "
          >
            비밀번호 찾기
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title={"로그인"}
      actionLabel={"로그인"}
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default LoginModal
