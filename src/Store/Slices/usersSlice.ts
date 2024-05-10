import { createSlice } from '@reduxjs/toolkit';

export interface ISelectedUsers {
    id: number;
    first_name: string;
    last_name: string;
    middle_name: string;
}

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        selectedUsers: [] as ISelectedUsers[],
        showSelect: false as boolean,
        showDelete: false as boolean,
    },
    reducers: {
        toggleSelectedUsers(state, action) {
            const selected: ISelectedUsers | undefined =
                state.selectedUsers.find(
                    (user: any) => user.id === action.payload.id
                );

            if (selected !== undefined) {
                state.selectedUsers = state.selectedUsers.filter(
                    (user: any) => user.id !== action.payload.id
                );
            } else {
                state.selectedUsers = [...state.selectedUsers, action.payload];
            }
        },

        toggleShowSelect(state) {
            state.showSelect = !state.showSelect;
        },

        selectAll(state, action) {
            state.selectedUsers = action.payload;
        },

        toggleShowDelete(state) {
            state.showDelete = !state.showDelete;
        },
    },
});

export const { toggleSelectedUsers, toggleShowSelect, selectAll } =
    usersSlice.actions;

export default usersSlice.reducer;
