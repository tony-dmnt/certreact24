import { React } from 'react';

const CreateQuizButton = ({handleClick, clickable, id}) =>
{
    return <button id={id} className="button" onClick={handleClick} disabled={!clickable}>Create</button>;
}

export default CreateQuizButton;