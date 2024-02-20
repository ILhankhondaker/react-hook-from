
const FieldSet = ({ label, children }) => {
    return (
        <fieldset >
            {label && <legend
                className="text-xl font-bold mb-2 text-center"
            >{label}</legend>}
            <div
                className="flex flex-col justify-between self-start"
            >
                {children}
            </div>
        </fieldset>
    );
};

export default FieldSet;