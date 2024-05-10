// api
import { useGetUsersQuery } from '../../Store/Api/usersApi';
// components
import UserCard from '../UI/UserComponents/UserCard';
import AddButton from './AddUser/NewUser';
import Select from './DeleteUsers/Select';

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

    // if (!data.length)
    // return <div className="self-center">{'No citties :('}</div>;

    return (
        <>
            <section className="flex justify-between items-start w-full">
                <AddButton />

                <Select hasUsers={data.length > 0} />
            </section>
            {data.length ? (
                data.map((user: IUser) => (
                    <UserCard key={user.id} moreInfo={false} user={user} />
                ))
            ) : (
                <div className="self-center">{'No citties :('}</div>
            )}
        </>
    );
}
