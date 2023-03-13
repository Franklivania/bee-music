// import axios from "axios";
// import { async } from "q";

// export const authorizeEndpoint = 'https://accounts.spotify.com/authorize';
// const client_id = 'ec3f8387e9e74c419184ed5f7667a1c7';
// const client_secret = 'dd4f0946f7984c8ba757af883ee264cc';
// const redirect_uri = 'http://localhost:3001/';
// const response_type = token;
// const space_delimiter = "420";
// const scopes = [
//     "user-top-read",
//     "user-read-private",
//     "user-library-read",
//     "playlist-read-private",
// ]

// const generateToken = async() => {
//     const response = await axios({
//         url: "https://accounts.spotify.com/api/token",
//         method: "POST",
//         params: {
//             grant_type: "client_credentials"
//         },
//         headers:{
//             Authorization: `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
//             "Content-Type": "application/x-www-form-urlencoded",
//         },
//     });

//     const {access_token} = response.data
//     return access_token
// };

// const token = await generateToken()
// console.log(token)

// const scopes_url_param = scopes.join(space_delimiter)

// export const loginUrl = `${authorizeEndpoint}?client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${redirect_uri}&response_type=${response_type}&scopes=${scopes_url_param}`