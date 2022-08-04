import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setAuthLoggedinState } from '../store/auth'
import { useRouter } from 'next/router'
import { getUserAPI } from "../apiCalls/authAPIs";
const Protected = ({ children }) => {
  const router = useRouter()
  const { isLoggedin } = useSelector((state) => state.auth);
  const dispatch = useDispatch()

  useEffect(() => {
   getUserAPI().then(res=>{
    if (res?.status == 200) {
      dispatch(setAuthLoggedinState(true))
   } else {
      dispatch(setAuthLoggedinState(false))
   }
   })
    
    if (!isLoggedin) router.push('/')
  }, []);

  return <>
    {children}
  </>;
};

export default Protected;
