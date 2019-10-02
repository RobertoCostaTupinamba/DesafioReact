import React, { Component } from 'react'
class List extends Component {
 render() {
   return (
     <div className="card flex">
       {
         this.props.headers.map((header, idx) => (
           <div key={idx} className="list-item">
             <span className="list-item-title">{header.label}:</span>
             <span>{this.props.data[header.match]}</span>
           </div>
         ))
       }
     </div>
   )
 }
}

export default List