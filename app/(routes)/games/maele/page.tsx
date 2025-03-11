'use client'

import { useState } from 'react'
import { Button } from '@/app/components/ui/button'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/app/components/ui/card'
import { Background } from '@/app/components/shared/games/background'
import { LevelIndicator } from '@/app/components/shared/games/level-indicator'
import useRandomQuestion from '@/app/hooks/use-generate-question'
import { useShuffledOptions } from '@/app/hooks/use-shuffle-options'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { LucideArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useAudio } from 'react-use'
import ConfettiButton from '@/app/components/shared/confetti'

export default function QuizApp() {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
    const [currentLevel, setCurrentLevel] = useState(0)
    const { chosenQuestion: question, options } =
        useRandomQuestion(currentLevel)
    const [answerChecked, setAnswerChecked] = useState(false)
    const [showResults, setShowResults] = useState(false)
    const [quizResult, setQuizResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    })
    const [isVisible, setIsVisible] = useState(false)
    const maxLevel = 2
    const quizItem = question
    const quizQuestion = quizItem?.phrase

    const [audio, state, controls, ref] = useAudio({
        src: 'http://localhost:3000/Win%20sound.wav',
        autoPlay: false,
    })
    const [wrong_audio, wrong_state, wrong_controls, wrong_ref] = useAudio({
        src: 'http://localhost:3000/wrong.mp3',
        autoPlay: false,
    })
    const handleAnswerSelect = (answer: string) => {
        setSelectedAnswer(answer)
    }

    const router = useRouter()
    const showCorrectSwal = () => {
        controls.play()
        withReactContent(Swal)
            .fire({
                title: 'Congratulations',
                text: 'You got the correct answer',
                icon: 'success',
                confirmButtonText: 'Next Question',
            })
            .then(() => {
                setCurrentLevel((prev) => Math.min(prev + 1, maxLevel))
            })
    }
    const showIncorrectSwal = () => {
        wrong_controls.play()
        withReactContent(Swal)
            .fire({
                title: 'Error',
                text: 'You got the answer wrong',
                icon: 'error',
                confirmButtonText: 'Next Question',
            })
            .then(() => {
                setCurrentLevel((prev) => Math.min(prev + 1, maxLevel))
            })
    }

    const checkAnswers = () => {
        // Logic to check answers and update quizResult
        setQuizResult((prev) => ({
            ...prev,
            correctAnswers: prev.correctAnswers + 0, // Example logic
            score: prev.score + 0, // Example logic
        }))
    }

    const displayResults = () => {
        withReactContent(Swal).fire({
            title: 'Quiz Results',
            html: `
        <p>Score: ${quizResult.score}</p>
        <p>Correct Answers: ${quizResult.correctAnswers}</p>
        <p>Wrong Answers: ${quizResult.wrongAnswers}</p>
      `,
            icon: 'success',
            confirmButtonText: 'OK',
        })
    }

    const handleSubmit = () => {
        if (selectedAnswer) {
            setAnswerChecked(true)
            if (selectedAnswer === question?.meaning) {
                setQuizResult((prev) => ({
                    ...prev,
                    correctAnswers: prev.correctAnswers + 1,
                    score: prev.score + 1,
                }))
                showCorrectSwal()
            } else {
                setQuizResult((prev) => ({
                    ...prev,
                    wrongAnswers: prev.wrongAnswers + 1,
                }))
                showIncorrectSwal()
            }
            setSelectedAnswer(null)
            if (currentLevel === maxLevel - 1) {
                setShowResults(true)
                checkAnswers()
            }
        }
    }

    const allOptions = useShuffledOptions(question, options)

    const completed = currentLevel == maxLevel

    return (
        <div className="flex items-center justify-center mt-12 bg-white relative overflow-hidden">
            <Background />
            {audio}
            {wrong_audio}
            {isVisible && <ConfettiButton />}
            <Card className="w-full max-w-lg mx-4 bg-white/90 border border-gray-200 shadow-xl backdrop-blur-sm relative z-10">
                <CardHeader>
                    <CardTitle className="text-xl font-bold text-center text-gray-800">
                        <div className="flex items-center">
                            <Button
                                onClick={() => router.back()}
                                variant={'ghost'}
                                size="icon"
                                className="mb-9"
                            >
                                <LucideArrowLeft size={20} />
                            </Button>
                            <div className="justify-center w-full">
                                <div className="text-3xl">Maele A Setswana</div>
                                <div className="">Quiz</div>
                            </div>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {completed ? (
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-800">
                                Game Complete!
                            </h2>
                            <p className="text-lg text-gray-700"></p>
                            <Button
                                onClick={() => {
                                    setIsVisible(true)
                                    displayResults()
                                }}
                                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all"
                            >
                                Show Results
                            </Button>
                        </div>
                    ) : (
                        <>
                            <LevelIndicator
                                currentLevel={currentLevel}
                                maxLevel={maxLevel}
                            />
                            <p className="mb-6 text-lg font-medium text-center text-gray-700">
                                {quizQuestion}
                                <div className="text-white text-xs">
                                    {question?.meaning}
                                </div>
                            </p>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {allOptions.map((answer, index) => (
                                    <Button
                                        key={index}
                                        variant={
                                            selectedAnswer === answer?.meaning
                                                ? 'default'
                                                : 'outline'
                                        }
                                        className={`h-20 flex flex-col py-4 px-6 text-left transition-all text-wrap text-center ${
                                            selectedAnswer === answer?.meaning
                                                ? 'bg-purple-600 text-white'
                                                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                                        }`}
                                        onClick={() =>
                                            handleAnswerSelect(answer!.meaning)
                                        }
                                    >
                                        {answer?.meaning}
                                    </Button>
                                ))}
                            </div>
                        </>
                    )}
                </CardContent>
                <CardFooter className="flex justify-center">
                    {!completed && (
                        <Button
                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all"
                            disabled={!selectedAnswer}
                            onClick={handleSubmit}
                        >
                            Submit Answer
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </div>
    )
}
