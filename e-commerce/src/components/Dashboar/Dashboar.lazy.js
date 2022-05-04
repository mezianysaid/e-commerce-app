import React, { lazy, Suspense,useEffect, useState } from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { FetchPoducts } from '../../Store/actions'
import PhoneAndroidOutlined from '@mui/icons-material/PhoneAndroidOutlined'
import Girl from '@mui/icons-material/Girl'
import LaptopChromebook from '@mui/icons-material/LaptopChromebook'
import Boy from '@mui/icons-material/Boy'
import TimeToLeave from '@mui/icons-material/TimeToLeave'


const LazyDashboar = lazy(() => import('./Dashboar'));

const Dashboar = () => {
  
  const categories = [    
    { name:'men',icon:<Boy/>},
    { name:'women',icon:<Girl/>},
    { name:'phones',icon:<PhoneAndroidOutlined/>},
    { name:'laptops',icon:<LaptopChromebook/>},
    { name:'cars',icon:<TimeToLeave/>}
  ]

let props={
  categories,
}
  return (
    <Suspense fallback={null}>
    <LazyDashboar {...props} />
  </Suspense>
  );
}

export default Dashboar;
