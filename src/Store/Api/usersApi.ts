import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
    reducerPath: 'usersApi',

    tagTypes: ['Users'],

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/users',
    }),

    endpoints: (build) => ({
        getUsers: build.query({
            query: () => ``,

            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }: any) => ({
                              type: 'Users',
                              id,
                          })),
                          { type: 'Users', id: 'LIST' },
                      ]
                    : [{ type: 'Users', id: 'LIST' }],
        }),

        createUser: build.mutation({
            query: (body) => ({
                url: '',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Users', id: 'LIST' }],
        }),

        updateUser: build.mutation({
            query: ({ id, body }) => ({
                url: `${id}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ({ id }) => [{ type: 'Users', id }],
        }),

        deleteUser: build.mutation({
            query: (id) => ({
                url: `${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Users', id: 'LIST' }],
        }),
    }),
});

export const {
    useGetUsersQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
} = usersApi;
