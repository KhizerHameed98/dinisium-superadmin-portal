import React, { Fragment, useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import MaterialTable from "material-table";
import { Route, useHistory } from "react-router";
import { Maximize } from "@material-ui/icons";
import ExploreIcon from "@mui/icons-material/Explore";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import ReactDOMServer from "react-dom/server";
// import Select from "react-select";

import jsPDF from "jspdf";
import { columns2 } from "../AdminManagement/AllUsersData/ColumnData2";
import pdfMake from "pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import axios from "axios";
import { exchange, SERVER_URL } from "../../Routes/serverRoutes";
import htmlToPdfmake from "html-to-pdfmake";
import "jspdf-autotable";
import { Button } from "@mui/material";

const doc = new jsPDF();

function TableWithDetailButton({
  columns,
  data,
  RouteBtn,
  isViewDetailBtn,
  isViewIconBtn,
  isOption,
  RouteForIconBtn,
  title,
  viewDetailButtonName,
}) {
  // console.log("Title===========>", title1);
  // const { accordianTitle, tableTitle } = title1;

  const history = useHistory();
  const [mainData, setMainData] = useState([]);
  useEffect(async () => {
    let d = await axios.get(exchange.ADD_TOKEN_TO_EXCHANGE);
    setMainData(d?.data?.data);
  }, []);
  // console.log("titleObj is", titleObj);
  // const myTitle = accordianTitle;
  const [option, setOption] = useState("");
  const [itoID, setItoID] = useState("");
  const [tokenData, setTokenData] = useState("");

  const handleChange = (e) => {
    let c = e.target.value;
    let v = c.split("+");

    setItoID(v[0]);
    setOption(v[1]);
  };

  useEffect(async () => {
    if (itoID) {
      let check = await axios.get(`${exchange.ADMIN_ITO_ID}${itoID}`);
      let tempRes = check?.data?.data;
      let tokenDataTemp = [];
      for (let i = 0; i < tempRes.length; i++) {
        let temp = {
          admin_name: tempRes[i].admin_name,
          id: tempRes[i].admin_id,
        };
        tokenDataTemp.push(temp);
      }
      setTokenData(tokenDataTemp);
    }
  }, [itoID]);
  useEffect(() => {
    if (tokenData) {
    }
  }, [tokenData]);
  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "";
    const headers = [["ADMIN", "USER", "ACTION", "TIME", "DATE"]];
    const dataToPrint = data.map((d) => [
      d?.admin_name,
      d?.user_name,
      d?.action,
      new Date(d?.created_at).toString().substring(16, 24),
      new Date(d?.created_at).toISOString().substring(0, 10) +
        " " +
        new Date(d?.created_at).toString().substring(16, 21),
      ,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: dataToPrint,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf");

    const hi = <h1>hello</h1>;
    console.log("khizer========", hi);
  };

  const generateReport = () => {
    // const doc = new jsPDF();
    //get table html
    // var doc = new jsPDF("p", "pt", "a4");
    // doc.html(document.querySelector("#MuiTable-root"), {
    //   callback: function (pdf) {
    //     pdf.save("mypdf.pdf");
    //   },
    // });

    //html to pdf format

    const doc = new jsPDF();

    //get table html
    const pdfTable = document.querySelector(".MuiTable-root");
    //html to pdf format
    var html = htmlToPdfmake(pdfTable.innerHTML);

    const documentDefinition = { content: html };
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.createPdf(documentDefinition).open();
  };

  return (
    <div className="table-responsive">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h6 style={{ marginLeft: "1rem" }}>{title}</h6>
        </AccordionSummary>
        {isOption && (
          <>
            {/* <Select
              style={{ width: "auto", marginBottom: "500px" }}
              className="basic-single w-100"
              classNamePrefix="select"
              defaultValue={[]}
              isDisabled={false}
              isLoading={false}
              // isClearable={true}
              isRtl={false}
              isSearchable={true}
              name="color"
              options={mainData && mainData.length > 0 ? mainData : []}
              onChange={handleChange}
            /> */}
            <div className="col-sm-6">
              <div className="form-group">
                <label>Select Token</label>
                {mainData.length > 0 && (
                  <select
                    name="threshold_type"
                    className="form-control"
                    onChange={handleChange}
                  >
                    <option
                      value=""
                      disabled
                      selected
                      className="select_Token_placeholder"
                    >
                      Select Token
                    </option>
                    {mainData?.map((d, key) => {
                      return (
                        <>
                          <option value={`${d?.ito_id}+${d?.token_name}`}>
                            {d?.token_name}
                          </option>

                          {/* <option value={d?.ito_id}>{d?.token_name}</option> */}
                        </>
                      );
                    })}
                  </select>
                )}
              </div>
            </div>
          </>
        )}
        <AccordionDetails>
          {!isViewDetailBtn && (
            <button className="btn btn-primary mb-5" onClick={exportPDF}>
              Generate
            </button>
          )}

          {isOption ? (
            <>
              {tokenData && (
                <MaterialTable
                  title={"LIST OF ALLOTTED ADMINS"}
                  columns={columns2}
                  data={tokenData}
                  // Section for View Detail button

                  actions={[
                    {
                      ...(isViewDetailBtn && {
                        icon: "",
                        tooltip: "View Details",
                        onClick: (e, data) => {
                          e.preventDefault();
                          history.push(`${RouteBtn}${data?.id}`);
                        },
                      }),
                    },
                    {
                      ...(isViewIconBtn && {
                        icon: "Explore",
                        tooltip: "Explore more",
                        isFreeAction: true,
                      }),
                    },
                  ]}
                  components={{
                    Action: (props) => {
                      return (
                        <>
                          {props.action.icon === "Explore" && (
                            <Link
                              style={{
                                margin: "20px",
                                textDecoration: "underline",
                                fontSize: "15px",
                              }}
                              to={RouteForIconBtn}
                            >
                              <b>Explore More</b>
                            </Link>
                          )}
                          {props.action.icon === "" && (
                            <button
                              onClick={(event) =>
                                props.action.onClick(event, props.data)
                              }
                              className="dls-btn1 bg-semi-black text-white"
                            >
                              {viewDetailButtonName}
                            </button>
                          )}
                        </>
                      );
                    },
                  }}
                  options={{
                    actionsColumnIndex: -1,
                    headerStyle: {
                      backgroundColor: "#0394FD",
                      color: "#FFF",
                    },
                  }}
                  localization={{
                    header: {
                      actions: "",
                    },
                  }}
                  // Section for Explore More Link
                  // {...(isViewIconlBtn && {
                  //   actions: [
                  //     {
                  //       icon: { actionIcon },
                  //       tooltip: "Explore more",
                  //       isFreeAction: true,
                  //     },
                  //   ],
                  //   components: {
                  //     Action: (props) => (
                  //       <Link
                  //         style={{
                  //           margin: "20px",
                  //           textDecoration: "underline",
                  //           fontSize: "15px",
                  //         }}
                  //         to={RouteForIconBtn}
                  //       >
                  //         <b>Explore More</b>
                  //       </Link>
                  //     ),
                  //   },
                  // })}
                />
              )}
            </>
          ) : (
            <div>
              <MaterialTable
                title={title}
                columns={columns}
                data={data}
                // Section for View Detail button

                actions={[
                  {
                    ...(isViewDetailBtn && {
                      icon: "",
                      tooltip: "View Details",
                      onClick: (e, data) => {
                        e.preventDefault();
                        history.push(`${RouteBtn}${data?.id}`);
                      },
                    }),
                  },
                  {
                    ...(isViewIconBtn && {
                      icon: "Explore",
                      tooltip: "Explore more",
                      isFreeAction: true,
                    }),
                  },
                ]}
                components={{
                  Action: (props) => {
                    return (
                      <>
                        {props.action.icon === "Explore" && (
                          <Link
                            style={{
                              margin: "20px",
                              textDecoration: "underline",
                              fontSize: "15px",
                            }}
                            to={RouteForIconBtn}
                          >
                            <b>Explore More</b>
                          </Link>
                        )}
                        {props.action.icon === "" && (
                          <button
                            onClick={(event) =>
                              props.action.onClick(event, props.data)
                            }
                            className="dls-btn1 bg-semi-black text-white"
                          >
                            {viewDetailButtonName}
                          </button>
                        )}
                      </>
                    );
                  },
                }}
                options={{
                  actionsColumnIndex: -1,
                  headerStyle: {
                    backgroundColor: "#0394FD",
                    color: "#FFF",
                  },
                }}
                localization={{
                  header: {
                    actions: "",
                  },
                }}
                // Section for Explore More Link
                // {...(isViewIconlBtn && {
                //   actions: [
                //     {
                //       icon: { actionIcon },
                //       tooltip: "Explore more",
                //       isFreeAction: true,
                //     },
                //   ],
                //   components: {
                //     Action: (props) => (
                //       <Link
                //         style={{
                //           margin: "20px",
                //           textDecoration: "underline",
                //           fontSize: "15px",
                //         }}
                //         to={RouteForIconBtn}
                //       >
                //         <b>Explore More</b>
                //       </Link>
                //     ),
                //   },
                // })}
              />
            </div>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default TableWithDetailButton;
