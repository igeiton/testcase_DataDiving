interface IProps {
    props: any;
    name: string;
}

export default function Input({ props, name }: IProps) {
    return (
        <input
            id="name"
            name={name}
            className={`duration-300 transition-[border] w-full py-[5px] focus:outline-none ${
                props.errors[name] ? 'border-b border-red-500' : 'border-b'
            }`}
            type="text"
            value={props.values[name]}
            onChange={props.handleChange}
            autoComplete="off"
        />
    );
}
