import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SMSNavbar from "./navbar";
import ClassSMS from "./classSMS";
import ResultSMS from "./resultSMS";
import AbsentSMS from "./absentSMS";
import LateSMS from "./lateSMS";
import ManualSMS from "./manualSMS";
import SMSHistory from './smsHistory';
import AllSMS from './allSMS';

const SMSRoutes = () => {
  return (
    <div className="container">
      <SMSNavbar />
      <Switch>
        <Route exact path="/dashboard/sms" component={AllSMS} />
        <Route exact path="/dashboard/sms/class" component={ClassSMS} />
        <Route exact path="/dashboard/sms/result" component={ResultSMS} />
        <Route exact path="/dashboard/sms/absent" component={AbsentSMS} />
        <Route exact path="/dashboard/sms/late" component={LateSMS} />
        <Route exact path="/dashboard/sms/manual" component={ManualSMS} />
        <Route exact path="/dashboard/sms/history" component={SMSHistory} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default SMSRoutes;
