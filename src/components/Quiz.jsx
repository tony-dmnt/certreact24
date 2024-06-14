import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import QuizQuestion from "./QuizQuestion";
import SubmitButton from "./SubmitButton";

const AMOUNT_QUESTIONS = 5;

const Quiz = ({quizConfiguration, handleSubmit}) => {
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
        question.answers.forEach((element) => element.isSelected = element.id === answer.id)
        setQuestions([...questions]);
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
    const isFinished = questions.flatMap(question => question.answers).filter(answer => answer.isSelected).length >= AMOUNT_QUESTIONS;
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
            {isFinished && <SubmitButton handleSubmit={() => handleSubmit(questions)}/>}
        </>
    );
}
export default Quiz;