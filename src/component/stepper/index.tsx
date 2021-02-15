import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import SettingsIcon from "@material-ui/icons/Person";
import GroupAddIcon from "@material-ui/icons/Contacts";
import VideoLabelIcon from "@material-ui/icons/RateReview";
import StepConnector from "@material-ui/core/StepConnector";
import Typography from "@material-ui/core/Typography";
import { StepIconProps } from "@material-ui/core/StepIcon";
import PersonalDetail from "../SignupForm/PersonalDetail";
import AccountDetail from "../SignupForm/AccountDetail";
import OverView from "../SignupForm/OverView";



const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "primary",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "primary",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#0093E9",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#2B86C5",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "#b3cdd;"  },
  completed: {
    backgroundColor:
      "#b3cdd1",
  },
});

function ColorlibStepIcon(props: StepIconProps) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

function getSteps() {
  return ["Account Details", "Personal Details", "Over View"];
}

function getStepContent(
  step: number,
  setActiveStep: React.Dispatch<React.SetStateAction<number>>,
  formValue: {},
  setFormValue: React.Dispatch<React.SetStateAction<{}>>
) {
  switch (step) {
    case 0:
      return (
        <PersonalDetail
          submit={setActiveStep}
          prevValue={formValue}
          setFormValue={setFormValue}
        />
      );
    case 1:
      return (
        <AccountDetail
          submit={setActiveStep}
          prevValue={formValue}
          setFormValue={setFormValue}
        />
      );
    case 2:
      return <OverView submit={setActiveStep} values={formValue} />;
    default:
      return "Invalid";
  }
}

export default function Steppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState<number>(0);

  const [formValue, setFormValue] = React.useState({});

  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
           
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(
                activeStep,
                setActiveStep,
                formValue,
                setFormValue
              )}
            </Typography>
            <div>
             
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
