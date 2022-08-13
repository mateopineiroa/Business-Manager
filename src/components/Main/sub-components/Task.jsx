import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddTask from './addTask';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#f2f2f2',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const Task = ({title, description, index, taskStyles, prop}) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    if (prop!="nuevaTask") {

        return (
            <div className={taskStyles+"p-3"}>
            <h2 className="text-xl">{index+") "+title}</h2>
            <p>{"Description: "+ description}</p>
            
        </div>
    )
    } else {
        return (
            <div 
                className={taskStyles+"flex hover:cursor-pointer"}
                >
                <div className='h-full w-full flex p-3' onClick={handleOpen}>
                    <span className="inline-block my-auto material-symbols-outlined cursor-pointer">
                        add
                    </span>
                    <h3 className="inline-block my-auto">Add task</h3>
                </div>
                

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                    >         
                    <Fade in={open} >

                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Add the task
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <AddTask />
                            </Typography>
                        </Box>
                    </Fade>
                </Modal>
            </div>
        )
    }
}

export default Task