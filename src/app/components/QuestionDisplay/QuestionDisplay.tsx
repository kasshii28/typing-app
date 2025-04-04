import { QuestionDisplayProps } from "@/app/types/components/questionDisplay"
import { FC } from "react"
import clsx from "clsx"

export const QuestionDisplay: FC<QuestionDisplayProps> = ({
  question,
  currentPosition,
}) => {
  return (
    <div className='
      bg-black h-screen
      w-screen flex flex-col
      justify-center items-center 
      gap-10'>
      <div>
        <h1 className='text-3xl text-center text-white translate-y-[-120px]'>
          {question.question}
        </h1>
      </div>
      <div className='text-xl text-center translate-y-[-70px]'>
        {question.answer.split("")
          .map((char, index) => (
            <span key={index}
              className={clsx(
                index < currentPosition ? "text-fuchsia-500" : "text-white"
              )}
            >
              {char}
            </span>
        ))}
      </div>
    </div>
  )
}