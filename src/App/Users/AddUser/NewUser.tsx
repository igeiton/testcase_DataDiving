// hooks
import { useState } from 'react';
// api
import {
    useCreateUserMutation,
    useGetUsersQuery,
} from '../../../Store/Api/usersApi';
// components
import Modal from '../../UI/Container/Modal';
import Button from '../../UI/UserComponents/Button';
import Form from './Form';
// types
import { IUser } from '../Users';

export default function AddButton() {
    // hooks
    const [isOpenModal, setOpenModal] = useState<boolean>(false);

    const { data: users = [], isSuccess: isUsersSuccess } =
        useGetUsersQuery('');

    const [createUser] = useCreateUserMutation();

    // functions
    const handleCreateUser = (values: IUser): void => {
        if (isUsersSuccess) {
            const newUser = {
                id: users.length
                    ? (Number(users[users.length - 1].id) + 1).toString()
                    : '1',
                created_at: new Date(),
                avatar: values.avatar,
                last_name: values.last_name,
                first_name: values.first_name,
                middle_name: values.middle_name,
                email: values.email,
                about_self: values.about_self,
            };

            createUser(JSON.stringify(newUser));
        }
    };

    return (
        <>
            <Button handleClick={() => setOpenModal(true)}>Add User</Button>

            {isOpenModal && (
                <Modal closeModel={() => setOpenModal(false)}>
                    <Form
                        closeModel={() => setOpenModal(false)}
                        handleMethod={handleCreateUser}
                        users={users}
                    />
                </Modal>
            )}
        </>
    );
}
