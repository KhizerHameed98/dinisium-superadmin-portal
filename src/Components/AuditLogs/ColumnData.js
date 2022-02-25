import moment from "moment";

export const columns = () => {
  return [
    {
      title: "Admin",
      field: "admin_name",
      customSort: (a, b) => {
        let x = a.admin_name.toUpperCase();
        let y = b.admin_name.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1;
      },
    },
    {
      title: "User",
      field: "user_name",
      customSort: (a, b) => {
        let x = a.user_name.toUpperCase();
        let y = b.user_name.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1;
      },
    },
    { title: "Action", field: "action" },
    // { title: "Time", field: "updated_at" },
    {
      title: "Time",
      field: "updated_at",
      customSort: (a, b) =>
        new Date(a.updated_at) > new Date(b.updated_at) ? 1 : -1,
      render: (rowData) => {
        return `${moment(rowData.updated_at).format("h:mm:a")}`;
      },
    },

    {
      title: "Date",
      field: "created_at",
      customSort: (a, b) =>
        new Date(a.created_at) > new Date(b.created_at) ? 1 : -1,
      render: (rowData) => {
        return `${moment(rowData.created_at).format("YYYY-MM-DD " + "h:mm:a")}`;
      },
    },

    // { title: "Date", field: "created_at" },
  ];
};
