import { Dispatch } from '@reduxjs/toolkit'

// eslint-disable-next-line
/* global fetch */
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

export const POST_ACTIONS = {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE
}

export const fetchPosts = (userId: string | undefined) => async (dispatch: Dispatch) => {
  dispatch({
    type: FETCH_POSTS_REQUEST
  })
  try {
    if (typeof userId === 'undefined' || userId === '') throw new Error('No userId was found')

    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    )
    const posts = await data.json()
    dispatch({
      type: FETCH_POSTS_SUCCESS,
      payload: posts
    })
  } catch (error) {
    console.info('Error while fetching posts', error)
    dispatch({
      type: FETCH_POSTS_FAILURE,
      payload: error
    })
  }
}
