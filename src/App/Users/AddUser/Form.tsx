// Formik & Yup
import { Formik } from 'formik';
import { userSchema } from './FormActions/FormValidation';
// hooks
import { useState } from 'react';
// components
import ChooseAvatars from '../../UI/FormComponents/Avatars';
import Field from '../../UI/FormComponents/Field';
import Input from '../../UI/FormComponents/Input';
import Textarea from '../../UI/FormComponents/Textarea';
import Button from '../../UI/UserComponents/Button';
// styles
import { colors } from '../../UI/Styles/Styles';
// types
import { IUser } from '../Users';

interface IProps {
    closeModel: () => void;
    users: IUser[];
    user?: IUser;
    handleMethod: (values: any) => void;
    unique?: boolean;
}

export default function Form({
    closeModel,
    users,
    user = {
        id: '',
        created_at: '',
        avatar: '8hJ4kU7EtjB8Y203',
        last_name: '',
        first_name: '',
        middle_name: '',
        email: '',
        about_self: '',
    },
    handleMethod,
    unique = true,
}: IProps) {
    const [show, setShow] = useState<boolean>(false);

    const toggleShow = (): void => {
        setShow(!show);
    };

    return (
        <Formik
            validationSchema={() => userSchema(user, users, unique)}
            validateOnChange={false}
            validateOnBlur={true}
            initialValues={{
                avatar: user.avatar,
                last_name: user.last_name,
                first_name: user.first_name,
                middle_name: user.middle_name,
                email: user.email,
                about_self: user.about_self,
            }}
            action="#"
            onSubmit={(values) => {
                closeModel();
                handleMethod(values);
            }}
        >
            {(props: any) => (
                <form
                    onSubmit={props.handleSubmit}
                    className="relative max-w-full w-[500px] flex flex-col gap-[15px] bg-[white] text-[21px]"
                >
                    <Field props={props} name="avatar" title="Avatar">
                        <ChooseAvatars {...{ toggleShow, show, props }} />
                    </Field>

                    <Field props={props} name="last_name" title="Last name">
                        <Input props={props} name="last_name" />
                    </Field>

                    <Field props={props} name="first_name" title="First name">
                        <Input props={props} name="first_name" />
                    </Field>

                    <Field props={props} name="middle_name" title="Middle name">
                        <Input props={props} name="middle_name" />
                    </Field>

                    <Field props={props} name="email" title="Email">
                        <Input props={props} name="email" />
                    </Field>

                    <Field props={props} name="about_self" title="About self">
                        <Textarea props={props} name="about_self" />
                    </Field>

                    <Button type="submit" color={colors.blue500}>
                        Submit
                    </Button>
                </form>
            )}
        </Formik>
    );
}
