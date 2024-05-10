// styles
import { colors, sizes } from '../Styles/Styles';

interface IProps {
    type?: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    handleClick?: () => void;
    size?: string;
    color?: string;
    position?: string;
}

export default function Button({
    type = 'button',
    children,
    handleClick,
    size = sizes.medium,
    color = colors.black,
    position,
}: IProps) {
    return (
        <button
            type={type}
            onClick={handleClick}
            className={`duration-150 border-[1px] border-[transparent] duration-150 rounded ${size} ${color} ${position} hover:border-[transparent] hover:opacity-75`}
        >
            {children}
        </button>
    );
}
