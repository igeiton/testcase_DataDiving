// hooks
import { useState } from 'react';
// api
import { useUpdateUserMutation } from '../../Store/Api/usersApi';
// components
import Modal from '../UI/Container/Modal';
import Button from '../UI/UserComponents/Button';
import Form from '../Users/AddUser/Form';
// styles
import { colors } from '../UI/Styles/Styles';
// types
import { IUser } from '../Users/Users';

interface IProps {
    user: IUser;
    users: IUser[];
    id: string | undefined;
}

export default function EditUser({ user, users, id }: IProps) {
    // hooks
    const [isOpenModal, setOpenModal] = useState<boolean>(false);

    const [updateUser] = useUpdateUserMutation();

    // dispatch
    const handleUpdateUser = (values: IUser): void => {
        updateUser({ id, body: JSON.stringify(values) });
    };

    return (
        <>
            <Button
                color={colors.amber500}
                handleClick={() => setOpenModal(true)}
            >
                Edit user
            </Button>

            {isOpenModal && (
                <Modal closeModel={() => setOpenModal(false)}>
                    <Form
                        closeModel={() => setOpenModal(false)}
                        user={user}
                        handleMethod={handleUpdateUser}
                        users={users}
                        unique={false}
                    />
                </Modal>
            )}
        </>
    );
}
