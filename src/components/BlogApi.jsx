import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blog",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3000/` }),
  tagTypes: ["blog"],
  endpoints: (builder) => ({
    // access all the blogs
    getBlogs: builder.query({
      query: () => `/blogs`,
      providesTags: ["blog"],
    }),

    // access single card blog
    getSingleBlog: builder.query({
      query: (id) => `/blogs/${id}`,
      providesTags: ["blog"],
    }),

    // Nurture new card blog
    getNurtureBlog: builder.mutation({
      query: (card) => ({
        url: `/blogs`,
        method: "POST",
        body: card,
      }),
      invalidatesTags: ["blog"],
    }),

    // Remove blog
    getRemoveBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["blog"],
    }),

    // Update blog
    getUpdateBlog: builder.mutation({
      query:(newData) => ({
        url: `/blogs/${newData.id}`,
        method:"PATCH",
        body:newData
      }),
      invalidatesTags:['blog']
    })
  }),
});

export const {
  useGetBlogsQuery,
  useGetSingleBlogQuery,
  useGetNurtureBlogMutation,
  useGetRemoveBlogMutation,
  useGetUpdateBlogMutation
} = blogApi;
