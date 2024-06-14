import { useEffect, useState } from "react";
import QuizQuestion from "./QuizQuestion";
import { v4 as uuid } from "uuid";
import SubmitButton from "./SubmitButton";

const AMOUNT_QUESTIONS = 5;

const QuizContent = ({quizConfiguration}) => {
    const [questions, setQuestions] = useState([]);

    const mapQuestion = (apiQuestion) => {
        let correctAnswer = mapAnswer(apiQuestion.correct_answer);
        correctAnswer.isCorrect = true;
        let incorrectAnswers = apiQuestion.incorrect_answers.map(mapAnswer);
        let answers = [correctAnswer, ...incorrectAnswers].sort(() => Math.random() - 0.5);
        return {
            id: uuid(),
            label: apiQuestion.question,
            answers,
            responseId: correctAnswer.id,
        }
    }
    const mapAnswer = (apiAnswer) => {
        return {
            label: apiAnswer,
            id: uuid(),
        };
    }
    const handleAnswerSelection = (question, answer) => {
        let indexQuestion = questions.findIndex((element) => element.id === question.id);
        let updatedQuestions = [...questions];
        question.selectedAnswer = answer;
        question.answers.forEach((element) => element.isSelected = element.id === answer.id)
        updatedQuestions[indexQuestion] = question;
        setQuestions(updatedQuestions);
    }

    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=${AMOUNT_QUESTIONS}&category=${quizConfiguration.category}&difficulty=${quizConfiguration.difficulty}&type=multiple`)
        .then(response => response?.json())
        .then(json => json?.results)
        .then(apiQuestions => apiQuestions || [])
        .then(apiQuestions => apiQuestions.map(mapQuestion))
        .then(apiQuestions => {
            setQuestions(apiQuestions || []);
        })
    }, []);
    const isFinished = questions.filter(question => !!question.selectedAnswer).length >= AMOUNT_QUESTIONS;
    return (
        <>
            {
                questions.map(question =>
                    <QuizQuestion
                        key={question.id}
                        question={question}
                        handleAnswerSelection={handleAnswerSelection}
                        />
                )
            }
            {isFinished && <SubmitButton/>}
        </>
    );
}
export default QuizContent;