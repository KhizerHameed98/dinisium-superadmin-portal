import React from "react";

const InvestmentDetailsItem = ({ investmentDetailsData }) => {
  return (
    <>
      <td>{investmentDetailsData && investmentDetailsData.token_name}</td>
      <td>{investmentDetailsData && investmentDetailsData.token_symbol}</td>
      <td>{investmentDetailsData && investmentDetailsData.order_type}</td>
      <td className="text-dr-green">
        {investmentDetailsData && investmentDetailsData.status}
      </td>
      <td>{investmentDetailsData && investmentDetailsData.amount}</td>
    </>
  );
};

export default InvestmentDetailsItem;
