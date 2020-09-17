import React,{Component} from 'react';
import './card-component/CardComponent'
import './App.css';
import CardComponent from './card-component/CardComponent';
import SearchBox from './SearchBox/SearchBox'



class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[],
      searchFiled:""
    }
  }
   searchbarHandler =(typed) =>{
    this.setState({searchFiled:typed.target.value})
    
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  }
  render(){
    const filteredMonster = this.state.monsters.filter(monster=>
      monster.name.toLowerCase().includes(this.state.searchFiled.toLocaleLowerCase()))
      console.log(filteredMonster)
  return (
    <div className="App">
    <h1 className="Heading">Monster.inc</h1>
    <SearchBox SearchbarHandler={this.searchbarHandler}/>
    <CardComponent monsters={filteredMonster}/>
    </div>
  );}
}

export default App;
