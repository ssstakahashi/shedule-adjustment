import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Event from './stepentryItem/Event';
import PossibleDates from './stepentryItem/PossibleDates';
import Confirmation from './stepentryItem/Confirmation';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

function getSteps() {
  return ['イベント内容', '候補日', '事前準備'];
}

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return <Event />
    case 1:
      return <PossibleDates />;
    case 2:
      return <Confirmation />;
    default:
      return 'イベントページ';
  }
}

const StepEntry = () => {

  const classes = useStyles();
  const initialValue: number = Number(localStorage.getItem('activeStep')) || 0
  console.log(initialValue)
  const [activeStep, setActiveStep] = React.useState(initialValue);
  const [test, setTest] = React.useState("");
  const steps = getSteps();

  const handleNext = () => {
    const AA: number = activeStep + 1;
    setActiveStep((x) => x + 1);
    localStorage.setItem('activeStep', `${AA}` )
    console.log( localStorage.getItem('activeStep') )
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Grid container direction="column" justify="center" alignItems="stretch">
        <Grid item>
          {getStepContent(activeStep)}
        
        </Grid>

        <Grid item>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.backButton}
          >
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Grid>

      </Grid>
    </Container>
  );
}

export default StepEntry;