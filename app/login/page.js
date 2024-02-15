"use client";
import { Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Btn from "../components/common/ButtonComp/Btn";
import InputComp from "../components/common/InputComp/Input";
import logo from "../assets/images/logo.png";
import Image from "next/image";
import { primaryColor } from "../res/utils/themeColors";
import { login_async } from "../redux/services/authService";
import { asyncStatus } from "../res/utils/asyncStatus";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter()
  const dispatch = useDispatch();
  const { loginStatus, loginError, userAuth } = useSelector(
    (state) => state.auth
  );
  const [loginObj, setLoginObj] = useState({});
  const inputHandler = (event) => {
    const { id, value } = event.target;
    setLoginObj((prev) => {
      return { ...prev, [id]: value };
    });
  };

  useEffect(() => {
if(loginStatus===asyncStatus.SUCCEEDED){
  router.push("/")
}
  }, [,loginStatus])
  
  return (
    <Stack
      width={1}
      height={"100vh"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      position={"relative"}
      padding={0}
    >
      <Stack
        position={"absolute"}
        style={{ backgroundColor: primaryColor }}
        width={1}
        top={0}
        paddingLeft={"15%"}
      >
        <Image
          src={logo}
          width={70}
          height={50}
          style={{ filter: "invert(1)", objectFit: "contain" }}
        />
      </Stack>
      <Stack
        position={"absolute"}
        style={{ backgroundColor: primaryColor }}
        width={1}
        bottom={0}
        paddingX={"15%"}
        paddingY={1}
        flexDirection={{ xl: "row", lg: "row", md: "row" }}
        justifyContent={"space-between"}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: { xl: 16, lg: 16, md: 16, sm: 14, xs: 14 },
          }}
        >
          © OMS | OMS Terms of Use for ERP Support Portal | OMS Privacy Policy
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: { xl: 16, lg: 16, md: 16, sm: 14, xs: 14 },
          }}
        >
          OMS Suit
        </Typography>
      </Stack>
      <Stack
        sx={{ boxShadow: "1px 1px 20px 0px rgb(0 0 0 / 14%)" }}
        width={{ xl: "40%", lg: "40%", md: "60%", sm: "80%", xs: "90%" }}
        maxWidth={"380px"}
        padding={"20px"}
        borderRadius={1}
        gap={3}
      >
        <Typography
          sx={{ fontSize: 22, fontWeight: "500", textAlign: "center" }}
          mb={2}
        >
          OMS LOGIN
        </Typography>
        <InputComp
          onChange={(e) => inputHandler(e)}
          id={"userName"}
          placeholder="Username/Email"
        />
        <InputComp
          type={"password"}
          onChange={(e) => inputHandler(e)}
          id={"userPassword"}
          placeholder="Password"
        />
        {loginStatus === asyncStatus.ERROR && (
          <Typography sx={{color:"red",fontSize:14}}>{loginError}</Typography>
        )}
        <Btn
          loading={loginStatus === asyncStatus.LOADING}
          disabled={!(loginObj.userPassword && loginObj.userName)}
          onClick={() => dispatch(login_async(loginObj))}
        >
          Login
        </Btn>
        <Stack alignItems={"center"} paddingX={2}>
          <Typography
            marginBottom={2}
            fontSize={14}
            color={"gray"}
            sx={{ cursor: "pointer" }}
          >
            Forgot your password?
          </Typography>
          <Typography fontSize={14} color={"gray"}>
            By clicking on the Log In button, you understand and agree to{" "}
            <Typography
              variant="span"
              sx={{
                textAlign: "center",
                cursor: "pointer",
                fontSize: 14,
                color: "black",
                ":hover": { textDecorationLine: "underline" },
              }}
            >
              OMS Terms of Use
            </Typography>{" "}
            and{" "}
            <Typography
              variant="span"
              sx={{
                textAlign: "center",
                cursor: "pointer",
                fontSize: 14,
                color: "black",
                ":hover": { textDecorationLine: "underline" },
              }}
            >
              OMS Privacy Policy
            </Typography>
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default Page;
