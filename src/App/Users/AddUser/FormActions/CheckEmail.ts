// types
import { IUser } from '../../Users';

export const checkEmail = (
    user: IUser,
    email: string,
    users: IUser[],
    unique: boolean
): boolean => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            if (!unique && user.email === users[i].email) {
                continue;
            }
            return false;
        }
    }

    return true;
};
