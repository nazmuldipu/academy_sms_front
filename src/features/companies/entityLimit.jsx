/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCompanies, maxLimit } from "./companiesSlice";
import CompanyTable from "./companyTable";
import EntityLimitForm from "./entityLimitForm";

const EntityLimit = () => {
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
    dispatch(maxLimit(company._id, event));
    setCompany({});
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
            <EntityLimitForm
              company={company}
              onSubmit={handleSubmit}
              onClear={handleClear}
            ></EntityLimitForm>
          ) : (
            ""
          )}
        </div>
        <div className="col-md-7 my-3 my-md-3">
          <CompanyTable
            companyPage={companyPage}
            select={handleSelect}
          ></CompanyTable>
        </div>
      </div>
    </div>
  );
};

export default EntityLimit;
