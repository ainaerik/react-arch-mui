/**
 * Parse .env config
 * If there isn't .env file in the app root folder, then rename .env.dev into .env
 */

export const DEFAULT_LANG = process.env.REACT_APP_DEFAULT_LANG || 'en'
export const DEFAULT_THEME = process.env.REACT_APP_DEFAULT_THEME || 'light'
export const APP_URL = process.env.REACT_APP_URL || 'http://localhost:3000'
