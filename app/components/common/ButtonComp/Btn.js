import { primaryColor } from "@/app/res/utils/themeColors";
import { Button, CircularProgress } from "@mui/material";
import React from "react";

const Btn = ({ children="Submit", variant="contained",style,loading,disabled,onClick}) => {
  return <Button variant={variant} disabled={disabled||loading} sx={{fontWeight:"bold",backgroundColor:primaryColor,"&:hover":{
    backgroundColor:"#555e65"
  },...style}} onClick={onClick}>{ loading?<CircularProgress size={20}/>: children}</Button>;
};

export default Btn;
