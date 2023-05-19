"use client"

import useRentModal from "@/@hooks/useRentModal"
import Modal from "./Modal"
import { useMemo, useState } from "react"
import Heading from "../Heading"
import { categories } from "../Header/Categories"
import CategoryInput from "../Inputs/CategoryInput"

//enum은 관련된 상수들을 그룹화하고 식별하기 위해 사용됩니다. 특히, enum은 서로 연관된 상수의 집합을 정의하는 데 유용합니다. 이렇게 정의된 enum은 TypeScript 코드에서 해당 상수를 사용할 수 있게 되며, 가독성과 유지보수의 편의성을 높여줍니다.
//TypeScript에서는 enum 상수에 대한 값을 따로 지정하지 않으면, 0부터 시작하여 순차적인 값(0, 1, 2, ...)이 자동으로 할당됩니다
enum STEPS {
  CATEGORY,
  LOCATION,
  INFO,
  IMAGES,
  DESCRIPTION,
  PRICE,
}

const RentModal = () => {
  const rentModal = useRentModal()
  const [step, setStep] = useState(STEPS.CATEGORY)

  const onBack = () => {
    setStep((value) => value - 1)
  }
  const onNext = () => {
    setStep((value) => value + 1)
  }

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "Create"
    }

    return "Next"
  }, [step])

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined
    }

    return "Back"
  }, [step])

  const bodyContent = (
    <div
      className="
    flex flex-col gap-8
    "
    >
      <Heading
        title="어떤 장소를 공유하실건가요?"
        subtitle="카테고리를 골라주세요"
      />
      <div
        className="
      grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto
      "
      >
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={() => {}}
              selected={false}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <Modal
      isOpen={rentModal.isOpen}
      title={"Restay할 준비가 되셨나요?"}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      actionLabel={actionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      secondaryActionLabel={secondaryActionLabel}
      body={bodyContent}
    />
  )
}

export default RentModal
