import { Table, Button, Modal, FloatButton } from 'antd';
import { useEffect, useState } from 'react';
import WithSidebar from '../components/WithSidebar';
import WithHeader from '../components/WithHeader';
import Searchbar from '../components/Searchbar';
import IsoDateConverter from '../utils/isoDateConverter';
import { PlusOutlined } from '@ant-design/icons';
import TableRenderCard from '../components/TableRenderCard';
import SalesHistoryModal from '../components/SalesHistory';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers, fetchUserById, fetchUserSales, selectAllUsers } from '../store/features/user';


const CustomerData = () => {
  const [visible, setVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const dispatch=useDispatch();
  const users=useSelector(selectAllUsers);
  useEffect(()=>{
    dispatch(fetchAllUsers());
  },[])

  const handleRowClick = (record) => {
    if (selectedRow === record.key) {
      setSelectedRow(null);
    } else {
      setSelectedRow(record.key);
      dispatch(fetchUserById(parseInt(record.key)))
    }
  };

  const expandedRowRender = (record) => (
    <TableRenderCard record={record} handleClose={()=>handleRowClick(record)} />
  );

  const handleDisplaySalesData=(record)=>{
    dispatch(fetchUserSales(parseInt(record?.key)))
    setVisible((prev)=>!prev)
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render:(text,record)=>(
        <div style={{display:"flex", alignItems:"center", marginRight:"6rem"}}>
          <img src={record.photoURL} alt="profile" style={{width:"50px", height:"50px", borderRadius:"50%", marginRight:"10px"}}/>
          <p>{record.name}</p>
        </div>
      )
    },
    {
      title: 'Customer Type',
      dataIndex: 'customer_type',
      key: 'customer_type',
    },
    {
      title: 'Customer Zone',
      dataIndex: 'customer_zone',
      key: 'customer_zone',
    },
    {
      title: 'Since Date',
      key: 'since_date',
      render:(text,record)=>(
        <p>{IsoDateConverter(record.since_date)}</p>
      )
    },
    {
      title: '',
      key: 'actions',
      render: (text, record) => (
        <div style={{display:'flex',alignItems:"center", gap:"1rem"}}>
          <img src="/Edit.svg"/>
          <Button type="primary" onClick={() => handleDisplaySalesData(record)}
            style={{color:'#0066FF',backgroundColor:'#D6E7FF',borderRadius:"14px", fontSize:"12px"}}
          >Sales History</Button>
        </div>
      ),
    },
  ];

  

  return (
    <WithHeader>

    <WithSidebar>
    
    <div style={{display:"flex", flexDirection:"column",padding:"10px", width:"100%"}}>
      <h1 style={{fontSize:"18px"}}>Customer Data</h1>

      <Searchbar/>

      <Table
        columns={columns}
        dataSource={users}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
        style={{ marginTop:"2rem"}}
        rowSelection={{
          type:'checkbox'
        }}
        expandable={{
          expandIcon:()=>null
        }}
        expandedRowRender={(record) => expandedRowRender(record)}
        expandedRowKeys={[selectedRow]}
        rowClassName={"table-row-style"}
        locale={{
          emptyText:"No Customers Exist"
        }}
      />
      <SalesHistoryModal visible={visible} onCancel={()=>setVisible((prev)=>!prev)}/>

    </div>
    {
      !selectedRow && <FloatButton icon={<PlusOutlined />} type="primary" style={{ right: 94 }} />
    }
    
    </WithSidebar>
    </WithHeader>
  );
};

export default CustomerData;
