import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import NodeJS from "../../utils/NodeJS.js";

const FeedbackDialog = ({
  open,
  onClose,
  setSnackBarState,
  setSnackBarSeverity,
  setSnackBarMessage,
  setFbDone,
  setLoading,
  JWT,
  event_id,
}) => {
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState("");

  const handleRatingChange = (event, newRating) => {
    setRating(newRating);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleFeedbackSubmit = async () => {
    setLoading(true);
    try {
      const { success, message } = await NodeJS.POST(
        `/api/events/feedBack/${event_id}`,
        { credential: JWT, comments, rating }
      );
      setSnackBarSeverity(success ? "success" : "info");
      setSnackBarMessage(message);
      setSnackBarState(true);
      setFbDone(true);
      setLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Feedback</DialogTitle>
      <DialogContent>
        <Typography variant="body1">Rate your experience:</Typography>
        <Rating
          name="rating"
          value={rating}
          precision={0.5}
          onChange={handleRatingChange}
        />
        <Typography variant="body1">Comments:</Typography>
        <TextField
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={comments}
          onChange={handleCommentsChange}
          placeholder="Add your comments here..."
          style={{ marginTop: "0.5rem" }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleFeedbackSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FeedbackDialog;
