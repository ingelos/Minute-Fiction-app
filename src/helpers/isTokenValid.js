import {jwtDecode} from "jwt-decode";


function isTokenValid(token) {
    try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        return decoded.exp > currentTime;
    } catch (error) {
        console.error("Token validation error:", error);
        return false;
    }
}


//
// function isTokenValid(jwtToken) {
//     try {
//         const decodedToken = jwtDecode(jwtToken);
//         const currentDate = new Date();
//
//         if (decodedToken.exp * 1000 < currentDate.getTime()) {
//             console.log("token expired.");
//             return false;
//         } else {
//             console.log("valid token");
//             return true;
//         }
//     } catch (error) {
//         console.error("Invalid token:", error);
//         return false;
//     }
// }

export default isTokenValid;