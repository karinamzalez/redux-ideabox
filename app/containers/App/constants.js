/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
 /*jshint esversion: 6 */

export const ADD_IDEA = 'ideabox/App/ADD_IDEA';
export const TITLE_INPUT = 'ideabox/App/TITLE_INPUT';
export const BODY_INPUT = 'ideabox/App/BODY_INPUT';
export const DEFAULT_LOCALE = 'en';
