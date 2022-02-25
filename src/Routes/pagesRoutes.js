import React from "react";
import Route from "../Constants/browserRoutes";

const Dashboard = React.lazy(() => import("../Components/Dashboard"));

const UserManagement = React.lazy(() =>
  import("../Components/UserManagement/ListofAllUsers/index")
);
const UserDetails = React.lazy(() =>
  import("../Components/UserManagement/UserDetails/index")
);
const InvestmentDetails = React.lazy(() =>
  import("./../Components/UserManagement/InvestmentDetails")
);

const Wallet = React.lazy(() => import("../Components/Wallet"));
const BankPayment = React.lazy(() =>
  import("../Components/Wallet/BankPayment")
);

const KycManagement = React.lazy(() => import("../Components/KycManagement"));
const RequestStatus = React.lazy(() =>
  import("../Components/KycManagement/RequestStatus")
);

const Exchange = React.lazy(() => import("../Components/Exchange"));
const AddRemoveToken = React.lazy(() =>
  import("../Components/Exchange/AddRemoveToken")
);
const BuySellRequests = React.lazy(() =>
  import("../Components/Exchange/BuySellRequests")
);
const CompletedOrders = React.lazy(() =>
  import("../Components/Exchange/ComletedOrders")
);
const AddTokenToExchange = React.lazy(() =>
  import("../Components/Exchange/AddTokenToExchange")
);

const Voting = React.lazy(() => import("./../Components/Voting/index"));
const VotingDetails = React.lazy(() =>
  import("../Components/Voting/CommonComponents/votingDetails")
);
const CreateNewVote = React.lazy(() =>
  import("./../Components/Voting/CreateNewVote/index")
);
const PastVotingList = React.lazy(() =>
  import("./../Components/Voting/PastVotingList/index")
);

const ItoManagement = React.lazy(() => import("../Components/ItoManagement"));
const ItoDetails = React.lazy(() =>
  import("../Components/ItoManagement/ItoDetails")
);
const CreateNewIto = React.lazy(() =>
  import("../Components/ItoManagement/CreateNewIto")
);
const CreateToken = React.lazy(() =>
  import("../Components/ItoManagement/CreateToken")
);

const AdminManagement = React.lazy(() =>
  import("./../Components/AdminManagement/index")
);
const AdminDetails = React.lazy(() =>
  import("../Components/AdminManagement/AdminDetails/index")
);
const AddNewAdmin = React.lazy(() =>
  import("./../Components/AdminManagement/AddNewAdmin/index")
);

const Calculator = React.lazy(() => import("./../Components/Calculator/index"));
const EditProfile = React.lazy(() =>
  import("./../Components/Profile/EditProfile/index")
);
const Profile = React.lazy(() => import("./../Components/Profile/index"));

const Subscription = React.lazy(() =>
  import("./../Components/Subscription/index")
);
const AdminRequset = React.lazy(() =>
  import("../Components/AdminRequest/index")
);

const DepositeDetails = React.lazy(() =>
  import("../Components/AdminRequest/DepositeDetails/index")
);
const ContentManagement = React.lazy(() =>
  import("./../Components/ContentManagement/index")
);

const EditAbout = React.lazy(() =>
  import("./../Components/ContentManagement/EditAbout/index")
);

const EditHome = React.lazy(() =>
  import("./../Components/ContentManagement/EditHome/index")
);

const EditContact = React.lazy(() =>
  import("./../Components/ContentManagement/EditContact/index")
);

const AuditLogs = React.lazy(() => import("./../Components/AuditLogs/index"));

const BankAccount = React.lazy(() =>
  import("./../Components/BankAcountsManagement/index")
);
const BankAccountUpdate = React.lazy(() =>
  import("../Components/BankAcountsManagement/UpdateAccountDetails/index")
);

const pageRoutes = [
  {
    path: Route.DASHBOARD,
    exact: true,
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: Route.AUDIT_LOGS,
    exact: true,
    name: "AuditLogs",
    component: AuditLogs,
    permissionName: "auditLogs",
  },
  {
    path: Route.CONTENT_MANAGEMENT,
    exact: true,
    name: "ContentManagement",
    component: ContentManagement,
  },
  {
    path: Route.EDIT_HOME,
    exact: true,
    name: "EditHome",
    component: EditHome,
  },
  {
    path: Route.EDIT_CONTACT,
    exact: true,
    name: "EditContact",
    component: EditContact,
  },
  {
    path: Route.EDIT_ABOUT,
    exact: true,
    name: "EditAbout",
    component: EditAbout,
  },
  {
    path: Route.ADMIN_REQUESTS,
    exact: true,
    name: "AdminRequset",
    component: AdminRequset,
  },
  {
    path: Route.ADMIN_REQUESTS_DETAILS,
    exact: true,
    name: "DepositeDetails",
    component: DepositeDetails,
  },
  {
    path: Route.EDIT_PROFILE,
    exact: true,
    name: "EditProfile",
    component: EditProfile,
  },
  {
    path: Route.PROFILE,
    exact: true,
    name: "PROFILE",
    component: Profile,
  },
  {
    path: Route.BANK_ACCOUNT_UPDATE,
    exact: true,
    name: "Update",
    component: BankAccountUpdate,
  },
  {
    path: Route.BANK_ACCOUNT,
    exact: true,
    name: "Bank Account",
    component: BankAccount,
  },
  {
    path: Route.USER_MANAGEMENT,
    exact: true,
    name: "UserManagement",
    component: UserManagement,
  },
  {
    path: Route.USER_DETAILS,
    exact: true,
    name: "UserDetails",
    component: UserDetails,
  },
  {
    path: Route.INVESTMENT_DETAILS,
    exact: true,
    name: "InvestmentDetails",
    component: InvestmentDetails,
  },
  {
    path: Route.WALLET,
    exact: true,
    name: "Wallet",
    component: Wallet,
  },
  {
    path: Route.BANK_PAYMENT,
    exact: true,
    name: "BankPayment",
    component: BankPayment,
  },
  {
    path: Route.KYC_MANAGEMENT,
    exact: true,
    name: "KycManagement",
    component: KycManagement,
  },
  {
    path: Route.REQUEST_STATUS,
    exact: true,
    name: "RequestStatus",
    component: RequestStatus,
  },

  {
    path: Route.EXCHANGE,
    exact: true,
    name: "Exchange",
    component: Exchange,
  },
  {
    path: Route.ADD_REMOVE_TOKEN,
    exact: true,
    name: "AddRemoveToken",
    component: AddRemoveToken,
  },
  {
    path: Route.ADD_TOKEN_TO_EXCHANGE,
    exact: true,
    name: "AddTokenToExchange",
    component: AddTokenToExchange,
  },
  {
    path: Route.BUY_SELL_REQUESTS,
    exact: true,
    name: "BuySellRequests",
    component: BuySellRequests,
  },
  {
    path: Route.COMPLETED_ORDERS,
    exact: true,
    name: "CompletedOrders",
    component: CompletedOrders,
  },
  {
    path: Route.VOTING,
    exact: true,
    name: "Voting",
    component: Voting,
  },
  {
    path: Route.CREATE_NEW_VOTE,
    exact: true,
    name: "CreateNewElection",
    component: CreateNewVote,
  },
  {
    path: Route.PAST_VOTING_LIST,
    exact: true,
    name: "PastVotingList",
    component: PastVotingList,
  },
  {
    path: Route.VOTING_DETAILS,
    exact: true,
    name: "VotingDetails",
    component: VotingDetails,
  },
  {
    path: Route.ITO_MANAGEMENT,
    exact: true,
    name: "ItoManagement",
    component: ItoManagement,
  },
  {
    path: Route.CREATE_NEW_ITO,
    exact: true,
    name: "CreateNewIto",
    component: CreateNewIto,
  },
  {
    path: Route.CREATE_TOKEN,
    exact: true,
    name: "CreateToken",
    component: CreateToken,
  },
  {
    path: Route.ITO_MANAGEMENT_DETAILS,
    exact: true,
    name: "ItoDetails",
    component: ItoDetails,
  },
  {
    path: Route.ADMIN_MANAGEMENT,
    exact: true,
    name: "AdminManagement",
    component: AdminManagement,
  },
  {
    path: Route.ADD_NEW_ADMIN,
    exact: true,
    name: "AddNewAdmin",
    component: AddNewAdmin,
  },
  {
    path: Route.ADMIN_DETAILS,
    exact: true,
    name: "AdminDetails",
    component: AdminDetails,
  },
  {
    path: Route.SUBSCRIPTION,
    exact: true,
    name: "Subscription",
    component: Subscription,
  },
  {
    path: Route.Calculator,
    exact: true,
    name: "Calculator",
    component: Calculator,
  },
];

export default pageRoutes;
