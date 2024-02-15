"use client";

import { redirect, usePathname, useRouter } from "next/navigation";
import CustomAppBar from "../CustomAppBar/CustomAppBar";
import CustomDrawer from "../CustomDrawer/CustomDrawer";
import { useCookies } from "next-client-cookies";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";
import { exit_session } from "@/app/res/utils/CommonFunctions";

// This a client component, still prerendered
export function Pathname({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  //   const {userAuth} = useSelector(state=>state.auth)
  const cookies = useCookies();
  useEffect(() => {
    let token = cookies.get("token");
    if (token) {
      const user = jwtDecode(token);
      const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
      if (isExpired) {
        exit_session();
      } else {
        router.push("/");
      }
    } else {
      router.push("/login");
    }
  }, [, pathname]);

  return (
    <div>
      {pathname !== "/login" && (
        <div>
          <CustomAppBar />
          <CustomDrawer />
        </div>
      )}
      {children}
    </div>
  );
}
