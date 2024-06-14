import QuestionLabel from "./QuestionLabel";
import AnswerList from "./AnswerList";

const QuizQuestion = ({question, handleAnswerSelection}) => {
    return (
        <>
            <QuestionLabel label={question.label}/>
            <AnswerList 
                answers={question.answers}
                handleAnswerSelection={(answer) => handleAnswerSelection(question, answer)}/>
        </>
    );
}
export default QuizQuestion;