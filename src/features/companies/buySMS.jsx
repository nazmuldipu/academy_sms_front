/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BuySMSForm from "./buySMSForm";
import { loadCompanies, addSMS } from "./companiesSlice";
import CompanyTable from "./companyTable";

const BuySMS = () => {
  const dispatch = useDispatch();
  const companyPage = useSelector((state) => state.entities.companies.page);
  const paginate = useSelector((state) => state.pagination);

  const [company, setCompany] = useState({});

  useEffect(() => {
    dispatch(loadCompanies(paginate));
  }, [paginate]);

  const handleSelect = async (company) => {
    setCompany(company);
  };

  const handleSubmit = async (event) => {
    dispatch(addSMS(company._id, event));
    setCompany({});
  };

  const handleClear = async () => {
    setCompany({});
  };

  return (
    <div className="container">
      <div className="row my-3">
        
        <div className="col-md-5">
          {company.name ? (
            <BuySMSForm
              company={company}
              onSubmit={handleSubmit}
              onClear={handleClear}
            ></BuySMSForm>
          ) : (
            ""
          )}
        </div>

        <div className="col-md-7 my-3 my-md-0 ">
          <CompanyTable
            companyPage={companyPage}
            select={handleSelect}
          ></CompanyTable>
        </div>
      </div>
    </div>
  );
};

export default BuySMS;
