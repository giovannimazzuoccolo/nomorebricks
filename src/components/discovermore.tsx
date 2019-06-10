import * as React from 'react';
import { Dialog, DialogTitle, AppBar, Toolbar, Typography, DialogContent, Slide } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import { MdClose }  from "react-icons/md";

interface IProps {
    open: boolean,
    closeRequest: Function
}


const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const DiscoverMore: React.FC<IProps> = ({open, closeRequest}) => {
    return(
        <Dialog open={open} TransitionComponent={Transition} fullScreen>
            <AppBar position="static" color="primary">
                <Toolbar>
                <MdClose onClick={() => closeRequest(false)} size="30" />
                    <Typography variant="h6">Discover More</Typography>
                </Toolbar>
                </AppBar>
                <DialogTitle>
                    How to use this app
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body1">
                        Thank you for downloading NMB! <br />
                        We will help you to improve your shoots!
                    </Typography>
                </DialogContent>
        </Dialog>
    )
};

export default DiscoverMore;