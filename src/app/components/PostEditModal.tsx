import { Box, Button, Modal, TextField } from "@mui/material";
import React from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export const PostEditModal: React.FC<{
  openEditModal: boolean;
  setOpenEditModal: (check) => void;
  setTitle: (event) => void;
  setBody: (event) => void;
  handleSave: () => void;
}> = ({ openEditModal, setOpenEditModal, setTitle, setBody, handleSave }) => {
  return (
    <Modal
      open={openEditModal}
      onClose={() => setOpenEditModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <TextField
          onChange={(event) => setTitle(event.target.value)}
          variant="outlined"
        />
        <TextField
          onChange={(event) => setBody(event.target.value)}
          variant="outlined"
        />
        <Button onClick={() => handleSave()}>Save</Button>
        <Button onClick={() => setOpenEditModal(false)}>Cancel</Button>
      </Box>
    </Modal>
  );
};
