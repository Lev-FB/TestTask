import './Button.css'

interface Props {
    className :string,
    onClick :()=>void,
    title:string
}

const Button = ({className,onClick,title}:Props) =>{
    return <button type='button' onClick={onClick} className={className}>
        {
            title
        }
    </button>



}

export default Button