import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postsApi = createApi({
  reducerPath: "/posts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<any, string>({
      query: (userId) => `posts?userId=${userId}`,
    }),
  }),
});

export const { useGetPostsQuery, useLazyGetPostsQuery } = postsApi;
export default postsApi;