import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { arrayCard} from "../../../../state";
import Button from '@material-ui/core/Button';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid white',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function WinComponent(props) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    if (arrayCard.every((e) => {
        return e.state === 'back'
    })) {
        setTimeout(() => handleOpen(), 1000);
    }

    const handleOpen = () => {
            setOpen(true)
    };

    const handleReset = () =>{
        setOpen(false);
        props.setFlagArr(false)
        props.shuffle(arrayCard).forEach((e) =>{
                e.state = 'front';
                e.disabled = false
        })
    }
    console.log(arrayCard);
    const win = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">You win!</h2>
            <div className={classes.root}>
                <Button variant="contained" color="primary" onClick={handleReset}>Новая игра</Button>
                <Button variant="contained" color="primary" href='/setting'>Меню</Button>
            </div>
        </div>
    );

    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {win}
            </Modal>
        </div>
    );
}