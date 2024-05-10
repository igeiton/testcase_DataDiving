// components
import ToolTip from './ToolTip';

export default function Component() {
    return (
        <>
            <ToolTip
                title="Title 1"
                text="lorem ipsum lorem asda sdasdad asd asdipsum lorem ipsum lorem ipsum!"
                delay={100}
            >
                <button className="btn">Some button</button>
            </ToolTip>

            <ToolTip title="Title 2" text="Not lorem ipsum" delay={1000}>
                <div className="cursor-pointer">hover me</div>
            </ToolTip>
        </>
    );
}
