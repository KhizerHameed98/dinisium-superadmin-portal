//Auth
export {
  login,
  verifyEmail,
  verifySms,
  verifyGoogle,
  logout,
  updateProfile,
  emailAuthentiactionOn,
  googleAuthentiactionOn,
  smsAuthentiactionOn,
  updatePassword,
} from "../../Services/authServices";

//Dashboard
export {
  countAllElections,
  countAllRegisteredUsers,
  countAllExchangeOrders,
  countAllTokens,
  countInvestmentPerMonth,
  countRegiteredUsersPerMonth,
  countExchangeOrdersPerDay,
  getUserCount,
  sellCount,
} from "../../Services/dashboardServices";

//KYC Management
export {
  getSingleApprovedKyc,
  getPendingKyc,
  getApprovedKyc,
  getRejectedKyc,
  getKycById,
  updateKycStatus,
} from "../../Services/kycServices";

// ITO Management
export {
  getUnAssignedAdminsToItos,
  createIto,
  getOngoingIto,
  getUpcomingIto,
  getPastIto,
  getItoById,
  blockUnblockIto,
} from "../../Services/itoServices";

// Exchange
export {
  createToken,
  getTokensList,
  addTokenToExchange,
  getUnholdTokensList,
  getOnholdTokensList,
  blockUnblockToken,
  getBuyRequestsList,
  getSellRequestsList,
  getCompletedOrdersList,
} from "../../Services/exchange";

// Admin Management
export {
  getAdminsList,
  getAdminsById,
  getAvailableITO,
  addNewAdmin,
  deleteAdmin,
  adminBlockUnBlock,
  adminLinkITO,
  adminUnLinkITO,
  getAllItos,
} from "../../Services/adminManagementServices";

// Wallet
export {
  depositPayment,
  getTokentList,
  getWalletDetails,
} from "../../Services/walletService";

// User Management
export {
  getUsersList,
  getUserProfile,
  getInvestmentDetailByUserId,
  userBlockUnBlock,
} from "../../Services/userManagement";

// Subscription
export { createSubscription } from "../../Services/subscription";

export {
  getOngoingVoting,
  getClosedVoting,
  getOnlyClosedVoting,
  getUpcomingVoting,
  getVoteDetailById,
  creatVote,
  getAllITO,
  getVoteStatus,
} from "../../Services/votingServices";

// adminRequest
export {
  confrimDeposite,
  getDepositesList,
  getDepositesById,
  getAllDepositesList,
  getSingleApprovedList,
} from "../../Services/adminRequest";

export { getAllTokensList } from "../../Services/calculator";

export {
  updateHomePage,
  updateAboutPage,
  updateContactPage,
} from "../../Services/contentManagement";

export { getAuditLogsList } from "../../Services/auditLogs";

export {
  addBankAcountDetails,
  getBankAccount,
  updateBankAcountDetails,
} from "../../Services/dinsiumBankAccount";
