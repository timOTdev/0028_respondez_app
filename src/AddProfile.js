import React, { Component } from 'react';
import './App.css';

class AddProfile extends Component {
    render() {
      return (
        <div>
          <form className="ProfileForm">
            <h1>Add Profile</h1>

            <label>First Name:
            <input type="text" required placeholder="First Name" />
            </label>

            <label>Last Name:
            <input type="text" required placeholder="Last Name" />
            </label>

            <label>My Interests:
              <select>
                <option selected>Web Development</option>
                <option>Mobile Development</option>
                <option>Dev Ops</option>
                <option>UI/UX Design</option>
                <option>Project Management</option>
              </select>
            </label>

            <label>
              <textarea>
              Tell us about your favorite coding languages and what you would like to get out of the group.
              </textarea>
            </label>

          </form>
        </div>
      );
    }
  }

export default AddProfile;
