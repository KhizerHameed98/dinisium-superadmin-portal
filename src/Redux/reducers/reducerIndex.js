import { combineReducers } from "redux";
import auth from "./auth";
import kyc from "./kyc";
import ito from "./ito";
import exchange from "./exchange";
import admin from "./admin";
import wallet from "./wallet";
import userManagement from "./userManagement";
import subscription from "./subscription";
import voting from "./voting";
import adminRequest from "./adminRequest";
import calculator from "./calculator";
import dashboard from "./dashboard";
import auditLogs from "./auditLogs";
import contentManagement from "./contentManagement";
import dinisiumBankAccount from "./dinisiumBankAccount";

export default combineReducers({
  auth,
  contentManagement,
  kyc,
  ito,
  exchange,
  admin,
  dinisiumBankAccount,
  wallet,
  userManagement,
  subscription,
  adminRequest,
  voting,
  calculator,
  dashboard,
  auditLogs,
});
