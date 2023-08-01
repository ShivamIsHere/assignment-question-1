import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";
import React from 'react';

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";


const List = ({ rows, timeStamp , currency , searchText, setSelectedOrderDetails, setSelectedOrderTimeStamps}) => {
  
  
  const filteredRows = rows.filter((row) => {
    return row["&id"].toUpperCase().includes(searchText.toUpperCase());
  });


  console.log("Filtering:", filteredRows);
  
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {currency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row) => {
          
          const timestamp = timeStamp.find(
            (orderSubmittedDate) => orderSubmittedDate["&id"] === row["&id"]
          );
          const orderSubmitted = timeStamp
            ? timestamp.timestamps.orderSubmitted
            : null;

            
          const SearchedElement = filteredRows.includes(row);
          return (
            SearchedElement && (
              
              <ListRow>
              <ListRowCell  >
                  <span key={row["&id"]}
                    onClick={() => {
                      const orderDetails = {
                        buySellIndicator: row.executionDetails.buySellIndicator,
                        orderStatus: row.executionDetails.orderStatus,
                        orderType: row.executionDetails.orderType,
                      };
                      const timeStamps = {
                        orderReceived: timestamp.timestamps.orderReceived,
                        orderStatusUpdated: timestamp.timestamps.orderStatusUpdated,
                        orderSubmitted: timestamp.timestamps.orderSubmitted,
                      };
                      console.log(timeStamps);
                      setSelectedOrderDetails(orderDetails);
                      setSelectedOrderTimeStamps(timeStamps);
                    }}
                  >
                    {row["&id"]}
                  </span>
                </ListRowCell>
              <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
              <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
              <ListRowCell>{orderSubmitted}</ListRowCell>
              <ListRowCell>{row.bestExecutionData.orderVolume[currency]}</ListRowCell>
            </ListRow>
            
            )
          );
        })}
        
      </tbody>
    </table>
    
  );
};

export default List;
