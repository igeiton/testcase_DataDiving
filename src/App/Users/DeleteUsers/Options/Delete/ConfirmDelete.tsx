// hooks
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../Store/store';
// api
import { useDeleteUserMutation } from '../../../../../Store/Api/usersApi';
// slices
import {
    selectAll,
    toggleShowSelect,
} from '../../../../../Store/Slices/usersSlice';
// styles
import { colors } from '../../../../UI/Styles/Styles';
// components
import Button from '../../../../UI/UserComponents/Button';

interface IPros {
    closeModel: () => void;
}

export default function ConfirmDelete({ closeModel }: IPros) {
    // hooks
    const { selectedUsers } = useAppSelector((state) => state.users);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const [deleteUser] = useDeleteUserMutation();

    // dispatch
    const handleDelete = (): void => {
        for (let i = 0; i < selectedUsers.length; i++) {
            deleteUser(selectedUsers[i].id);
        }

        dispatch(selectAll([]));
        dispatch(toggleShowSelect(false));

        navigate('/');
    };

    return (
        <div className="flex flex-col gap-[25px] items-center w-[500px] max-w-[100%]">
            <div>Are you sure you want to delete these users?</div>

            {selectedUsers.map((user: any) => (
                <div
                    key={user.id}
                    className="bg-[#1976d2] rounded-[15px] p-[5px_10px] text-[#fff] text-center w-full"
                >
                    {user.first_name} {user.last_name} {user.middle_name}
                </div>
            ))}

            <Button
                handleClick={() => {
                    handleDelete();
                    closeModel();
                }}
                color={colors.red500}
            >
                Confirm Delete
            </Button>
        </div>
    );
}
