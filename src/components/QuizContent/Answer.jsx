const Answer = ({answer, handleClick}) => {
    const selectedClass = answer.isSelected ? 'answer-selected' : '';
    return (
        <button
            className={`button answer ${selectedClass}`}
            dangerouslySetInnerHTML={{__html: answer.label}}
            onClick={() => handleClick(answer)}
            />
    );
}
export default Answer;