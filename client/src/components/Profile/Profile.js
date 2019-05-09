import React, { Component } from 'react';
import { FaLemon } from 'react-icons/fa';
import Moment from 'react-moment';
import './Profile.css';
import axios from 'axios'


class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: {}
    }
  }
 

  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      
      this.setState({ profile: userProfile });
      console.log({userProfile}, 'cool user profile from Profile page')
    }
  }

  //posting
//   fetch('http://localhost:3005/usersdata', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//       // headers
//     },
    
//     // body: JSON.stringify(data);
//   })
// }


// postingToDB = () => { //CHISOM HELPED
//   const { getProfile, getAccessToken } = this.props.auth;
//   const headers = { 'Authorization': `Bearer ${getAccessToken}`}
 
//   getProfile((err, profile) => {
//     console.log(profile + "Unsuccessful in my posting")
//     if(err){
//       console.log(err)
//     } else {
//       axios({
//         method: 'POST',
//         headers: headers, 
//         body: JSON.stringify(data),
//         url: 'http://localhost:3005/usersdata',
//         data: profile
//       })
//     }
//   });
// }

// addUsertoDB = () => { 
//   const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`, 'Content-Type': 'application/json'}
//   //const id = this.props.match.params.item_id // we grab the ID from the URL
//   getProfile((err, profile) => {
//     console.log(profile + "Unsuccessful in my posting")
//     if(err){
//       console.log(err)
//     } else {
//   axios.post({method: 'POST', headers: headers,
//    url:`http://localhost:3005/usersdata/`}).data
// }
  // console.log(data + 'is this even working?')
  // fetch('http://localhost:3005/usersdata', {
  //         method: 'POST',
  //         headers: headers,
  //         body: JSON.stringify(data),
  //     })
  //     .then(res => res.json(), (console.log(data + 'not working')))
  // }

  postingToDB = () => { //CHISOM HELPED
  
  const { getProfile, getAccessToken } = this.props.auth;
  const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`}
  console.log(this.props.auth.accessToken)
 
    getProfile((err, profile) => {
      console.log(profile + "its not posting")
      if(err){
        console.log(err)
      } else {
        console.log(profile)
        axios({
          method: 'POST',
          headers,
          url: 'http://localhost:3005/usersdata',
         data: profile
        })
      }
    });
  }

  render() {
    const { profile } = this.state;
    return (
      <div className="container">
        <div className="profile-area">
          <h1>{profile.name}</h1>
          <header header="Profile">
            <img src={profile.picture} alt="profile" />
            <div>
              <label><FaLemon glyph="user" /> Donut Evangelist</label>
              <h2>{profile.nickname}</h2>
              <span>
                <Moment
              
                  
                     //Displays from a library called moment to change display of date/time 
                        date={profile.updated_at}
                        parse={profile.updated_at}
                        // parse='YYYY-MM-dd hh:mm' //what it looks like in json
                        format='MMM-D'
                        />
                    {/* //how you want it to look like, Month-, day, hour minute, an a for am
                    //will look like: Nov-1 10:15am instead of 2019-11-10:15 12
                    /> */}
                </span>
            </div>
            {/* json string stuff */}
            <button onClick={this.postingToDB} auth={this.props.auth}>posting user button</button>
            <pre>{JSON.stringify(profile, null, 2)}</pre> 
          </header>
         
        </div>
       {/* <AddPosts  auth={this.props.auth}/> */}
      </div>
    );
  }
}


export default Profile;
// console.log(userProfile + '123456')    
    // fetch('http://localhost:3005//usersdata', {
    //         method: 'GET',
    //         headers: headers //{headers, 'Content-Type': 'application/json'},
    //         // body: JSON.stringify(data),
    //     })
    // this.auth0.client.userInfo(this.accessToken, (err, profile) => {
    //   if (profile) {
    //     console.log(profile)
    //     this.userProfile = profile;
    //     console.log(this.userProfile)
    //   }
    //   // cb(err, profile);
    // });