import { React } from 'react';
import QuizQuestion from "./QuizQuestion";

const Results = ({questions}) =>
{
    return (
        <>
            {
                questions.map(question =>
                    <QuizQuestion
                        key={question.id}
                        question={question}
                        displayResult
                        />
                )
            }
        </>
    );
}

export default Results;