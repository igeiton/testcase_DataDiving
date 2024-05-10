// hooks
import { useAppDispatch, useAppSelector } from '../../../../Store/store';
// api
import { useGetUsersQuery } from '../../../../Store/Api/usersApi';
// slices
import { ISelectedUsers, selectAll } from '../../../../Store/Slices/usersSlice';
// styles
import { colors, sizes } from '../../../UI/Styles/Styles';
// components
import Button from '../../../UI/UserComponents/Button';
// types
import { IUser } from '../../Users';

export default function SelectAll() {
    // hooks
    const { selectedUsers } = useAppSelector((state) => state.users);

    const { data: users = [] as IUser[], isSuccess } = useGetUsersQuery('');

    const dispatch = useAppDispatch();

    // dispatch
    const handleSelectAll = (): void => {
        if (isSuccess) {
            let selects: ISelectedUsers[];

            if (selectedUsers.length !== users.length) {
                selects = users.map((user: any) => {
                    return {
                        id: user.id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        middle_name: user.middle_name,
                    };
                });
            } else {
                selects = [];
            }

            dispatch(selectAll(selects));
        }
    };

    return (
        <Button
            handleClick={handleSelectAll}
            color={
                selectedUsers.length === users.length
                    ? colors.blue300
                    : colors.blue500
            }
            size={sizes.small}
        >
            {selectedUsers.length === users.length
                ? 'Unselect All'
                : 'Select All'}
        </Button>
    );
}
