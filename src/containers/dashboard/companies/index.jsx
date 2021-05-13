/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { getAll, save, update } from "../../../services/companyService";
import CompanyTable from "./../../../components/tables/companyTable";
import CompanyForm from "./../../../components/forms/companyForm";

const CompanyIndex = () => {
  const [companyPage, setCompanyPage] = useState({});
  const [company, setCompany] = useState({});
  const [edit, setEdit] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    getCompanies();
  }, []);

  const handleSelect = async (company) => {
    setCompany(company);
    setEdit(true);
  };

  const handleClear = async () => {
    setCompany({});
    setEdit(false);
  };

  const getCompanies = async () => {
    try {
      const resp = await getAll();
      setCompanyPage(resp.data);
    } catch (err) {
      if (err.response && err.response.data) {
        setErrMsg(err.response.data.error_description);
      }
    }
  };

  const handleSubmit = async (event) => {
    console.log(event);
    setCompany({})
    try {
      if (edit) {
        const resp = await update(company._id, event);
        console.log(resp);
      } else {
        const resp = await save(event);
        console.log(resp);
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setErrMsg(err.response.data.error_description);
      }
    }
  };

  return (
    <div className="container">
      <div>{errMsg}</div>
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
