import { React } from 'react';

const CreateQuizButton = ({handleClick, clickable}) =>
{
    return <button className="button" onClick={handleClick} disabled={!clickable}>Create</button>;
}

export default CreateQuizButton;