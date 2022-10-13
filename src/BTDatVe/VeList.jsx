import React, { Component, version } from 'react'
import { useState } from 'react';

 import { connect } from 'react-redux';
import { $CombinedState } from 'redux';




 class VeList extends Component {
  

 
  constructor() {
    super();
    this.state = {isChecked: true};
  }


  renderVe = () => {
    
    return this.props.loaiVe.map((ve) => {
      return <tbody key={ve.hang}>
        <tr>
          <td className='rowNumber'>{ve.hang}</td>
          {ve.danhSachGhe.map((ghe) => {
          return <td  key={ghe.danhSachGhe}>
             <input type="checkbox" onClick={()=>{
              this.setState({isChecked: !this.state.isChecked});
                if (this.state.isChecked) {
                  const action ={
                    type:"CHON_CHO_NGOI",
                    sanPham:ghe
                  }
                  this.props.dispatch(action)
                }else{
                  console.log("vv");
                }
              
                 
             }} className="seats" defaultValue={ghe.soGhe} />
          </td>
        })}
        </tr>
      </tbody>
    })
  }


  render() {
    return (
     <div className="gheList">
      <table >
      <thead>
          <tr>
            <th></th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
          </tr>
        </thead>
        {this.renderVe()}
      </table>
     </div>

    )
  }
}


export default connect()(VeList);






// ()=>{
              

//   const action ={
//     type:"CHON_CHO_NGOI",
//     sanPham:ghe
//   }

//   this.props.dispatch(action)

//  }