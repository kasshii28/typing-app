import { Questions } from "@/app/types/questions";
import { Dispatch, SetStateAction } from "react";

export interface handleKeyDownProps {
    e: KeyboardEvent;
    Questions: Questions;
    currentQuestionIndex: number;
    setCurrentQuestionIndex: Dispatch<SetStateAction<number>>;
    currentPostion: number;
    setCurrentPosition: Dispatch<SetStateAction<number>>;
    setIsFinished: Dispatch<SetStateAction<boolean>>;
}