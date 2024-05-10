// styles
import { colors } from '../Styles/Styles';

interface IProps {
    children: JSX.Element;
}

export default function Container({ children }: IProps) {
    return (
        <section
            className={`p-[15px] w-full max-w-[900px] self-center ${colors.white} rounded flex flex-col gap-[15px]`}
        >
            {children}
        </section>
    );
}
