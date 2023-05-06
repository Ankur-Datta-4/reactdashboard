import { useState } from 'react';
import { Divider, Modal, Select, Table } from 'antd';
import { useSelector } from 'react-redux';
import { selectSales } from '../store/features/user';
import IsoDateConverter from '../utils/isoDateConverter';
import { selectExpandedUser } from '../store/features/user';

const SalesHistoryModal = ({ visible, onCancel }) => {
  
  const salesData=useSelector(selectSales);
  const expandedUser=useSelector(selectExpandedUser);
  
  const columns = [
    { title: 'Sales order', dataIndex: 'sales_order', key: 'salesOrder' },
    { title: 'Sales Date', key: 'salesDate', render:(text,record)=>(<p>{IsoDateConverter(record.sales_date)}</p>) },
    { title: 'Product', dataIndex: 'product', key: 'product' },
    { title: 'Thickness', dataIndex: 'thickness', key: 'thickness' },
    { title: 'Finish', dataIndex: 'finish', key: 'finish' },
    { title: 'Unit price', dataIndex: 'unit_price', key: 'unitPrice' },
  ];

  return (
    <Modal
      title="Sales Details"
      open={visible}
      onCancel={onCancel}
      footer={null}
    >
      <h2>{expandedUser?.name}</h2>
      <Divider style={{margin:"4px"}}/>
      <Select style={{width:"100%",margin:"10px 0px"}} value={"saleshistory"}>
        <Select.Option value={"saleshistory"}>Sales History</Select.Option>
      </Select>
      <Table dataSource={salesData} columns={columns} locale={
        {
          emptyText: 'No sales history'
        }
      }/>
    </Modal>
  );
};

export default SalesHistoryModal;
