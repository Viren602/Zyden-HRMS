import { Value1, Value2 } from './AppSetting.js';
import CryptoJS from "crypto-js";
// var CryptoJS = require("crypto-js");
const Key = CryptoJS.enc.Base64.parse(Value1);
const IV = CryptoJS.enc.Base64.parse(Value2);

// // encryption for api request
export const encryptionAPI = (data, string) => {
    // Encrypt
    if (string === 1)
        data = JSON.stringify(data);

    var encprtArray = CryptoJS.enc.Utf8.parse(data);
    var decryptedText = CryptoJS.AES.encrypt(encprtArray, Key,
        {
            iv: IV,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
    return decryptedText.ciphertext.toString(CryptoJS.enc.based64);
}

// decryption for api response 

// function hexStringToBase64String(hex) {
//     const byteArray = [];
//     for (let i = 0; i < hex.length; i += 2) {
//         byteArray.push(parseInt(hex.substr(i, 2), 16));
//     }
//     const base64 = btoa(String.fromCharCode.apply(null, byteArray));
//     return base64;
// }
function hexStringToBase64String(hex) {
    const byteArray = new Uint8Array(hex.length / 2);

    for (let i = 0; i < hex.length; i += 2) {
        byteArray[i / 2] = parseInt(hex.substr(i, 2), 16);
    }

    // Convert Uint8Array to a string
    let binaryString = "";
    for (let i = 0; i < byteArray.length; i++) {
        binaryString += String.fromCharCode(byteArray[i]);
    }

    // Convert binary string to Base64
    return btoa(binaryString);
}

function aesDecrypt(encryptedData, isDecrypt) {
    if (!isDecrypt) {
        return encryptedData;
    }

    const encryptedBytes = CryptoJS.enc.Base64.parse(encryptedData);

    const decryptedBytes = CryptoJS.AES.decrypt(
        { ciphertext: encryptedBytes },
        Key,
        {
            iv: IV,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        }
    );

    const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedText;
}

export const decryptionAPI = (res) => {
    try {
        if (
            res.data.isEnType !== undefined &&
            res.data.isEnType !== "undefined" &&
            res.data.isEnType !== "null" &&
            res.data.isEnType !== null
        ) {
            if (res.data.isEnType === true) {
                if (res.data.responseData !== undefined && res.data.statusCode !== 500 && res.data.responseData !== null && res.data.responseData !== "undefined" && res.data.responseData !== "null") {
                    const encryptedData = decodeURIComponent(res.data.responseData);

                    const base64Data = hexStringToBase64String(encryptedData);

                    const decryptedData = aesDecrypt(base64Data, res.data.isEnType);

                    res.data.responseData = JSON.parse(decryptedData)

                    return res.data;
                } else {
                    res.data.responseData = []
                    return res.data;
                }
            } else {
                console.log("Encryption is disabled. Returning parsed typeData.");
                return { ...JSON.parse(res.typeData) };
            }
        } else {
            console.log("Response is missing 'isEnType'. Returning original response.");
            return res;
        }
    } catch (error) {
        console.error("Decryption Error:", error.message);
        return null;
    }
};

// encryption for query params
export const encryptionData = (data, string) => {
    // Encrypt
    if (string === 1)
        data = JSON.stringify(data);

    let encryptedData = CryptoJS.AES.encrypt(data.toString(), Value1).toString();
    encryptedData = encryptedData.replaceAll('/', 's2e0s21');
    return encryptedData;
}

// decryption for query params
export const decryptionData = (res, isObject) => {
    res = res.replaceAll('s2e0s21', '/');
    const data = CryptoJS.AES.decrypt(res, Value1).toString(CryptoJS.enc.Utf8);

    if (isObject === true) {
        return { ...JSON.parse(data) };
    }
    else {
        return data.toString();
    }
}

// // export const encryptAES = (text, key) => {
// //     if (typeof text === "number") {
// //         text = text.toString();
// //     }
// //     let enctryptedText = CryptoJS.AES.encrypt(text, "azR2N3F4a3pycXFxd2M2dG5ya3E4MjBrbmYzZzM0YWU=").toString();
// //     return btoaEnc(enctryptedText);

// // };
export const encryptAES = (text, key) => {
    const val1 = Value1;
    if (typeof text === "number") {
        text = text.toString();
    }
    let enctryptedText = CryptoJS.AES.encrypt(text, val1).toString();
    return btoaEnc(enctryptedText);
};

export const decryptAES = (encryptedBase64, key) => {
    const val1 = Value1;
    encryptedBase64 = atobEnc(encryptedBase64);
    const decrypted = CryptoJS.AES.decrypt(encryptedBase64, val1);
    if (decrypted) {
        try {
            const str = decrypted.toString(CryptoJS.enc.Utf8);
            if (str.length > 0) {
                return str;
            } else {
                return 'error 1';
            }
        } catch (e) {
            return 'error 2';
        }
    }
    return 'error 3';
};



export const checkParameters = (Value, returnType) => {

    let decryptedDate = decryptAES(Value);
    if (decryptedDate !== "error 1" && decryptedDate !== "error 2" && decryptedDate !== "error 3") {
        if (returnType === "Number") {
            return isNaN(decryptedDate) ? 0 : Number(decryptedDate);
        } else {
            return decryptedDate;
        }
    } else {
        return undefined;
    }
};

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export const btoaEnc = (input = '') => {
    let str = input;
    let output = '';

    for (let block = 0, charCode, i = 0, map = chars;
        str.charAt(i | 0) || (map = '=', i % 1);
        output += map.charAt(63 & block >> 8 - i % 1 * 8)) {

        charCode = str.charCodeAt(i += 3 / 4);

        if (charCode > 0xFF) {
            throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
        }

        block = block << 8 | charCode;
    }

    return output;
};

export const atobEnc = (input = '') => {
    let str = input.replace(/=+$/, '');
    let output = '';

    if (str.length % 4 == 1) {
        throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (let bc = 0, bs = 0, buffer, i = 0;
        buffer = str.charAt(i++);

        ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
            bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
        buffer = chars.indexOf(buffer);
    }

    return output;
};
