import styles from "./ListRow.module.css";

const ListCell = ({ children,rows,timeStamp, setSelectedOrderDetails, setSelectedOrderTimeStamps }) => {
  return <tr onClick={()=>{setSelectedOrderTimeStamps(timeStamp);setSelectedOrderDetails(rows)}} className={styles.cell}>{children}</tr>;
};

export default ListCell;
