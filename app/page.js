
import { Button, Stack, Typography } from "@mui/material";
import { cookies } from "next/headers";

export default function Home() {
  const cookieStore = cookies()
  const theme = cookieStore.getAll()

  return (
    <Stack
   
      padding={0}
    >
        {/* <Typography>Home</Typography> */}
      
    </Stack>
  );
}
