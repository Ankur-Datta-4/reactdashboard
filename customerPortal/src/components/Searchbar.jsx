// search bar component which has search customer as placeholder and search icon at the end of the search bar
import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { searchUsers } from '../store/features/user';

const Searchbar = () => {
    const dispatch=useDispatch()
    function handleChangeSearchInput(e){
        e?.preventDefault();
        dispatch(searchUsers(e.target.value))
    }
    return (
        <Input
            placeholder="Search customer"
            // style={{border:"none",padding:"3px",margin:"4px",backgroundColor:"#EEF4FD"}}
            suffix={<SearchOutlined style={{color:"blue"}}/>}    
            onChange={handleChangeSearchInput}
        />
    );
}

export default Searchbar;