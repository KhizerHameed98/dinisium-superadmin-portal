import Route from "./Constants/browserRoutes";

const MenuItems = {
  items: [
    {
      id: "menuItems",
      type: "group",
      children: [
        {
          id: "dashboard",
          title: "Dashboard",
          type: "item",
          url: Route.DASHBOARD,
          icon: "fas fa-chart-line",
          breadcrumbs: true,
          subItems: [
            {
              id: "   Profile",
              title: "   Profile",
              type: "subItem",
              url: Route.PROFILE,
              icon: "far fa-user",
              breadcrumbs: true,
              subItemsChildren: [
                {
                  id: "EditProfile",
                  title: "Edit Profile",
                  type: "subItemChild",
                  url: Route.EDIT_PROFILE,
                  breadcrumbs: true,
                },
              ],
            },
          ],
        },

        {
          id: "   Accounts",
          title: "   Accounts",
          type: "item",
          url: Route.BANK_ACCOUNT,
          icon: "far fa-user",
          breadcrumbs: true,
          subItems: [
            {
              id: "UpdateAccount",
              title: "Add Account",
              type: "subItem",
              url: Route.BANK_ACCOUNT_UPDATE,
              breadcrumbs: true,
            },
          ],
        },
        // {
        //   id: "userManagement",
        //   title: "User Management",
        //   type: "item",
        //   url: Route.USER_MANAGEMENT,
        //   icon: "far fa-user",
        //   breadcrumbs: true,
        //   subItems: [
        //     {
        //       id: "userDetails",
        //       title: "User Details",
        //       type: "subItem",
        //       url: Route.USER_DETAILS,
        //       breadcrumbs: true,
        //     },
        //   ],
        // },
        // {
        //   id: "wallet",
        //   title: "Wallet",
        //   type: "item",
        //   url: Route.WALLET,
        //   icon: "fas fa-wallet",
        //   breadcrumbs: true,
        //   subItems: [
        //     {
        //       id: "bankPayment",
        //       title: "Bank Payment",
        //       type: "subItem",
        //       url: Route.BANK_PAYMENT,
        //       breadcrumbs: true,
        //     },
        //   ],
        // },

        // {
        //   id: "kycManagement",
        //   title: "KYC Management",
        //   type: "item",
        //   url: Route.KYC_MANAGEMENT,
        //   icon: "far fa-comment-dots",
        //   breadcrumbs: true,
        //   subItems: [
        //     {
        //       id: "requestStatus",
        //       title: "Request Status",
        //       type: "subItem",
        //       url: Route.REQUEST_STATUS,
        //       breadcrumbs: true,
        //     },
        //   ],
        // },

        // {
        //   id: "exchange",
        //   title: "Marketplace",
        //   type: "item",
        //   url: Route.EXCHANGE,
        //   icon: "fas fa-sync",
        //   breadcrumbs: true,
        //   subItems: [
        //     {
        //       id: "addRemoveToken",
        //       title: "Add - Remove Token",
        //       type: "subItem",
        //       url: Route.ADD_REMOVE_TOKEN,
        //       breadcrumbs: true,
        //       subItemsChildren: [
        //         {
        //           id: "addTokenToExchange",
        //           title: "Add Token To Marketplace",
        //           type: "subItemChild",
        //           url: Route.ADD_TOKEN_TO_EXCHANGE,
        //           breadcrumbs: true,
        //         },
        //       ],
        //     },
        //     {
        //       id: "buySellRequests",
        //       title: "Pending Requests",
        //       type: "subItem",
        //       url: Route.BUY_SELL_REQUESTS,
        //       breadcrumbs: true,
        //       subItemsChildren: [
        //         {
        //           id: "completedOrders",
        //           title: "Comleted Orders",
        //           type: "subItemChild",
        //           url: Route.COMPLETED_ORDERS,
        //           breadcrumbs: true,
        //         },
        //       ],
        //     },
        //   ],
        // },

        // {
        //   id: "voting",
        //   title: "Voting",
        //   type: "item",
        //   url: Route.VOTING,
        //   icon: "fas fa-poll-h",
        //   breadcrumbs: true,
        //   subItems: [
        //     {
        //       id: "createNewVote",
        //       title: "Create New Election",
        //       type: "subItem",
        //       url: Route.CREATE_NEW_VOTE,
        //       breadcrumbs: true,
        //     },
        //     {
        //       id: "pastVotingList",
        //       title: "Past Voting List",
        //       type: "subItem",
        //       url: Route.PAST_VOTING_LIST,
        //       breadcrumbs: true,
        //     },
        //     {
        //       id: "votingDetails",
        //       title: "Voting Details",
        //       type: "subItem",
        //       url: Route.VOTING_DETAILS,
        //       breadcrumbs: true,
        //     },
        //   ],
        // },

        // {
        //   id: "itoManagement",
        //   title: "ITO Management",
        //   type: "item",
        //   url: Route.ITO_MANAGEMENT,
        //   icon: "fas fa-poll-h",
        //   breadcrumbs: true,
        //   subItems: [
        //     {
        //       id: "createNewIto",
        //       title: "Create New ITO",
        //       type: "subItem",
        //       url: Route.CREATE_NEW_ITO,
        //       breadcrumbs: true,
        //     },
        //     {
        //       id: "itoDetails",
        //       title: "Ito Details",
        //       type: "subItem",
        //       url: Route.ITO_MANAGEMENT_DETAILS,
        //       breadcrumbs: true,
        //     },
        //   ],
        // },

        {
          id: "adminManagement",
          title: "Admin Management",
          type: "item",
          url: Route.ADMIN_MANAGEMENT,
          icon: "fas fa-users-cog",
          breadcrumbs: true,
          subItems: [
            {
              id: "addNewAdmin",
              title: "Add New Admin",
              type: "subItem",
              url: Route.ADD_NEW_ADMIN,
              breadcrumbs: true,
            },
            {
              id: "adminDetails",
              title: "Admin Details",
              type: "subItem",
              url: Route.ADMIN_DETAILS,
              breadcrumbs: true,
            },
          ],
        },

        // {
        //   id: "ContentManagement",
        //   title: "Content Management",
        //   type: "item",
        //   url: Route.CONTENT_MANAGEMENT,
        //   icon: "fas fa-chalkboard-teacher",
        //   breadcrumbs: true,
        //   subItems: [
        //     {
        //       id: "EditHome",
        //       title: "Edit Home",
        //       type: "subItem",
        //       url: Route.EDIT_HOME,
        //       breadcrumbs: true,
        //     },
        //     {
        //       id: "EditAbout",
        //       title: "Edit About",
        //       type: "subItem",
        //       url: Route.EDIT_ABOUT,
        //       breadcrumbs: true,
        //     },
        //   ],
        // },

        // {
        //   id: "AdminRequests",
        //   title: "Admin Requests",
        //   type: "item",
        //   url: Route.ADMIN_REQUESTS,
        //   icon: "fas fa-user-shield",
        //   breadcrumbs: true,
        //   subItems: [
        //     {
        //       id: "RequestDetails",
        //       title: "Request Details",
        //       type: "subItem",
        //       url: Route.ADMIN_REQUESTS_DETAILS,
        //       breadcrumbs: true,
        //     },
        //   ],
        // },

        // {
        //   id: "Subscription",
        //   title: "Subscription",
        //   type: "item",
        //   url: Route.SUBSCRIPTION,
        //   icon: "fas fa-poll-h",
        //   breadcrumbs: true,
        // },
        {
          id: "auditLogs",
          title: "Audit Logs",
          type: "item",
          url: Route.AUDIT_LOGS,
          icon: "fab fa-searchengin",
          breadcrumbs: true,
          permissionName: "auditLogs",
        },
        {
          id: "calculator",
          title: "Calculator",
          type: "item",
          url: Route.CALCULATOR,
          icon: "fas fa-calculator",
          breadcrumbs: true,
        },
      ],
    },
  ],
};

export default MenuItems;
