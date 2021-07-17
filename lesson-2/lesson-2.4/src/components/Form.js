import React from "react";
import { Form as form, FormGroup, Input, Button, Label } from "reactstrap";
import useInput from "../customHook/useInput";

const Form = () => {
  const [name, binName,clearName] = useInput("");
  const [email, bindEmail,clearEmail] = useInput ("")
  const submitHandler = (e) => {
    e.preventDefault();
    alert(`The name os ${name} and the email is ${email}`);
    clearName()
    clearEmail()
  };
  return (
    <div>
        <div className="header">Custom Hook</div>
      <div className="form">
        <form onSubmit={submitHandler}>
          <FormGroup>
            <Label for="exampleEmail">Name</Label>
            <Input
              type="name"
              name="name"
              id="exampleEmail"
              placeholder="Name"
             {...binName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Email</Label>
            <Input
              type="email"
              name="email"
              id="examplePassword"
              placeholder="Email"
              {...bindEmail}
            />
          </FormGroup>
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
