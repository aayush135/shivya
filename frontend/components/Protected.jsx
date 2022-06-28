import React, { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import {setAuthLoggedinState} from '../store/auth'
import { useRouter } from 'next/router'
const Protected = ({ children }) => {
    const router = useRouter()
  const { isLoggedin } = useSelector((state) => state.auth);
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(setAuthLoggedinState(true))
    if(!isLoggedin) router.push('/')
  }, []);

  return <>
  {children}
    </>;
};

export default Protected;
