interface IStyle {
    [key: string]: string;
}

export const colors = {
    black: 'bg-[black] text-[white]',
    grey: 'bg-[grey] text-[white]',
    white: 'bg-[#E3E3E3] text-[black]',
    blue300: 'bg-blue-300 text-[white]',
    blue500: 'bg-blue-500 text-[white]',
    red300: 'bg-red-300 text-[white]',
    red500: 'bg-red-500 text-[white]',
    amber500: 'bg-amber-500 text-[white]',
} as IStyle;

export const sizes = {
    small: 'text-xs p-[5px_10px]',
    medium: 'text-base p-[10px_20px]',
    large: 'text-xl p-[30px_60px]',
} as IStyle;

export const imgSizes = {
    small: 'w-[25px] h-[25px]',
    medium: 'w-[50px] h-[50px]',
    large: 'w-[100px] h-[100px]',
} as IStyle;
