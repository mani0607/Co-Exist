import React, { useState } from 'react'
// material
import {
  Box,
  Button,
  Avatar,
  TextField,
  Checkbox,
  Typography
} from '@mui/material';
import Stack from '@mui/material/Stack'
import { makeStyles } from '@mui/styles';
import DUES from '../../../_mocks_/dues';

const useStyles = makeStyles((theme) => ({
    marTop: {
      marginTop: theme.spacing(2),
    },
  }));


export default function PayM()
{
    const classes = useStyles();

    const [selected,setSelected] = useState([]);
    const [total,setTotal] = useState(0);
    
    const handleClick = (event, name, amount) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];
        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, name);
          setTotal(total + amount);
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1));
          setTotal(total - amount);
        } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1));
          setTotal(total - amount);
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1)
          );
          setTotal(total - amount);
        }
        setSelected(newSelected);
      };


    return(
        <div>

            { DUES.map((due) => 
            {
                const value = due.dueAmount + '.00 rs on ' + due.dueOn + ' is due for ' + due.dueFor ;
                const isSelected = selected.indexOf(value) !== -1;
                return (

                    <Stack key={due.dueOn} direction="row" alignItems="center">
                              <Checkbox
                               checked={isSelected}
                               onChange={ (event) => handleClick(event,value,due.dueAmount)  }
                              />
                              <Typography m={0} variant="body2">
                                {value}
                              </Typography>
                    </Stack>

                );

            }) }


            <Stack direction="row" alignItems="left" spacing={1} className={classes.marTop} style={selected.length==0 ? {pointerEvents: "none", opacity: "0.4"} : {}}>
                <Box />
                <Typography variant="body2">
                 UPI ID : 
                </Typography>
                <Avatar src="/gpay.png" alt="photoURL" style={{ height: '30px', width: '30px' }}/>
                <Stack direction="column" alignItems="left">
                <TextField variant="standard" size="small" />
                <Typography variant="caption" color="green">
                 Verified
                </Typography>
                </Stack>
                <Button variant="contained" style={{ height: '33px', width: '30px' }}>
                    Verify
                </Button>
            </Stack>

            <Stack direction="row" alignItems="left" spacing={1} className={classes.marTop}>
                <Box />
                <Typography variant="body2">
                 Total Payment :  
                </Typography>
                <Typography variant="body2" alignContent="center">
                    {total + '.00 rs'}
                </Typography>
            </Stack>

            <Button variant="contained" style={{ height: '33px', width: '30px' }} className={classes.marTop}>
                Pay
            </Button>

        </div>

    );
}