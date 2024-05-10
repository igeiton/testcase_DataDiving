import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const avatarsApi = createApi({
    reducerPath: 'avatarsApi',

    tagTypes: ['Avatars'],

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://cataas.com/',
    }),

    endpoints: (build) => ({
        getAvatars: build.query({
            query: (params) =>
                `api/cats${params}&skip=${Math.floor(Math.random() * 100)}`,
        }),

        getUserAvatar: build.query({
            query: (id) => `cat/${id}`,
        }),
    }),
});

export const { useGetAvatarsQuery, useGetUserAvatarQuery } = avatarsApi;
