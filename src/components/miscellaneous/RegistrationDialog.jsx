import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

const TeammatesDialog = ({
  open,
  onClose,
  numberOfTeammates,
  onSubmit,
  teammates,
  setTeammates,
  setSnackBarMessage,
  setSnackBarSeverity,
  setSnackBarState,
}) => {
  const handleTeammateNameChange = (index, newName) => {
    const updatedTeammates = [...teammates];
    updatedTeammates[index] = newName;
    setTeammates(updatedTeammates);
  };

  const handleDialogClose = () => {
    setTeammates(Array(numberOfTeammates).fill(""));
    onClose();
  };

  const handleSubmit = () => {
    const hasEmptyFields = teammates.some((teammate) => teammate.trim() === "");

    if (!hasEmptyFields) {
      onSubmit(teammates);
      handleDialogClose();
    } else {
      console.log("Please fill in all teammate names.");
      setSnackBarMessage("Teammate names cannot be empty!");
      setSnackBarSeverity("info");
      setSnackBarState(true);
    }
  };

  return (
    <Dialog open={open} onClose={handleDialogClose}>
      <DialogTitle>
        Enter {numberOfTeammates > 1 ? "Teammates'" : "Teammate"} Names
      </DialogTitle>
      <DialogContent>
        {teammates.map((teammate, index) => (
          <TextField
            key={index}
            label={`Teammate ${index + 1}`}
            value={teammate}
            onChange={(e) => handleTeammateNameChange(index, e.target.value)}
            fullWidth
            margin="normal"
            required
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TeammatesDialog;
