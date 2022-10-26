import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import React from "react";

export const TaskFilter: React.FC<{
  filterByStatus: string;
  changeFilterByTaskName: (event: any) => void;
  handleChangeStatus: (event: any) => void;
  handleApplyFilter: () => void;
}> = ({
  filterByStatus,
  changeFilterByTaskName,
  handleChangeStatus,
  handleApplyFilter,
}) => {
  return (
    <Box display="flex" justifyContent="center" mb={2}>
      <TextField
        onChange={(event) => changeFilterByTaskName(event)}
        variant="outlined"
      />
      <Select
        onChange={(event) => handleChangeStatus(event)}
        value={filterByStatus}
      >
        <MenuItem value="all">All</MenuItem>;
        <MenuItem value="completed">Completed</MenuItem>;
        <MenuItem value="notCompleted">Not Completed</MenuItem>;
      </Select>
      <Button onClick={() => handleApplyFilter()}>Filter</Button>
    </Box>
  );
};
