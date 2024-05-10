// hooks
import { useNavigate, useParams } from 'react-router-dom';
// api
import { useGetUsersQuery } from '../../Store/Api/usersApi';
// components
import Container from '../UI/Container/Container';
import Button from '../UI/UserComponents/Button';
import UserCard from '../UI/UserComponents/UserCard';
import DeleteUser from './DeleteUser';
import EditUser from './EditUser';
// styles
import { colors } from '../UI/Styles/Styles';
// types
import { IUser } from '../Users/Users';

export default function User() {
    // hooks
    const { data: users = [] as IUser[], isSuccess } = useGetUsersQuery('');

    const { id } = useParams();

    const navigate = useNavigate();

    // variables
    const user: IUser = users.find((user: any) => user.id === id);

    if (!isSuccess) return null;

    return (
        <Container>
            <>
                <Button
                    color={colors.grey}
                    position={'self-start'}
                    handleClick={() => navigate('/')}
                >
                    To users
                </Button>

                <UserCard user={user} users={users} moreInfo={true} />

                <section className="flex justify-end gap-[15px]">
                    <EditUser user={user} users={users} id={id} />

                    <DeleteUser user={user} />
                </section>
            </>
        </Container>
    );
}
