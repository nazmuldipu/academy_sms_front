/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCompanies, saveCompany, updateCompany } from "./companiesSlice";

import CompanyTable from "./companyTable";
import CompanyForm from "./companyForm";

const CompanyIndex = () => {
  const dispatch = useDispatch();
  const companyPage = useSelector((state) => state.entities.companies.page);
  const paginate = useSelector((state) => state.pagination);

  useEffect(() => {
    dispatch(loadCompanies(paginate));
  }, [paginate]);

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

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-7">
          <CompanyTable
            companyPage={companyPage}
            select={handleSelect}
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
