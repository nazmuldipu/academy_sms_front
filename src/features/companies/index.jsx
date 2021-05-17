/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCompanies, saveCompany, updateCompany } from "./companiesSlice";

import CompanyTable from "./companyTable";
import CompanyForm from "./companyForm";

const CompanyIndex = () => {
  const dispatch = useDispatch();
  const companyPage = useSelector((state) => state.entities.companies.page);

  useEffect(() => {
    dispatch(loadCompanies(1));
  }, []);

  const [company, setCompany] = useState({});
  const [edit, setEdit] = useState(false);

  const handleSelect = async (company) => {
    setCompany(company);
    setEdit(true);
  };

  const handleClear = async () => {
    setEdit(false);
    setCompany({});
  };

  const handleSubmit = async (event) => {
    console.log(event);
    if (edit) {
      dispatch(updateCompany(company._id, event));
    } else {
      dispatch(saveCompany(event));
    }
    setCompany({});
  };

  const handlePagination = (page) => {
    if (companyPage.page !== page) dispatch(loadCompanies(page));
  };

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-7">
          <CompanyTable
            companyPage={companyPage}
            select={handleSelect}
            onPagination={handlePagination}
          ></CompanyTable>
        </div>
        <div className="col-md-5">
          <CompanyForm
            company={company}
            onSubmit={handleSubmit}
            onClear={handleClear}
          ></CompanyForm>
        </div>
      </div>
    </div>
  );
};

export default CompanyIndex;
