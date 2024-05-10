// styles
import { colors, imgSizes } from '../Styles/Styles';

interface IProps {
    onClick: () => void;
    checked: boolean;
}

export default function Checkbox({ onClick, checked }: IProps) {
    return (
        <div
            onClick={onClick}
            className={`flex items-center justify-center rounded border-[1px] cursor-pointer shadow-sm ${
                imgSizes.small
            } ${checked ? colors.blue500 : 'transparent'}`}
        >
            {checked && '✓'}
        </div>
    );
}
