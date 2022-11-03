import { useState } from "react";
import ConfirmDelete from "../../../components/ConfirmDelete";
import SearchArea from "../../../components/ministry/SearchArea";
import TitleSection from "../../../components/ministry/TitleArea";
import Accounts from "./Accounts";

const AgencyPaperAccount = () => {

  //stats on Agency accounts
  const [totalAccounts, setTotalAccounts] = useState(null);
  const [closedAccs, setClosedAccs] = useState(null);
  const [activeAccs, setActiveAccs] = useState(null);
  console.log(closedAccs)
  return (
    <>
      <TitleSection
        totalAccounts={totalAccounts}
        closedAccs={closedAccs}
        activeAccs={activeAccs}
      />
      <SearchArea />
      <Accounts
        setTotalAccounts={setTotalAccounts}
        setClosedAccs={setClosedAccs}
        setActiveAccs={setActiveAccs}
      />
    </>
  );
};

export default AgencyPaperAccount;
