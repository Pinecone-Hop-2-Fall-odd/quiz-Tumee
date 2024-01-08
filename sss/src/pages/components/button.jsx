export const Button = (props) => {
    const { onClick, value, className } = props;

    return <button className={`border px-3 py-1 bg-lime-100 rounded ${className}`} onClick={onClick}>{value}</button>
}