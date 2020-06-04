import React,{useState,FC} from 'react';
// import { makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { Container, Grid } from '@material-ui/core';
import { KeyboardDatePicker } from "@material-ui/pickers";

  // const useStyles = makeStyles((theme: Theme) =>

  // );

const ScheduleNew:FC = () => {
  const [ state, setState ] = useState();
  // const classes = useStyles();
  const history = useHistory();
  const onClickNew = () => history.push('/index');
  const [selectedDate, handleDateChange] = useState(new Date());


  return (
    <Container>
      <Grid container direction="column" justify="center" alignItems="center" spacing={5}>
        <Grid item>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
        <Grid item>
          <TextField
              label="日程"
              helperText=""
              // onChange={onChangeSet}
              name="purDay"
              // value={state.purDay}
              margin="dense"
              variant="outlined"
              // className={classes.textField}
              type="date"
              InputLabelProps={{shrink: true}}
          />
          {/* <KeyboardDatePicker
            placeholder="2018/10/10"
            value={selectedDate}
            onChange={date => handleDateChange(date)}
            format="yyyy/MM/dd"
          /> */}
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" onClick={onClickNew}>
            Secondary
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ScheduleNew;