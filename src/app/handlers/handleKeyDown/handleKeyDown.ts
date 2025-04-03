import { handleKeyDownProps } from '@/app/types/handlers/handleKeyDown.d';

/**
 * タイピングゲームのキー入力を処理する関数
 * 
 * @param {Object} props - 関数の引数オブジェクト
 * @param {KeyboardEvent} props.e - キーボードイベント
 * @param {Questions} props.Questions - 問題のリスト
 * @param {number} props.currentQuestionIndex - 現在の問題インデックス
 * @param {Dispatch<SetStateAction<number>>} props.setCurrentQuestionIndex - 問題インデックスの更新関数
 * @param {number} props.currentPostion - 現在の文字位置
 * @param {Dispatch<SetStateAction<number>>} props.setCurrentPosition - 文字位置の更新関数
 * @param {Dispatch<SetStateAction<boolean>>} props.setIsFinished - 終了状態の更新関数
 */

export const handleKeyDown = ({
    e,
    Questions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    currentPostion,
    setCurrentPosition,
    setIsFinished
}: handleKeyDownProps) => {
    const currentQuestion = Questions[currentQuestionIndex]
    if(e.key.toLowerCase() === currentQuestion.answer[currentPostion]?.toLocaleLowerCase()) {
      setCurrentPosition(prev => prev + 1)
    }

    if(currentPostion === currentQuestion.answer.length - 1) {
      if(currentQuestionIndex === Questions.length - 1) {
        setIsFinished(true)
      } else {
        setCurrentPosition(0)
        setCurrentQuestionIndex(prev => prev + 1)
      }
    }
  }