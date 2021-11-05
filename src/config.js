/**
 *			!IMPORTANT :: This starter will not work as is
 *			without creating .env in the /client/
 *			directory that follows the template at the bottom
 *			of this doc. See readMe.md for more info on
 *			gathering credentials
 */

/**
 * ---->  Global Variables
 */

export const TOKEN_TITLE = process.env.REACT_APP_TOKEN_TITLE || 'jwtToken';

/**
 * ---->  Client oAuth
 */

export const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
export const FACEBOOK_APP_ID = process.env.REACT_APP_FACEBOOK_APP_ID;
export const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

// Set any oauth you are not including credentials for to false.

export const USE_OAUTH = {
	google: true,
	facebook: false,
	spotify: true,
};

/**
 * ---->  UI Preferences
 *
 * 		More styling options available in
 * 		'/client/src/sass/variables/'
 */

//••••••••••••••••
// ~~TEMPLATE~~
//    .env
//••••••••••••••••
//   --- !!! ---  IMPORTANT :: .env will be ignored by git. Make sure you create these variables
//   --- !!! ---  on your production server. React process.env vars require they begin with 'REACT_APP_' as
//   --- !!! ---  below, so do not change for preference and include in new vars you may add.

// REACT_APP_SPOTIFY_CLIENT_ID =
// REACT_APP_FACEBOOK_APP_ID =
// REACT_APP_GOOGLE_CLIENT_ID =
// REACT_APP_BASE_URL =                    <----- Do NOT include 'http://' -- example: localhost:3000
// REACT_APP_SERVER_URL =                  <----- Do NOT include 'http://' -- example: localhost:5000
// REACT_APP_GQL_SERVER_URL =              <----- Do NOT include 'http://' -- example: localhost:5000/graphql

// REACT_APP_TOKEN_TITLE =     <---- optional; has default 'jwtToken'
