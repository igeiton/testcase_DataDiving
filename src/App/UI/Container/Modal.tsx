// components
import CloseButton from '../FormComponents/CloseButton';

interface IProps {
    closeModel: () => void;
    children: JSX.Element | JSX.Element[];
}

export default function Modal({ closeModel, children }: IProps) {
    // #1 can do this for example
    // document.body.style.overflow = 'hidden';

    return (
        <section className="overflow-auto fixed left-0 top-0 b-0 w-full h-full max-w-[100vw] flex items-start py-[50px] justify-center bg-[#000]/[.5] z-50">
            <div className="relative bg-[white] rounded p-[30px_60px] max-w-[75vw] shadow-[0_0_50px_5px_rgba(0,0,0,0.3)]">
                <CloseButton
                    handleClick={() => {
                        closeModel();
                        // #1 can do this for example
                        // document.body.style.overflow = 'auto';
                    }}
                />

                {children}
            </div>
        </section>
    );
}
