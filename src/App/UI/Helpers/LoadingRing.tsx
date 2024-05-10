// functions
import { getImageUrl } from '../../../assets/GetImageUrl';
// styles
import { imgSizes } from '../Styles/Styles';

export default function LoadingRing() {
    return (
        <div className={imgSizes.small}>
            <img
                className="fixed top-[50%] animate-spin"
                src={getImageUrl('loadingRing.png')}
                alt=""
            />
        </div>
    );
}
