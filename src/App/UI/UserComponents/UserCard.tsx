// hooks
import { useAppDispatch, useAppSelector } from '../../../Store/store';
// slices
import { toggleSelectedUsers } from '../../../Store/Slices/usersSlice';
// styles
import { imgSizes } from '../Styles/Styles';
// components
import Avatar from './Avatar';
import Checkbox from './Checkbox';
import Info from './Info';
// types
import { IUser } from '../../Users/Users';

export default function UserCard({ user, moreInfo }: any) {
    // hooks
    const { selectedUsers, showSelect } = useAppSelector(
        (state) => state.users
    );

    const dispatch = useAppDispatch();

    // dispatch
    const checkSelected = (user: IUser): void => {
        dispatch(
            toggleSelectedUsers({
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                middle_name: user.middle_name,
            })
        );
    };

    return (
        <section className="flex items-start p-[15px] gap-[15px] bg-[white] rounded shadow-lg">
            <Avatar
                _id={user.avatar}
                size={imgSizes.large}
                alt={user.first_name}
            />

            <Info {...user} moreInfo={moreInfo} />

            {showSelect && (
                <Checkbox
                    onClick={() => checkSelected(user)}
                    checked={
                        !!selectedUsers.find(
                            (selectedUser: any) => selectedUser.id === user.id
                        )
                    }
                />
            )}
        </section>
    );
}
