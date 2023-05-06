// a card which gets rendered when expanded a row in the table in CustomerData page
//

import React, {  useState } from "react";
import { Card, Divider,Button, FloatButton } from "antd";
import IsoDateConverter from "../utils/isoDateConverter";
import { CloseOutlined } from "@ant-design/icons";
import DetailCard from "./DetailCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserSales, selectExpandedUser, selectOrder } from "../store/features/user";
import SalesHistoryModal from "./SalesHistory";


const TableRenderCard = ({ record, handleEdit, handleDelete, handleClose }) => {
    const dispatch=useDispatch();
    const expandedUser=useSelector(selectExpandedUser);
    const order=useSelector(selectOrder)
    const [visible,setVisible]=useState(false);
    
    const handleDisplaySalesData=(id)=>{
    dispatch(fetchUserSales(parseInt(id)))
    setVisible((prev)=>!prev)
  }

    return (
        <div className="row-expandcard-container">
            <div className="row-expandcard-container-row">
                {/* image of user */}
                <div style={{display:"flex", alignItems:"center", marginRight:"6rem"}}>

                <img src={expandedUser?.photoURL || "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"} alt="user" className="row-expandcard-container-row-image"/>
                <DetailCard title={"Name"} value={expandedUser?.name}/>
                </div>
                {/* styles for image */}


                <DetailCard title={"Customer type"} value={expandedUser?.customer_type}/>
                <DetailCard title={"Customer Zone"} value={expandedUser?.customer_zone}/>
                <DetailCard title={"Since Date"} value={IsoDateConverter(expandedUser?.since_date)}/>
                <div style={{display:'flex',alignItems:"center", gap:"1rem"}}>
          <img src="/Edit.svg"/>
          <Button type="primary" onClick={()=>handleDisplaySalesData(expandedUser?.id)}
            style={{color:'#0066FF',backgroundColor:'#D6E7FF',borderRadius:"14px", fontSize:"12px"}}
          >Sales History</Button>
        </div>
            </div>
            <Divider/>
            
            <FloatButton icon={<CloseOutlined />} type="primary" style={{ right: 94 }} onClick={()=>handleClose()} />
            
            <div className="row-expandcard-container-row">
                <div className="flex-col-start" style={{flex:1}}>
                    <i style={{fontSize:"16px"}}>Contact Details</i>
                    <div className="flex-col-start">
                        <DetailCard title={"Name"} value={expandedUser?.name}/>
                        <DetailCard title={"Email"} value={expandedUser?.email}/>
                    </div>
                </div>
                <div className="flex-col-start" style={{flex:2,width:"full"}}>
                <i style={{fontSize:"16px"}}>Purchasing</i>
                    <div className="flex-col-start">
                        <div className="flex-row-start">
                            <DetailCard title={"Currency"} value={order?.purchasing?.currency}/>
                            <DetailCard title={"Payment terms"} value={order?.purchasing?.payment_terms}/>
                            <DetailCard title={"Payment method"} value={order?.purchasing?.payment_method}/>
                        </div>
                        <div className="flex-row-start">
                            <DetailCard title={"Measurement System"} value={order?.purchasing?.measurement_system}/>
                            <DetailCard title={"Incoterms"} value={order?.purchasing?.incoterms}/>
                        </div>

                    </div>
                </div>
            </div>
            <br/>
            <div className="row-expandcard-container-row">
                <div className="flex-col-start" style={{flex:1}}>
                    <i style={{fontSize:"16px"}}>Shipping Details</i>
                    <div className="flex-col-start">
                        <DetailCard title={"Shipping mode"} value={order?.shipping?.mode}/>
                        <DetailCard title={"Shipping port"} value={order?.shipping?.shipping_port}/>
                    </div>
                </div>
                <div className="flex-col-start" style={{flex:2,width:"full"}}>
                <i style={{fontSize:"16px"}}>Address Details</i>
                    <div className="flex-col-start">
                        <div className="flex-row-start" style={{justifyContent:"space-between"}}>
                            <DetailCard title={"Address line 1"} value={order?.addressDetails?.line1}/>
                            <DetailCard title={"Address line 2"} value={order?.addressDetails?.line2}/>
                        </div>
                        <div className="flex-row-start">
                            <DetailCard title={"Zipcode"} value={order?.addressDetails?.zipcode}/>
                            <DetailCard title={"State"} value={order?.addressDetails?.state}/>
                            <DetailCard title={"Country"} value={order?.addressDetails?.country}/>

                        </div>

                    </div>
                </div>
            </div>
            <SalesHistoryModal visible={visible} onCancel={()=>setVisible((prev)=>!prev)}/>
        </div>
    );
    }

export default TableRenderCard;