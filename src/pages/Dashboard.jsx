import { useState } from "react";

// Data
import mockData from "../assets/data.json";
import data from ".././assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";


const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  // eslint-disable-next-line
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  // eslint-disable-next-line
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});
  const curr=Object.keys(mockData.results[0].bestExecutionData.orderVolume);



  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle
          primaryTitle="Orders"
          secondaryTitle={`${data.results.length} orders`}
        />
        {/* <HeaderTitle primaryTitle="Orders" secondaryTitle="6 orders" /> */}

        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            // options={["GBP", "USD", "JPY", "EUR"]}
            options={curr}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List rows={mockData.results} timeStamp={timestamps.results} currency={currency} searchText={searchText} setSelectedOrderDetails={setSelectedOrderDetails} setSelectedOrderTimeStamps={setSelectedOrderTimeStamps} />
        
      </div>
    </div>
  );
};

export default Dashboard;
