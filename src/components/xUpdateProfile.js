// import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// import '../style/style.css'

// class UpdateProfile extends Component {
//   saveProfile = (e) => {
//     e.preventDefault();
//     alert('You saved your profile!')
    
//     const profile = {
//       firstName: this.firstName.value,
//       lastName: this.lastName.value,
//       aboutMe: this.aboutMe.value,
//       myInterests: this.myInterests.value,
//       profileUrl: this.profileUrl.value,
//     }

//     this.props.updateProfile(profile);
//     this.formReset.reset();
//   }

//   render() {
//     return (
//       <div>
//         <form className="profileForm" ref={(input) => this.formReset = input}  onSubmit={this.saveProfile}>
//           <label>First Name:
//             <input type="text" ref={(input) => {this.firstName = input}} placeholder="First Name" required />
//           </label>

//           <label>Last Name:
//             <input type="text" ref={(input) => {this.lastName = input}} placeholder="Last Name" required />
//           </label>

//           <label>About Me:
//             <textarea ref={(input) => {this.aboutMe = input}} placeholder="Tell us about your favorite coding languages and what you would like to get out of the group." required />
//           </label>

//           <label>My Interests:
//             <select ref={(input) => {this.myInterests = input}}>
//               <option defaultValue>Web Development</option>
//               <option>Mobile Development</option>
//               <option>UI/UX Design</option>
//               <option>Project Management</option>
//               <option>Dev Ops</option>
//             </select>
//           </label>

//           <label>Profile Picture URL:
//             <input type="text" ref={(input) => (this.profileUrl = input)} placeholder="Picture URL" required />
//             <p>Recommend using your twitter picture URL as this is easiest but other social media sites are possible.</p>
//           </label>

//           <button type="submit">Save Changes</button>
//         </form>
//       </div>
//     );
//   }
// }

// UpdateProfile.propTypes = {
//   updateProfile: PropTypes.func
// }

// export default UpdateProfile