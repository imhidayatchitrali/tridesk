import { useRef, useState } from "react";
import {
  ControlledMenu,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  SubMenu,
  useHover,
  useMenuState,
} from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const CustomMenu = ({ dataObj }) => {
  const { col_menu_name, children } = dataObj;
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const { anchorProps, hoverProps } = useHover(isOpen, setOpen);
  const menuState = useMenuState();
  return (
    <>
      {/* <div ref={ref} {...anchorProps}>
        Hover
      </div> */}

      {/* <Stack
        ref={ref}
        {...anchorProps}
        flexDirection={"row"}
        gap={1}
        justifyContent={"center"}
      >
        <Typography sx={{ color: "white", fontSize: 14, fontWeight: "bold" }}>
          {col_menu_name}
        </Typography>
        <KeyboardArrowDownIcon
          color="white"
          sx={{ color: "white", fontWeight: "bold" }}
        />
      </Stack> */}

      {/* <ControlledMenu
        {...hoverProps}
        state={isOpen ? "open" : "closed"}
        anchorRef={ref}
        onClose={() => setOpen(false)}
      >
        <SubMenu
          label={
            <>
              {children?.map((e) => {
                return (
                  <MenuItem>
                    {e?.col_menu_name}
                  </MenuItem>
                );
              })}
            </>
          }
        >
          
        </SubMenu>
      </ControlledMenu> */}
      <Menu
      position="anchor"
      direction="bottom"
      align="center"
      menuStyle={{marginTop:10,borderBottom:"3px solid black"}}
        menuButton={
          <Stack
            ref={ref}
            {...anchorProps}
            flexDirection={"row"}
            gap={1}
            justifyContent={"center"}
            sx={{ cursor: "pointer" }}
          >
            <Typography
              sx={{ color: "white", fontSize: 14, fontWeight: "bold" }}
            >
              {col_menu_name}
            </Typography>
            <KeyboardArrowDownIcon
              color="white"
              sx={{ color: "white", fontWeight: "bold" }}
            />
          </Stack>
        }
      >
        {children?.map((e) => {
          return (
            <SubMenu  menuStyle={{marginTop:45,borderBottom:"3px solid black"}} label={e?.col_menu_name}>
              {e?.children?.map((elem) => {
             return   <MenuItem style={{marginBottom:"10px"}}>{elem?.col_menu_name}</MenuItem>;
              })}
           
            </SubMenu>
          );
        })}
      </Menu>
    </>
  );
};

export default CustomMenu;
