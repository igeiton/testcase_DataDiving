// hooks
import { useEffect, useRef, useState } from 'react';
// styles
import { colors } from '../Styles/Styles';

interface IProps {
    children?: JSX.Element | string;
    title: string;
    text?: string;
    delay?: number;
    delayVisible?: boolean;
}

type Side = 'top' | 'bottom' | 'left' | 'right';

export default function ToolTip({
    children,
    title,
    text,
    delay,
    delayVisible,
}: IProps) {
    // hooks
    const [isVisible, setVisible] = useState<boolean>(false);

    const main = useRef<null | HTMLDivElement>(null);
    const tooltip = useRef<null | HTMLDivElement>(null);
    const timer = useRef<null | any>(null);

    // mouse events
    const handleMouseEnter = (): void => {
        timer.current = setTimeout(() => {
            setVisible(true);
        }, delay);
    };

    const handleMouseLeave = (): void => {
        clearTimeout(timer.current);
        setVisible(false);
    };

    // functions
    const getSize = (side: Side, offset: number): void => {
        if (tooltip.current) {
            tooltip.current.style[side] = `${offset}px`;
        }
    };

    // useEffect
    useEffect(() => {
        if (tooltip.current && main.current) {
            const { left, right, height, width }: DOMRect =
                tooltip.current.getBoundingClientRect();

            const mainBCR: DOMRect = main.current.getBoundingClientRect();

            if (right > window.innerWidth) {
                getSize('right', 0);
            }

            if (left < 0) {
                getSize('left', 0);
            }

            if (mainBCR.bottom + height > window.innerHeight) {
                getSize('top', -height - 10);
            } else {
                getSize('bottom', -height - 10);
            }

            if (width + 30 > window.innerWidth) {
                tooltip.current.style.whiteSpace = 'normal';
                tooltip.current.style.width = `100vw`;

                getSize('left', -mainBCR.left);

                if (mainBCR.bottom + height > window.innerHeight) {
                    getSize('top', -height - 30);
                } else {
                    getSize('bottom', -height - 30);
                }
            }
        }
    }, [isVisible]);

    return (
        <div
            ref={main}
            className="relative mr-auto flex flex-col items-center justify-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}

            {isVisible && title && (
                <div
                    className={`absolute box-border ${colors.grey} text-[75%] rounded p-[10px] shadow-lg m-[-10px_0px] whitespace-nowrap z-[100]`}
                    ref={tooltip}
                >
                    <div>{title}</div>
                    <div>{text}</div>
                    {delayVisible && <div>{delay}</div>}
                </div>
            )}
        </div>
    );
}
