export const columns = ({ handleDelete, handleBlockUnBlock }) => {
  return [
    {
      title: "Name",
      field: "name",
      customSort: (a, b) => {
        let x = a.name.toUpperCase(),
          y = b.name.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1;
      },
    },
    {
      title: "Email",
      field: "email",
      customSort: (a, b) => {
        let x = a.email.toUpperCase(),
          y = b.email.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1;
      },
    },
    // { title: "ITO Name", field: "ito_name" },
    { title: "Contact", field: "contact_no", sorting: false },
    // { title: "Role", field: "role" },

    {
      title: "",
      field: "button",
      render: (rowData) => (
        <button
          className="dls-btn bg-semi-black text-white width-max-content"
          onClick={() => handleBlockUnBlock(rowData?.id, rowData?.is_blocked)}
        >
          {rowData?.is_blocked ? "Unblock User" : "Block User"}
        </button>
      ),
    },
  ];
};
