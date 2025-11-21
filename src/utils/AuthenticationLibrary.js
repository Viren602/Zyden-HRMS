import { createCookie, getCookie, removeAllCookies, isCookieExist, setCookie } from "./cookies/CookieHandler";
import { Value3, Value4 } from "./AppSetting";

const authCookieName = Value3;
const tokenCookieName = Value4;

export const setAuthProps = (data) => {
    const authProps = {
        cookieName: authCookieName,
        cookieValue: data,
        expirationTime: data.sessionTimeout
    }
    createCookie(authProps);
    setTokenProps(data.token);
}

export const getAuthProps = () => {
    return getCookie(authCookieName);
}

export const isAuthorized = () => {
    return isCookieExist(authCookieName);
}

export const setTokenProps = (data) => {
    const tokenProps = {
        cookieName: tokenCookieName,
        cookieValue: data
    }
    setCookie(tokenProps);
}

export const getTokenProps = () => {
    return getCookie(tokenCookieName);
}

export const signOut = () => {
    removeAllCookies();
    window.location.href = "/login";
}