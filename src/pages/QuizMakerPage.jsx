import { useState } from "react";
import PageTitle from "../components/PageTitle";
import Quiz from "../components/Quiz";
import QuizSelectionForm from "../components/QuizSelectionForm";
import { useNavigate } from "react-router-dom";

const QuizMakerPage = () => {
    const navigate = useNavigate();
    const handleSubmit = (questions) => {
        navigate("results", {state: {questions}});
    }
    const [quizConfiguration, setQuizConfiguration] = useState();
    return (
        <>
            <PageTitle title="QUIZ MAKER"/>
            <QuizSelectionForm handleSelection={setQuizConfiguration}/>
            {quizConfiguration
                && <Quiz 
                    key={quizConfiguration.id}
                    handleSubmit={handleSubmit}
                    quizConfiguration={quizConfiguration}/>}
        </>
    );
}
export default QuizMakerPage;