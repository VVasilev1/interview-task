import { Box, MenuItem, Select } from "@mui/material";
import React from "react";
import { ITask } from "../model/ITask";

export const TaskTable: React.FC<{
  taskState: ITask[][];
  selectedPagination: string;
  handleChange: (event) => void;
}> = ({ taskState, selectedPagination, handleChange }) => {
  return (
    <Box>
      <table border={2}>
        <tbody>
          <tr>
            <th>userId</th>
            <th>title</th>
            <th>completed</th>
          </tr>
          {taskState[selectedPagination].map((element, index) => {
            return (
              <tr key={index}>
                <td>{element.userId}</td>
                <td>{element.title}</td>
                <td>{element.completed ? "Yes" : "No"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Select
        onChange={(event) => handleChange(event)}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedPagination}
      >
        {taskState.map((element, index) => {
          return (
            <MenuItem key={index} value={index.toString()}>
              {index + 1}
            </MenuItem>
          );
        })}
      </Select>
    </Box>
  );
};
