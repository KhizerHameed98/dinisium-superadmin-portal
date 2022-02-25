export const columns = (handleBlockUnBlock) => {
  return [
    { title: "Name", field: "fname" },
    { title: "Email", field: "email" },
    { title: "Country", field: "country" },
    {
      title: null,
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
