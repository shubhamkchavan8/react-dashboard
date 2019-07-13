

import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    full_name: '',
    id:'',
    language:'',
    repos:[]
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

  

    axios.get(`https://api.github.com/users/leaphawk/repos` )
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({full_name:res.data})
        this.setState({repos:res.data});
        this.setState({id:res.data});
        this.setState({language:res.data})
      })
  }

  onClickRepo = (repo) => {
    alert(repo.language  + repo.full_name + repo.id )
  }

  render() {

    return (
      <div>
        { this.state.repos.map( (repo) => {
          return <li onClick={(e) =>
            this.onClickRepo(repo)
          }><b>{ repo.name}</b></li>
        }) }
        <form onSubmit={this.handleSubmit}>
          <label>
            XXXPerson Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
// import React, { Component } from 'react';
// import axios from 'axios';
// import './App.css';
// import { url } from 'inspector';
// // import UserForm from "./UserFrom";

// class App extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       URL: '',
//     }
//   }
//   render() {
//     const { URL } = this.state;
//     return (
//       <url={url} />
//     );
//   }
//   componentDidMount() {
//   axios.get('https://api.github.com/users/shubhamkchavan8')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.log(error);
//   });
// }

// }
// class App extends Component {
//   getUser =(e) =>{
//     e.preventDefault();
//     const user =e.target.element.username.value;
//     console.log(user);
//     axios.get("https://api.github.com/users")
//     .then((res) => {
//       console.log(res);
//     })

//   }
  
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//              <h1 className="App-title">Calls in React</h1>
//         </header>
        
//         <UserForm  getUser={this.getUser}/>
        
//       </div>
//     );
//   }
// }
