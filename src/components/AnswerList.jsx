import Answer from "./Answer";

const AnswerList = ({answers, displayResult, handleAnswerSelection}) => {
    return (
        <>
            {
                answers.map(
                    answer => 
                    <Answer 
                        key={answer.id}
                        answer={answer}
                        displayResult={displayResult}
                        handleClick={handleAnswerSelection}
                    />
                )
            }
        </>
    );
}
export default AnswerList;