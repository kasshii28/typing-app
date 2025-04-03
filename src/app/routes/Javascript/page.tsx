'use client'

import React, { useEffect, useState } from 'react'
import { JavaScriptQuestions as Questions } from '@/app/constants/langs/Javascript/questions'
import { handleKeyDown } from '@/app/handlers/handleKeyDown/handleKeyDown'
import { QuestionDisplay } from '@/app/components/QuestionDisplay/QuestionDisplay'

export default function Javascript(){
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
  const [currentPostion, setCurrentPosition] = useState<number>(0)
  const [isFinished, setIsFinished] = useState<boolean>(false)

  useEffect(() => {
    const KeyDownHandler = (e: KeyboardEvent) => {
      handleKeyDown({
        e,
        Questions,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        currentPostion,
        setCurrentPosition,
        setIsFinished
      })
    }
    window.addEventListener('keydown', KeyDownHandler)
    return () => window.removeEventListener('keydown', KeyDownHandler)
  }, [currentPostion, currentQuestionIndex, Questions], )

  if (isFinished) {
    return (
      <div className='text-center text-2xl text-white'>
        You have finished all the questions!
      </div>
    )
  }
  return (
    <QuestionDisplay
      question={Questions[currentQuestionIndex]}
      currentPosition={currentPostion}
    />
  )
}