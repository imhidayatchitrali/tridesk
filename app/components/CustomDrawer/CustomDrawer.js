import { Stack } from "@mui/material";
import CustomMenu from "../common/CustomMenu/CustomMenu";
import { primaryColor } from "@/app/res/utils/themeColors";
import { menuItems } from "@/app/res/utils/tempObjMenu";
import styles from "./CustomDrawer.css";
const CustomDrawer = () => {
  return (
    <Stack
      width={"100%"}
      flexDirection={"row"}
      sx={{
        backgroundColor: primaryColor,
        overflowX: "scroll",
        whiteSpace: "nowrap",
     
        '&::-webkit-scrollbar': {
            width: "5px",
            backgroundColor: "#F5F5F5",
            display:"none"
        },
        
      }}
      padding={"10px"}
      alignItems={"center"}
      gap={4}
      className={styles.removeScroll}
      
    >
      {menuItems?.map((e) => {
        return <CustomMenu dataObj={e} />;
      })}
    </Stack>
  );
};

export default CustomDrawer;
