import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import { AppContext } from "../../store/AppContext";

const ErrorDialog = () => {
  const { state } = React.useContext(AppContext);
  const { error } = state;
  return (
    <Dialog
      open={error.hasError}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          There is a prolem with loading data. Please try after some time!
        </DialogContentText>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};
export default ErrorDialog;
