import Answer from "./Answer";

const AnswerList = ({answers, handleAnswerSelection}) => {
    return (
        <>
            {
                answers.map(
                    answer => 
                    <Answer 
                        key={answer.id}
                        answer={answer}
                        handleClick={handleAnswerSelection}
                    />
                )
            }
        </>
    );
}
export default AnswerList;