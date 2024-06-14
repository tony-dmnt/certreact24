import QuestionLabel from "./QuestionLabel";
import AnswerList from "./AnswerList";

const QuizQuestion = ({question, displayResult, handleAnswerSelection}) => {
    return (
        <>
            <QuestionLabel label={question.label}/>
            <AnswerList
                answers={question.answers}
                displayResult={displayResult}
                handleAnswerSelection={(answer) => handleAnswerSelection(question, answer)}/>
        </>
    );
}
export default QuizQuestion;