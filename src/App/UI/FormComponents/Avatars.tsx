// hooks
import { useEffect, useState } from 'react';
// api
import { useGetAvatarsQuery } from '../../../Store/Api/avatarsApi';
// components
import Modal from '../Container/Modal';
import Avatar from '../UserComponents/Avatar';
import Button from '../UserComponents/Button';
// styles
import { colors, imgSizes } from '../Styles/Styles';

interface IProps {
    props: any;
}

export default function ChooseAvatars({ props }: IProps) {
    const { data: avatars = [], isSuccess: isAvatarsSuccess } =
        useGetAvatarsQuery(`?limit=12&json=true`);

    const [isOpenModal, setOpenModal] = useState(false);

    useEffect(() => {
        if (isAvatarsSuccess && !props.values.avatar)
            props.setFieldValue('avatar', avatars[0]._id);
    }, [avatars]);

    return (
        <div className="flex flex-col gap-[15px] items-center justify-center">
            {
                <Avatar
                    _id={props.values.avatar}
                    size={imgSizes.large}
                    alt="avatar"
                />
            }

            <Button
                color={colors.blue300}
                handleClick={() => setOpenModal(true)}
            >
                Choose avatar
            </Button>

            {isOpenModal && (
                <Modal closeModel={() => setOpenModal(false)}>
                    <div className="grid grid-cols-[repeat(auto-fit,100px)] auto-rows-[100px] gap-[15px] w-[500px] max-w-[100%] h-full max-h-[100%] justify-center">
                        {isAvatarsSuccess &&
                            avatars.map((avatar: any) => (
                                <Avatar
                                    alt="avatar"
                                    onClick={() => {
                                        props.setFieldValue(
                                            'avatar',
                                            avatar._id
                                        );
                                        setOpenModal(false);
                                    }}
                                    key={avatar._id}
                                    _id={avatar._id}
                                    className={`border-[5px] cursor-pointer ${
                                        props.values.avatar === avatar._id
                                            ? 'border-[#000] scale-100'
                                            : 'border-[transparent] scale-100'
                                    }`}
                                />
                            ))}
                    </div>
                </Modal>
            )}
        </div>
    );
}
