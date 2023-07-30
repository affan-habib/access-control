// authUtils.js

import Cookies from "js-cookie";

// Function to set cookies
export const setAuthCookies = (response) => {
  const { access_token, refresh_token, user_data, expires_in } = response;
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + expires_in * 60 * 1000); // Convert expiresInMinutes to milliseconds and add to the current timestamp
  Cookies.set("access_token", access_token, { expires: expirationDate });
  Cookies.set("refresh_token", refresh_token, { expires: expirationDate });
  Cookies.set("user_data", JSON.stringify(user_data));
  Cookies.set("role", user_data.account_type);
};

// Function to remove cookies and logout
export const removeAuthCookies = () => {
  Cookies.remove("access_token");
  Cookies.remove("refresh_token");
  Cookies.remove("user_data");
  Cookies.remove("role");
};

// Function to get user ID and full name
export const getUserIdAndName = () => {
  const userDataString = Cookies.get("user_data");
  if (userDataString) {
    const userData = JSON.parse(userDataString);
    const { id, fullname } = userData;
    return { userId: id, fullName: fullname };
  }
  return { userId: null, fullName: null };
};

// Function to get access token
export const getAccessToken = () => {
  return Cookies.get("access_token") || null;
};

// Function to get refresh token
export const getRefreshToken = () => {
  return Cookies.get("refresh_token") || null;
};

export const getUserRole = () => {
    const userDataString = Cookies.get("user_data");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const { account_type } = userData;
      return account_type;
    }
    return null;
  };