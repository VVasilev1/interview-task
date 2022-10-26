import { Box, SelectChangeEvent } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { TaskFilter } from "../app/components/TaskFilter";
import { TaskTable } from "../app/components/TaskTable";
import { ITask } from "../app/model/ITask";

export const TaskPage: React.FC<{}> = () => {
  const [initialsTask, setInitialsTask] = useState<ITask[] | []>([]);
  const [taskState, setTaskState] = useState<ITask[][] | []>([]);
  const [filterByStatus, setFilterByStatus] = useState<string>("all");
  const [showError, setShowError] = useState<boolean>(false);
  const [filterByTaskName, setFilterByTaskName] = useState<string>("");
  const [selectedPagination, setSelectedPagination] = useState<string>("0");
  const partitionData = (tasks: ITask[]) => {
    let newTasks: ITask[][] = [[]];
    for (let index = 0; index < tasks.length; index++) {
      const arrayIndex = Math.floor(index / 10);
      if (newTasks[arrayIndex] === undefined) {
        newTasks.push([tasks[index]]);
      } else {
        newTasks[arrayIndex].push(tasks[index]);
      }
    }
    return newTasks;
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (res.data && res.data.length > 0) {
          const newTasks = partitionData(res.data);
          setInitialsTask(res.data);
          setTaskState(newTasks);
        } else {
          setTaskState([]);
        }
        setShowError(false);
      })
      .catch(function (error) {
        setShowError(true);
      });
  }, []);
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedPagination(event.target.value);
  };
  const handleChangeStatus = (event: SelectChangeEvent) => {
    setFilterByStatus(event.target.value);
  };
  const changeFilterByTaskName = (event: any) => {
    setFilterByTaskName(event.target.value);
  };
  const handleApplyFilter = () => {
    let tasks = [...initialsTask];
    if (filterByTaskName !== "") {
      tasks = tasks.filter((element) =>
        element.title.startsWith(filterByTaskName)
      );
    }
    if (filterByStatus !== "all") {
      const status = filterByStatus === "completed" ? true : false;
      tasks = tasks.filter((element) => element.completed === status);
    }

    const newTasks = partitionData(tasks);
    setTaskState(newTasks);
  };
  if (showError) {
    return <Box>Woops, something went wrong</Box>;
  }
  if (taskState.length < 1) {
    return <Box>No Data</Box>;
  }

  return (
    <Box>
      <TaskFilter
        filterByStatus={filterByStatus}
        changeFilterByTaskName={(event) => changeFilterByTaskName(event)}
        handleChangeStatus={(event) => handleChangeStatus(event)}
        handleApplyFilter={() => handleApplyFilter()}
      />
      <TaskTable
        taskState={taskState}
        selectedPagination={selectedPagination}
        handleChange={(event) => handleChange(event)}
      />
    </Box>
  );
};
