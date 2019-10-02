import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import List from './components/Form/List.jsx'
import './style.css'

class App extends Component {
 constructor(props) {
   super(props)
   this.state = {
     properties: {
       headers: [],
       data: []
     }
   }
 }

 componentDidMount() {
   fetch('http://www.mocky.io/v2/5d94f95b2f00006d008ffa68')
     .then((response) => response.json())
     .then(({ properties }) => {
       this.setState({ properties })
     })
     .catch((error) => {
       console.log('error', error)
     })
 }

 render() {
   console.log('render')
   return (
     <Fragment>
       <div>Minicurso React</div>
       {
         this.state.properties.data.map((item, index) => (
           <List
             key={index}
             data={item}
             headers={this.state.properties.headers}
           />
         ))
       }
     </Fragment>
   )
 }
}

ReactDOM.render(<App />, document.getElementById('App'))
