"use client"

import axios from "axios"
import { useCallback, useState } from "react"
import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from "react-icons/Fc"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import useRegisterModal from "@/@hooks/useRegisterModal"
import Modal from "./Modal"
import Heading from "../Heading"
import Input from "../Inputs/Input"
import { toast } from "react-hot-toast"
import Button from "../Button"

const RegisterModal = () => {
  const registerModal = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    axios
      .post("/api/register/register", data)
      .then(() => {
        registerModal.onClose()
      })
      .catch((error) => {
        console.log(error)
        toast.error("Something went wrong")
      })
      .finally(() => {
        setIsLoading(false)
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
        subtitle={"Restay의 회원이 되시고 혜택을 받아가세요."}
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
        id={"name"}
        label={"Name"}
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
          <div>이미 계정이 있으신가요?</div>
          <div
            onClick={registerModal.onClose}
            className="
            text-black
          cursor-pointer
          hover:underline
          "
          >
            로그인
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title={"회원가입"}
      actionLabel={"회원가입"}
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default RegisterModal
