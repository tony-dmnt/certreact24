import FormOption from "./FormOption";

const FormSelect = ({placeholder, options = [], handleSelection, id}) => {
    return (
        <select id={id} className="select" onChange={(event) => handleSelection(event.target.value)}>
            <FormOption value="" label={placeholder}/>
            {
                options.map(
                    (option) => <FormOption key={option.id} value={option.id} label={option.name}/>
                )
            }
        </select>
    )
}
export default FormSelect;