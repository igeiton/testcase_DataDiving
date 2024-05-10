// hooks
import { useState } from 'react';
// components
import Modal from '../../../../UI/Container/Modal';
import Button from '../../../../UI/UserComponents/Button';
import ConfirmDelete from './ConfirmDelete';
// styles
import { colors, sizes } from '../../../../UI/Styles/Styles';

export default function Delete() {
    // hooks
    const [isOpenModal, setOpenModel] = useState<boolean>(false);

    return (
        <>
            <Button
                size={sizes.small}
                color={colors.red500}
                handleClick={() => setOpenModel(true)}
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
