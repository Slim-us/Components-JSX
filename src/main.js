import React from 'react';

//import React ,{ Component } from 'react'; 
import Profilphoto from './Profile/ProfilPhoto';
import FullName from  "./Profile/FullName" ;
import Address from './Profile/Address';
import  './App.css' ;



  function main () {
    return (
        <div className="profile">
            
            <Profilphoto/>
            
            
            <FullName/>
            <Address/>
        </div>
    );
}
export default main