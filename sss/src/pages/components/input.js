export const Input = (props) => {
    const { placeholder, onChange, value } = props

    return (
        <input
            className="Input"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}