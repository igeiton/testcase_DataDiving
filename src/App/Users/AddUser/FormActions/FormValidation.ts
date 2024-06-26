// Yup
import * as yup from 'yup';
import { checkEmail } from './CheckEmail';
// types
import { IUser } from '../../Users';

export const userSchema = (user: IUser, users: IUser[], unique: boolean) =>
    yup.object().shape({
        avatar: yup.string().required('Avatar is required'),

        last_name: yup.string().required('Last name is required'),
        first_name: yup.string().required('Name is required'),
        middle_name: yup.string(),

        email: yup
            .string()
            .email('Example: "asd@asd.com"')
            .required('Email is required')
            .test('unique', 'Email already exists', function (email: string) {
                return checkEmail(user, email, users, unique);
            }),

        about_self: yup.string(),
    });
