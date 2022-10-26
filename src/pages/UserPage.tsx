import { Box, Card, CardHeader, List } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../app/components/User";
import { populate } from "../app/features/user";
import { IUser } from "../app/model/IUser";
import { selectUser } from "../app/store";

export const UserPage: React.FC<{}> = () => {
  const users: IUser[] = useSelector(selectUser);
  const dispatch = useDispatch();
  const [showError, setShowError] = useState<boolean>(false);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        dispatch(populate(res.data));
      })
      .catch(function (error) {
        setShowError(true);
      });
  }, [dispatch]);
  if (users.length < 1) {
    return <Box>No users found</Box>;
  }
  if (showError) {
    return <Box>Woops, something went wrong</Box>;
  }
  return (
    <Card raised elevation={1} sx={{ minWidth: 275 }}>
      <CardHeader title={"Users"} />
      <List>
        {users.map((user: IUser, index) => {
          return user && <User key={index} user={user} />;
        })}
      </List>
    </Card>
  );
};
