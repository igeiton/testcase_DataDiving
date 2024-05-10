// api
import { useGetUsersQuery } from '../../Store/Api/usersApi';
// components
import UserCard from '../UI/UserComponents/UserCard';

export interface IUser {
    id: string;
    created_at: string;
    avatar: string;
    last_name: string;
    first_name: string;
    middle_name: string;
    email: string;
    about_self: string;
}

export default function UsersPage() {
    // hooks
    const { data = [] as IUser[], isFetching } = useGetUsersQuery('');

    if (isFetching) return null;

    return (
        <>
            {data.map((user: IUser) => (
                <UserCard key={user.id} moreInfo={false} user={user} />
            ))}
        </>
    );
}
