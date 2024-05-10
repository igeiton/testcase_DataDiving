// types
import { IUser } from '../../Users';

export const checkEmail = (email: string, users: IUser[]): boolean => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            return false;
        }
    }

    return true;
};
