// hooks
import { useEffect, useRef } from 'react';

interface IProps {
    props: any;
    name: string;
}

export default function Textarea({ props, name }: IProps) {
    const ref = useRef<null | HTMLTextAreaElement>(null);

    const handleResize = (): void => {
        if (ref.current) {
            ref.current.style.resize = 'none';
            ref.current.style.overflow = 'hidden';
            ref.current.style.height = 'auto';
            ref.current.style.height = `${ref.current.scrollHeight}px`;
            props.setFieldValue(name, ref.current.value);
            // ref.current.scrollIntoView({ block: 'center' });
        }
    };

    useEffect(() => {
        if (ref.current) {
            handleResize();
        }
    }, [ref]);

    return (
        <textarea
            ref={ref}
            name="about_self"
            className="w-full border-[1px] p-[5px] focus:outline-none rounded resize-y"
            value={props.values[name]}
            onChange={handleResize}
        />
    );
}
