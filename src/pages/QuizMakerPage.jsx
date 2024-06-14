import { useState } from "react";
import PageTitle from "../components/PageTitle";
import QuizContent from "../components/QuizContent/QuizContent";
import QuizSelectionForm from "../components/QuizSelection/QuizSelectionForm";

const QuizMakerPage = () => {
    const [quizConfiguration, setQuizConfiguration] = useState();
    return (
        <>
            <PageTitle title="QUIZ MAKER"/>
            <QuizSelectionForm handleSelection={setQuizConfiguration}/>
            {quizConfiguration && <QuizContent key={quizConfiguration.id} quizConfiguration={quizConfiguration}/>}
        </>
    );
}
export default QuizMakerPage;