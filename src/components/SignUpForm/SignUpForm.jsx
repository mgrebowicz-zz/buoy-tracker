import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import Button from '@material-ui/core/Button'
import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = {...this.state};
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred
      this.setState({ error: 'Sign Up Failed - Try Again'});
    }
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>           
            <FormControl variant="outlined" autoComplete="new-name">
              <InputLabel htmlFor="component-outlined">Name</InputLabel>
              <OutlinedInput
                id="component-outlined"
                label="Name"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                autoComplete="off"
                required
              />
            </FormControl>
            
            <FormControl variant="outlined" autoComplete="new-email">
              <InputLabel htmlFor="component-outlined">Email</InputLabel>
              <OutlinedInput
                id="component-outlined"
                label="Email"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                autoComplete="off"
                required
              />
            </FormControl>
            <FormControl variant="outlined" autoComplete="new-password">
              <InputLabel htmlFor="component-outlined">Password</InputLabel>
              <OutlinedInput
                id="component-outlined"
                label="Password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                autoComplete="off"
                required
              />
            </FormControl>
            
            <FormControl variant="outlined">
              <InputLabel htmlFor="component-outlined">Confirm</InputLabel>
              <OutlinedInput
                id="component-outlined"
                label="Confirm"
                type="Password"
                name="confirm"
                value={this.state.confirm}
                onChange={this.handleChange}
                required
              />
            </FormControl>
            {/* <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required /> */}
            {/* <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label>Confirm</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required /> */}
            <Button variant="contained" color="secondary" type="submit" disabled={disable}>SIGN UP</Button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}