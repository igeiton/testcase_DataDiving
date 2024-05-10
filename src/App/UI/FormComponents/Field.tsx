// functions
import { getImageUrl } from '../../../assets/GetImageUrl';
// components
import ToolTip from '../Helpers/ToolTip';
// styles
import { imgSizes } from '../Styles/Styles';

interface IProps {
    props: any;
    name: string;
    title: string;
    children: JSX.Element;
}

export default function Field({ props, name, title, children }: IProps) {
    return (
        <div>
            <div className="relative flex items-center justify-between">
                <label htmlFor="name" className="my-[10px] opacity-50">
                    {title}
                </label>

                <div
                    className={`top-0 right-[50%] cursor-pointer m-[10px] duration-300 ${
                        props.errors[name] ? 'scale-100' : 'scale-0'
                    }`}
                >
                    <ToolTip
                        title={props.errors[name] ? props.errors[name] : ''}
                    >
                        <img
                            className={imgSizes.small}
                            src={getImageUrl('help.png')}
                            alt="#"
                        />
                    </ToolTip>
                </div>
            </div>

            {children}
        </div>
    );
}
