import { Box, Button, Divider, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../model/IUser";
import { IUserFields } from "../model/IUserFields";
import { useDispatch } from "react-redux";
import { update } from "../features/user";
export const UserDetails: React.FC<{
  details: IUser;
  setIsOpen: (check: boolean) => void;
}> = ({ details, setIsOpen }) => {
  const [personalInfo, setpersonalInfo] = useState<IUser>(details);
  const [isEdited, setIsEdited] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleSave = () => {
    dispatch(update(personalInfo));
  };
  const handleSeePosts = () => {
    navigation("/posts?userId=" + details.id);
  };
  const handleChangeForm = (name: string) => (event: any) => {
    if (event.target.value === "") {
      switch (name) {
        case "name":
          setErrorMessage(name);
          return;
        case "email":
          setErrorMessage(name);
          return;
        case "username":
          setErrorMessage(name);
          return;
        case "city":
          setErrorMessage(name);
          return;
        case "street":
          setErrorMessage(name);
          return;
        case "suite":
          setErrorMessage(name);
          return;
      }
    }
    if (name === errorMessage) {
      setErrorMessage("");
    }
    setpersonalInfo({ ...personalInfo, [name]: event.target.value });
  };
  const showError = errorMessage !== "" ? true : false;
  return (
    <Box ml={5} mt={3} component="form" onChange={() => setIsEdited(true)}>
      <Box
        mb={2}
        sx={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap" }}
      >
        <TextField
          label={IUserFields.NAME}
          defaultValue={personalInfo.name}
          variant="outlined"
          required
          onChange={handleChangeForm("name")}
        />
        <TextField
          label={IUserFields.USERNAME}
          defaultValue={personalInfo.username}
          variant="outlined"
          required
          onChange={handleChangeForm("username")}
        />
        <TextField
          label={IUserFields.EMAIL}
          defaultValue={personalInfo.email}
          variant="outlined"
          required
          onChange={handleChangeForm("email")}
        />
        <TextField
          label={IUserFields.PHONE}
          defaultValue={personalInfo.phone}
          variant="outlined"
          onChange={handleChangeForm("phone")}
        />
        <TextField
          label={IUserFields.WEBSITE}
          defaultValue={personalInfo.website}
          variant="outlined"
          onChange={handleChangeForm("website")}
        />
      </Box>
      <Divider />
      <Box
        mt={2}
        mb={2}
        sx={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap" }}
      >
        <TextField
          label={IUserFields.CITY}
          defaultValue={personalInfo.address.city}
          variant="outlined"
          required
          onChange={handleChangeForm("city")}
        />
        <TextField
          label={IUserFields.STREET}
          defaultValue={personalInfo.address.street}
          variant="outlined"
          required
          onChange={handleChangeForm("street")}
        />
        <TextField
          label={IUserFields.SUITE}
          defaultValue={personalInfo.address.suite}
          variant="outlined"
          required
          onChange={handleChangeForm("suite")}
        />
        <TextField
          label={IUserFields.ZIPCODE}
          defaultValue={personalInfo.address.zipcode}
          variant="outlined"
          onChange={handleChangeForm("zipcode")}
        />
      </Box>
      <Divider />
      <Box
        mt={2}
        mb={2}
        sx={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap" }}
      >
        <TextField
          label={IUserFields.COMPANYNAME}
          defaultValue={personalInfo.company.name}
          variant="outlined"
          onChange={handleChangeForm("company.name")}
        />
        <TextField
          label={IUserFields.COMPANYCATCHPHRASE}
          defaultValue={personalInfo.company.catchPhrase}
          variant="outlined"
          onChange={handleChangeForm("company.catchPhrase")}
        />
        <TextField
          label={IUserFields.COMPANYBS}
          defaultValue={personalInfo.company.bs}
          variant="outlined"
          onChange={handleChangeForm("company.bs")}
        />
      </Box>
      {showError && (
        <Box mb={2} display="flex" justifyContent="center" color="red">
          {errorMessage} cannot be empty
        </Box>
      )}
      <Stack
        display="flex"
        justifyContent="flex-end"
        spacing={2}
        direction="row"
        mb={2}
        mt={2}
      >
        <Button variant="contained" onClick={() => handleSeePosts()}>
          See Posts
        </Button>
        <Button onClick={() => setIsOpen(false)} variant="outlined">
          Cancel
        </Button>
        <Button
          disabled={!isEdited || showError}
          onClick={() => handleSave()}
          variant="contained"
        >
          Save
        </Button>
      </Stack>
    </Box>
  );
};
