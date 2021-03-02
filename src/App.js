import react, { Component } from 'react';
import './App.css';

import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';

class App extends Component {
    render(){
     return (
      <Form className="login-form fontface">
        <h1 className = "text-center">React Form</h1>
        <h2 className = "text-center">Welcome</h2>
        <FormGroup>
          <Label>Email :</Label>
          <Input type="email" placeholder="Email" />
        </FormGroup>

        <FormGroup>
          <Label>Password :</Label>
          <Input type="password" placeholder="Password" />
        </FormGroup>
        <Button className = "btn-lg btn-dark btn-block">Log in</Button>
        <div className = "text-center pt-3">Or Login with Facebook</div>
        <FacebookLoginButton className = "mt-3 mb-3"/>
        <div className="mt-3 mb-3 text-center">
          <a href="/sign-up">Sign up</a>
          <span className = "p-2">|</span>
          <a href="forget-password">Forget Password</a>
        </div>
      </Form>
    );
  }
}

export default App;
