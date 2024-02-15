"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import dlLogo from "../../assets/images/dlLogo.png";
import Image from "next/image";
import InputComp from "../common/InputComp/Input";
import { Stack } from "@mui/material";
import AppBarMenu from "./AppBarMenu";
export default function CustomAppBar() {
  
  return (
    <Stack sx={{ position:"sticky",top:0,height:"70px",flexDirection:"row",justifyContent:"space-between",backgroundColor:"white",borderBottom:"1px solid black",alignItems:"center"}} px={2}>
      <Image
        src={dlLogo}
        width={150}
        height={70}
        style={{ objectFit: "contain" }}
      />
      {/* <Stack flexDirection={"row"} > 
        <InputComp />
        <SearchIcon color="white" />
      </Stack> */}
        <AppBarMenu/>
    </Stack>
  );
}
