const browserRoute = {
  HOST: process.env.REACT_APP_HOST,
  // HOST: "http://localhost:5000",
  BLANK_LINK: "#!",
  SIGNIN: "/auth/signin",
  SMS_VERIFICATION: "/auth/sms-verification",
  GOOGLE_VERIFICATION: "/auth/google-verification",
  EMAIL_VERIFICATION: "/auth/email-verification",
  SIGNUP: "/auth/signup",
  SIGNUP_CODE_VERIFICATION: "/auth/code-verification",
  LOGGEDIN_DEFAULT: "/super-admin/dashboard",
  SUPER_ADMIN_ROUTE: "/super-admin",
  DASHBOARD: "/super-admin/dashboard",

  USER_MANAGEMENT: "/super-admin/user-management",
  USER_DETAILS: "/super-admin/user-management/user-details/:id",
  USER_DETAIL_BTN: "/super-admin/user-management/user-details/",
  INVESTMENT_DETAILS: "/super-admin/user-management/investment-details/:id",
  INVESTMENT_DETAIL_BTN: "/super-admin/user-management/investment-details/",

  WALLET: "/super-admin/wallet",
  BANK_PAYMENT: "/super-admin/wallet/pay-via-bank",

  KYC_MANAGEMENT: "/super-admin/kyc-management",
  REQUEST_STATUS: "/super-admin/kyc-management/requst-status/:id",
  REQUEST_STATUS_BTN: "/super-admin/kyc-management/requst-status/",

  EXCHANGE: "/super-admin/marketplace",
  ADD_REMOVE_TOKEN: "/super-admin/marketplace/add-or-remove-token",
  ADD_TOKEN_TO_EXCHANGE: "/super-admin/marketplace/add-token-to-marketplace",
  BUY_SELL_REQUESTS: "/super-admin/marketplace/buy-sell-requests",
  COMPLETED_ORDERS: "/super-admin/marketplace/completed-orders",

  VOTING: "/super-admin/voting",
  CREATE_NEW_VOTE: "/super-admin/voting/create-election",
  PAST_VOTING_LIST: "/super-admin/voting/past-voting-list",
  VOTING_DETAILS: "/super-admin/voting/details/:id",
  VOTING_DETAILS_BTN: "/super-admin/voting/details/",

  ITO_MANAGEMENT: "/super-admin/ito-management",
  CREATE_NEW_ITO: "/super-admin/ito-management/create-new-ito",
  CREATE_TOKEN: "/super-admin/ito-management/create-new-token/:id",
  CREATE_TOKEN_BTN: "/super-admin/ito-management/create-new-token/",
  CREATE_NEW_SERIES: "/super-admin/ito-management/create-new-sereis",
  ITO_MANAGEMENT_DETAILS: "/super-admin/ito-management/details/:id",
  ITO_MANAGEMENT_DETAILS_BTN: "/super-admin/ito-management/details/",

  ADMIN_MANAGEMENT: "/super-admin/admin-management",
  ADD_NEW_ADMIN: "/super-admin/admin-management/add-new-admin",
  ADMIN_DETAILS: "/super-admin/admin-management/details/:id",
  ADMIN_DETAILS_BTN: "/super-admin/admin-management/details/",

  ADMIN_REQUESTS: "/super-admin/admin-requests",
  ADMIN_REQUESTS_DETAILS: "/super-admin/admin-requests/detail/:id",
  ADMIN_REQUESTS_DETAILS_BTN: "/super-admin/admin-requests/detail/",

  CONTENT_MANAGEMENT: "/super-admin/content-management",
  EDIT_HOME: "/super-admin/content-management/edit-home",
  EDIT_ABOUT: "/super-admin/content-management/edit-about",
  EDIT_CONTACT: "/super-admin/content-management/edit-contact",

  SUBSCRIPTION: "/super-admin/subscription",
  CALCULATOR: "/super-admin/calculator",

  AUDIT_LOGS: "/super-admin/audit-logs",

  PROFILE: "/super-admin/profile",
  EDIT_PROFILE: "/super-admin/edit-profile",
  BANK_ACCOUNT: "/super-admin/bank-account",
  BANK_ACCOUNT_UPDATE: "/super-admin/bank-account/update",
};

export default browserRoute;
