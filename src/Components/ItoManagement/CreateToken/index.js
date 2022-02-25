import React, { useState } from "react";
// import CreateItoModal from "./CreateItoModal";
import { createToken } from "../../../Redux/actions/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const CreateToken = ({ match, createToken }) => {
  let history = useHistory();

  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    tokenSymbol: "",
    tokenDecimal: "",
    tokenName: "",
    supply: "",
    itoId: "",
    price: "",
  });
  const { tokenSymbol, tokenDecimal, tokenName, supply, price } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    formData.itoId = match.params.id;
    createToken({ formData, setFormData, history });
  };

  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body p-5">
              <form className="form" onSubmit={onSubmit}>
                <div className="form-group row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Enter Token Name</label>

                      <input
                        type="text"
                        placeholder="Enter Token Name *"
                        className="form-control"
                        name="tokenName"
                        value={tokenName}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Enter Token Symbol</label>

                      <input
                        type="text"
                        placeholder="Enter Token Symbol *"
                        className="form-control"
                        name="tokenSymbol"
                        value={tokenSymbol}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Enter Token Decimal</label>

                      <input
                        type="text"
                        placeholder="Enter Token Decimal *"
                        className="form-control"
                        name="tokenDecimal"
                        value={tokenDecimal}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Enter Supply</label>

                      <input
                        type="number"
                        placeholder="Enter Supply *"
                        className="form-control"
                        name="supply"
                        value={supply}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Enter Price in dollars</label>

                      <input
                        type="number"
                        placeholder="Enter Price *"
                        className="form-control"
                        name="price"
                        value={price}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-lg">
                  CREATE NEW TOKEN
                </button>
              </form>

              {/* <!-- Modal --> */}
              {/* <CreateItoModal show={show} setShow={setShow} /> */}
              {/* <!--end Modal --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end inner row --> */}
    </div>
  );
};

export default connect(null, { createToken })(CreateToken);
