// hooks
import { useState } from 'react';
import { useAppDispatch } from '../../Store/store';
// slices
import { toggleSelectedUsers } from '../../Store/Slices/usersSlice';
// components
import Modal from '../UI/Container/Modal';
import Button from '../UI/UserComponents/Button';
import ConfirmDelete from '../Users/DeleteUsers/Options/Delete/ConfirmDelete';
// styles
import { colors } from '../UI/Styles/Styles';
// types
import { IUser } from '../Users/Users';

interface IProps {
    user: IUser;
}

export default function DeleteUser({ user }: IProps) {
    // hooks
    const [isOpenModal, setOpenModel] = useState(false);

    const dispatch = useAppDispatch();

    return (
        <>
            <Button
                color={colors.red500}
                handleClick={() => {
                    setOpenModel(true);
                    dispatch(toggleSelectedUsers(user));
                }}
            >
                Delete
            </Button>

            {isOpenModal && (
                <Modal closeModel={() => setOpenModel(false)}>
                    <ConfirmDelete closeModel={() => setOpenModel(false)} />
                </Modal>
            )}
        </>
    );
}
