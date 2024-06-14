import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import Results from "../components/Results";
import Score from "../components/Score";
import NewQuizButton from "../components/NewQuizButton";

const ResultsPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const questions = location.state?.questions || [];
    const goToHome = () => navigate("/");
    useEffect(() => {
        if(questions.length === 0) {
            window.location = "/";
        }
    }, [questions.length]);

    const total = questions.length;
    const correct = questions
        .flatMap(question => question.answers)
        .filter(answer => answer.isSelected && answer.isCorrect)
        .length;
    
    return (<>
        <PageTitle title="RESULTS"/>
        <Results questions={questions}/>
        <Score correct={correct} total={total}/>
        <NewQuizButton handleSubmit={goToHome}/>
    </>);
}
export default ResultsPage;