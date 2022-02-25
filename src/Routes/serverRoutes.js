export const SERVER_URL = process.env.REACT_APP_SERVER_URL;
// const SERVER_URL = "http://localhost:5000/api";
// const SERVER_URL = "http://af12-103-105-211-114.ngrok.io/api";

export const auth = {
  LOGIN: `${SERVER_URL}/v1/auth/login`,
  VERIFY_EMAIL: `${SERVER_URL}/v1/auth/verifyEmailSMSVerification`,
  VERIFY_SMS: `${SERVER_URL}/v1/auth/verifySMSVCode`,
  VERIFY_GOOGLE: `${SERVER_URL}/v1/auth/verify2fa`,
  /////////end
  SIGNUP: `${SERVER_URL}/v1/auth/signup`,
  VERIFY_USER: `${SERVER_URL}/v1/auth/verifyuser`,
  FORGET: `${SERVER_URL}/v1/auth/forgot`,
  VERIFY_FORGET: `${SERVER_URL}/v1/auth/verifyforgot`,
  UPDATE_PASSWORD: `${SERVER_URL}/v1/auth/updatepassword`,
  LOGGEDIN_USER: `${SERVER_URL}/v1/auth/loggedInUser`,

  // update profile data
  UPDATE_PROFILE: `${SERVER_URL}/v1`,

  // is_Verificatrion_on
  IS_EMAIL_AUTH_ON: `${SERVER_URL}/v1/auth/updateEmailVerification`,
  ENABLE_GOOGLE_AUTH: `${SERVER_URL}/v3/auth/enable2fa`,
  IS_GOOGLE_AUTH_ON: `${SERVER_URL}/v1/auth/update2faStatus`,
  IS_SMS_AUTH_ON: `${SERVER_URL}/v1/auth/updateSMSVerification`,
};

export const kyc = {
  GET_KYC_BY_STATUS: `${SERVER_URL}/v1/kyc/status`,
  GET_KYC_BY_ID: `${SERVER_URL}/v1/kyc/`,
  UPDATE_KYC_STATUS: `${SERVER_URL}/v1/update/kyc/status`,
};

// content management

export const contentManagement = {
  UPDATE_HOME_PAGE: `${SERVER_URL}/v1/contents`,
  UPDATE_ABOUT_PAGE: `${SERVER_URL}/v1/contents`,
  UPDATE_CONTACT_PAGE: `${SERVER_URL}/v1/contents`,
};

export const ito = {
  GET_ADMIN_WITH_NO_ITO: `${SERVER_URL}/v1/admins/no_ito_assigned`,
  CREATE_ITO: `${SERVER_URL}/v1/itos`,
  GET_ITO_BY_STATUS: `${SERVER_URL}/v1/itos/ito_status`,
  GET_ITO_BY_ID: `${SERVER_URL}/v1/itos/`,
  UPDATE_ITO_BY_ID: `${SERVER_URL}/v1/itos/`,
};

export const exchange = {
  CREATE_TOKEN: `${SERVER_URL}/v1/tokens`,
  ADMIN_ITO_ID: `${SERVER_URL}/v1/get/alloted/ito/`,
  // GET_TOKENS: `${SERVER_URL}/v1/tokens`,
  GET_TOKENS: `${SERVER_URL}/v1/tokens/status/exchangeable`,
  ADD_TOKEN_TO_EXCHANGE: `${SERVER_URL}/v1/tokens/`, ///tokens/:id/add
  TOKEN_CRUD: `${SERVER_URL}/v1/tokens/`,
  GET_BUY_REQUEST_LIST: `${SERVER_URL}/v3/orders`,
};

// wallet route
export const wallet = {
  GET_TOKEN_LIST: `${SERVER_URL}/v1/wallet/list`, // its dummy url correct it
  DEPOSIT_PAYMENT: `${SERVER_URL}/v1/wallet/payement`,
  GET_WALLET_DETAILS: `${SERVER_URL}/v3/wallets/users/me`,
};

// admin route
export const admin = {
  GET_ADMIN_LIST: `${SERVER_URL}/v1/admins/get/all`,
  GET_ADMIN_BY_ID: `${SERVER_URL}/v1/admins`,
  GET_ADMIN_ITO: `${SERVER_URL}/v1`,
  ADD_NEW_ADMIN: `${SERVER_URL}/v1/admins`,
  DELETE_ADMIN: `${SERVER_URL}/v1/admins`,
  ADMIN_BLOCK_UNBLOCK: `${SERVER_URL}/v1/admins/`,
  ADMIN_LINK_ITO: `${SERVER_URL}/v1/admins/`,
  ADMIN_UNLINK_ITO: `${SERVER_URL}/v1/admins/`,
  GET_ALL_ITOS: `${SERVER_URL}/v1/itos`,
  GET_AVAILABLE_ITO: `${SERVER_URL}/v1/admins/`,
};

// adminRequest route
export const adminRequest = {
  GET_PENDING_DEPOSITES_LIST: `${SERVER_URL}/v1/fiat/deposits/pending/approved_0`,
  GET_ALL_DEPOSITES_LIST: `${SERVER_URL}/v1/fiat/deposits`,
  GET_DEPOSITE_BY_ID: `${SERVER_URL}/v1/fiat/deposits`,
  CONFIRM_DEPOSITE: `${SERVER_URL}/v1/fiat/deposits`,

  // GET_PENDING_DEPOSITES_LIST: `${SERVER_URL}/v1/fiat/deposits`,
  GET_SINGLE_APPROVED_LIST: `${SERVER_URL}/v1/fiat/deposits/pending/approved_1`,
};

export const userManagement = {
  GET_ALL_USERS: `${SERVER_URL}/v2/getAllUers`,
  GET_USER_PROFILE: `${SERVER_URL}/v2/getProfile`,
  USER_BLOCK_UNBLOCK: `${SERVER_URL}/v1/blockUser/`,
};

export const subscription = {
  CREATE_SUBSCRIPTION: `${SERVER_URL}/v1/subscriptions`,
};

export const auditLogs = {
  GET_ADUDIT_LOGS: `${SERVER_URL}/v1/logs`,
};

// voting
export const voting = {
  GET_VOTING: `${SERVER_URL}/v1/elections`,
  GET_ALL_ITO: `${SERVER_URL}/v1/itos`,
  GET_VOTE_STATUS: `${SERVER_URL}/v1/elections/`,
};

//dashboard
export const dashboard = {
  ALL_ELECTIONS_COUNT: `${SERVER_URL}/v2/dashboard/elections/counts`,
  ALL_USERS_COUNT: `${SERVER_URL}/v2/dashboard/users/counts`,
  ALL_ORDERS_COUNT: `${SERVER_URL}/v2/dashboard/orders/counts`,
  ALL_TOKENS_COUNT: `${SERVER_URL}/v2/dashboard/tokens/counts`,
  ALL_INVESTMENT_PER_MONTH: `${SERVER_URL}/v2/dashboard/investment/total_month`,
  ALL_REGISTERED_USERS_PER_MONTH: `${SERVER_URL}/v2/dashboard/users/register_month`,
  ALL_ORDERS_PER_DAY: `${SERVER_URL}/v2/dashboard/exchange/count_day`,
  USER_COUNT: `${SERVER_URL}/v2/users/registered/all?filterWith=`,
  ORDERS_COUNT: `${SERVER_URL}/v2/tokens/sold/data?filterWith=`,
  EXCHANGE_SELL_ORDER: `${SERVER_URL}/v2/dashboard/exchange/count_day/sell_order?filterWith=`,
  EXCHANGE_BUY_ORDER: `${SERVER_URL}/v2/dashboard/exchange/count_day/buy_order?filterWith=`,
};

//Dinisium Bank Accounts

export const dinisumBankAccounts = {
  GET_BANK_ACCOUNT: `${SERVER_URL}/v1/bank/details`,
  ADD_BANK_ACCOUNT: `${SERVER_URL}/v1/bank/account`,
  UPDATE_BANK_ACCOUNT: `${SERVER_URL}/v1/update/bank/details`,
};
