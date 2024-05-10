// hooks
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../Store/store';
// slices
import { selectAll, toggleShowSelect } from '../../../Store/Slices/usersSlice';

interface IProps {
    id: string;
    last_name: string;
    first_name: string;
    middle_name: string;
    email: string;
    about_self: string;
    moreInfo: boolean;
}

export default function Info({
    id,
    last_name,
    first_name,
    middle_name,
    email,
    about_self,
    moreInfo,
}: IProps) {
    // hooks
    const { showSelect } = useAppSelector((state) => state.users);

    const navigate = useNavigate();

    const { pathname } = useLocation();

    const dispatch = useAppDispatch();

    // dispatch
    const handleNavigate = (): void => {
        if (pathname === '/') {
            dispatch(selectAll([]));

            if (showSelect) {
                dispatch(toggleShowSelect());
            }

            navigate(`${id}`);
        }
    };

    return (
        <div className="flex flex-col gap-[5px] text-sm flex-1">
            <div
                className={`self-start font-bold flex text-lg duration-150 ${
                    pathname === '/'
                        ? `cursor-pointer hover:underline  hover:text-[#1976d2]`
                        : ''
                }`}
                onClick={handleNavigate}
            >
                {last_name} {first_name} {middle_name}
            </div>

            <div>
                <div className="opacity-50">Email</div>
                {email}
            </div>

            {moreInfo && (
                <div>
                    <div className="opacity-50">About me</div>
                    {about_self}
                </div>

                //// or do this
                // <div>
                //     <div className="opacity-50">About me</div>
                //     <pre>{about_self}</pre>
                // </div>
            )}
        </div>
    );
}
