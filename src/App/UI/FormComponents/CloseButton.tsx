// functions
import { getImageUrl } from '../../../assets/GetImageUrl';
// styles
import { imgSizes } from '../Styles/Styles';

interface IProps {
    handleClick: () => void;
}

export default function CloseButton({ handleClick }: IProps) {
    return (
        <div
            onClick={handleClick}
            className="absolute top-0 right-0 p-[10px] cursor-pointer"
        >
            <img
                className={imgSizes.small}
                src={getImageUrl('close.png')}
                alt=""
            />
        </div>
    );
}
