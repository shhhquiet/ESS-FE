import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

const NewClient = ({open, handleClose}) => {
  return (
    <Dialog
      maxWidth='md'
      open={open}
      onClose={handleClose}
      aria-labelledby='max-width-dialog-title'
    >
      <DialogContent>o hi</DialogContent>
    </Dialog>
  );
};

export default NewClient;
