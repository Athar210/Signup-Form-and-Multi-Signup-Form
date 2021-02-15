import React from "react";
import { Button } from "@material-ui/core";
const OverView: React.FC<any> = ({ values, submit }) => {
  return (
    <div className="overview">
      <div>
        
        <p>{`Full Name : ${values.FullName}`}</p>
        <p>Phone Number: {values.Phone}</p>
        <p>{`Email : ${values.Email}`}</p>
        <p>Passsword : {values.password}</p>
        <p>Address : {values.Address}</p>
        <p>City :{values.city}</p>
        <p>Country :{values.country}</p>
      </div>
      <div>
        <Button
          variant="outlined"
          style={{ margin: "10px" }}
          color="default"
          onClick={() => submit(1)}
        >
          Back
        </Button>
        {"    "}
        <Button
          variant="outlined"
          style={{ margin: "10px" }}
          color="default"
          onClick={() => submit(0)}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default OverView;
