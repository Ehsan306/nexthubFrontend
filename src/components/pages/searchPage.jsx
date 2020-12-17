// @flow
import * as React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import "../../CSS/search.css"
import InputBase from '@material-ui/core/InputBase';
import Image from "../../images/image1.png"

function SearchPage() {
  return (
    <div className="container-fluid">
            <div className="row">
                <div className="col-9">
                <div style={{
                    backgroundColor : '#F0F3F5',
                    borderRadius: '55px'
                }}>
                    <IconButton type="submit" aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        placeholder="Search"
                    />
                    
                
                </div>
                </div>
                <div className="col-3">
                    <button className="filter-btn btn-block">
                        Filters
                    </button>
                </div>
            </div>
            <br/>
            <br/>
            <div className="container-fluid">
            <div className="row">
                <div className="col-4">
                    <img src={Image} alt="" style={{
                        width : '100%'
                    }} />
                </div>
                 <div className="col-4">
                    <img src={Image} alt="" style={{
                        width : '100%'
                    }} />                
                </div>
                <div className="col-4">
                    <img src={Image} alt="" style={{
                        width : '100%'
                    }} />
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-4">
                    <img src={Image} alt="" style={{
                        width : '100%'
                    }} />
                </div>
                 <div className="col-4">
                    <img src={Image} alt="" style={{
                        width : '100%'
                    }} />                
                </div>
                <div className="col-4">
                    <img src={Image} alt="" style={{
                        width : '100%'
                    }} />
                </div>
            </div>
            </div>
            
    </div>
  );
};
export default SearchPage