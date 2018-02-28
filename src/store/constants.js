/* eslint import/prefer-default-export: 0 */

/**
 * Constants (Mutation Types)
 *
 * Mutations that are possible in this application.
 *
 * Each action has a corresponding mutation type, which the mutator knows and
 * picks up on. To avoid weird typos between the mutations and the actions, we
 * save them as constants here. We prefix them with 'YourComponent' so we avoid
 * mutations accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'YourComponent/YOUR_ACTION_CONSTANT';
 *
 */

export const UPDATE_NAME = 'ExampleComponent/UPDATE_NAME';

export const INCREMENT = 'ExampleComponent/INCREMENT';
export const DECREMENT = 'ExampleComponent/DECREMENT';