import { axiosGet, axiosGetWithencryption, axiosPost, axiosPostWithencryption } from "../AxiosRequests";
import * as endpoints from "../ApiEndPoints.js";

//------------------ login ----------------------------
export const adminLogin = (req) => axiosPost(endpoints.AdminLogin, req);

//------------------ for category -------------------------------
export const getCategoryList = (req) => axiosGetWithencryption(endpoints.GetCategoryList, req);
export const addEditCategory = (req) => axiosPostWithencryption(endpoints.AddEditCategory, req);
export const deleteCategoryById = (req) => axiosGetWithencryption(endpoints.DeleteCategoryById, req);

//------------------ for size----------------------------------
export const getSizeList = (req) => axiosGetWithencryption(endpoints.GetSizeList, req);
export const addEditSize = (req) => axiosPostWithencryption(endpoints.AddEditSize, req);
export const deleteSizeById = (req) => axiosGetWithencryption(endpoints.DeleteSizeById, req);

//------------------ for gender----------------------------------
export const getGenderList = (req) => axiosGetWithencryption(endpoints.GetGenderList, req);
export const addEditGender = (req) => axiosPostWithencryption(endpoints.AddEditGender, req);
export const deleteGenderById = (req) =>
  axiosGetWithencryption(endpoints.DeleteGenderById, req);

//------------------ for color----------------------------------
export const getColorList = (req) => axiosGetWithencryption(endpoints.GetColorList, req);
export const addEditColor = (req) => axiosPostWithencryption(endpoints.AddEditColor, req);
export const deleteColorById = (req) =>
  axiosGetWithencryption(endpoints.DeleteColorById, req);

//------------------ for state----------------------------------
export const getStateList = (req) => axiosGetWithencryption(endpoints.GetStateList, req);
export const addEditState = (req) => axiosPostWithencryption(endpoints.AddEditState, req);
export const deleteStateById = (req) => axiosGetWithencryption(endpoints.DeleteStateById, req);

//------------------ for material----------------------------------
export const getMaterialList = (req) => axiosGetWithencryption(endpoints.GetMaterialList, req);
export const addEditMaterial = (req) => axiosPostWithencryption(endpoints.AddEditMaterial, req);
export const deleteMaterialById = (req) => axiosGetWithencryption(endpoints.DeleteMaterialById, req);

//------------------ for hsn----------------------------------
export const getHsnList = (req) => axiosGetWithencryption(endpoints.GetHsnList, req);
export const addEditHsn = (req) => axiosPostWithencryption(endpoints.AddEditHsn, req);
export const deleteHsnById = (req) => axiosGetWithencryption(endpoints.DeleteHsnById, req);

//----------------- file upload ------------------------------
export const uploadFile = (req) => axiosPostWithencryption(endpoints.UploadFile, req);

//------------------------- for shop -----------------------------
export const getCompanyList = (req) => axiosGetWithencryption(endpoints.GetCompanyList, req);
export const getCompanyById = (req) => axiosGetWithencryption(endpoints.GetCompanyById, req)
export const addEditCompany = (req) => axiosPostWithencryption(endpoints.AddEditCompany, req);
export const deleteCompanyById = (req) => axiosGetWithencryption(endpoints.DeleteCompanyById, req);

//------------------------- for product -----------------------------
export const getProductList = (req) => axiosGetWithencryption(endpoints.GetProductList, req);
export const getProductById = (req) => axiosGetWithencryption(endpoints.GetProductById, req)
export const addEditProduct = (req) => axiosPostWithencryption(endpoints.AddEditProduct, req);
export const deleteProductById = (req) => axiosGetWithencryption(endpoints.DeleteProductById, req);

//------------------------- for vouchercode -----------------------------
export const  getVoucherList = (req) => axiosGet(endpoints.GetVoucherList, req);
export const getVoucherById = (req) => axiosGet(endpoints.GetVoucherById, req)
export const addEditVoucher = (req) => axiosPost(endpoints.AddEditVoucher, req);
export const deleteVoucherById = (req) => axiosGet(endpoints.DeleteVoucherById, req);