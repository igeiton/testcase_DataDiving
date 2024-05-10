// hooks
import { useState } from 'react';

interface IProps {
    _id: string;
    size?: string;
    className?: string;
    onClick?: () => void;
    alt: string;
}

export default function Avatar({ _id, size, className, onClick, alt }: IProps) {
    const [loaded, setLoaded] = useState<boolean>(false);

    return (
        <div
            className={`relative flex flex-col items-center justify-center duration-1000 border-[3px] rounded-[50%] ${size} ${className}`}
            onClick={onClick}
        >
            <img
                src={`https://cataas.com/cat/${_id}`}
                onLoad={() => setLoaded(true)}
                alt={alt}
                className={`rounded-[50%] h-[100%] flex w-[100%] opacity-0 duration-1000 ${
                    loaded ? 'opacity-100' : '0'
                }`}
            />
        </div>
    );
}
