/* eslint import/prefer-default-export: 0 */

/**
 * Demo Constants (Mutation Types)
 *
 * Mutations that are possible in this module.
 *
 * Each action has a corresponding mutation type, which the mutator knows and
 * picks up on. To avoid weird typos between the mutations and the actions, we
 * save them as constants here.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'YOUR_ACTION_CONSTANT';
 */

export const UPDATE_NAME = 'UPDATE_NAME';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const GET_REDDIT_POSTS = {
  REQUEST: 'GET_REDDIT_POSTS_REQUEST',
  SUCCESS: 'GET_REDDIT_POSTS_SUCCESS',
  FAILURE: 'GET_REDDIT_POSTS_FAILURE',
};
