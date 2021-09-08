import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Items: React.FC<{props?: any}> = () => {

  const apiCall = axios.get('https://next.json-generator.com/api/json/get/E1HWKqdd8')
    .then(res => {
      console.log("Call request sucess!", res.data);
      return res.data;
    })
    .catch(err => console.error(err));

  return(
    <div>
      This is an items page
    </div>
  )
}

export default Items;