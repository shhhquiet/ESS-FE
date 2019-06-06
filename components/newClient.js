import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
//import Wizard from '../MUI-Components/admin-components/Wizard/Wizard'

const NewClient = ({open, handleClose}) => {
  return (
    <Dialog
      maxWidth='md'
      open={open}
      onClose={handleClose}
      aria-labelledby='max-width-dialog-title'
    >
      <DialogContent>ohai</DialogContent>
    </Dialog>
  );
};

const Step1 = () => (
  <div>hoooo</div>
)

const Step2 = () => (
  <div>heyyy</div>
)

const Step3 = () => (
  <div>yoooo</div>
)


export default NewClient;
