import { ListItem, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import React, { useState } from "react";
import { UserDetails } from "./UserDetails";
import { IUser } from "../model/IUser";

export const User: React.FC<{ user: IUser }> = ({ user }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <ListItem>
      <Box display="flex" flexDirection="column">
        <Box display="flex" alignItems="center">
          {isOpen ? (
            <ExpandLessIcon onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <ExpandMoreIcon onClick={() => setIsOpen(!isOpen)} />
          )}
          {user.name}
        </Box>
        {isOpen ? (
          <UserDetails setIsOpen={(check) => setIsOpen(check)} details={user} />
        ) : null}
      </Box>
    </ListItem>
  );
};
