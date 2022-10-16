import React, { Component, version } from 'react'
import { useState } from 'react';

 import { connect } from 'react-redux';
import { $CombinedState } from 'redux';




 class VeList extends Component {
  // state = { isSelect: false}
 
  
    state = {isChecked: [], chon: ""};
   
  
  
    // state = {checked: 'false'}

  onChange = id => {
    const isCheck = this.state.isChecked;

    // Find index
    const findIdx = isCheck.indexOf(id);

    // Index > -1 means that the item exists and that the checkbox is checked
    // and in that case we want to remove it from the array and uncheck it
    if (findIdx > -1) {
      
      isCheck.splice(findIdx, 1);
      let action = {
            type: "XOA_GIO_HANG",
            gheXoa:id.soGhe
          }
          this.props.dispatch(action);
    } else {
      isCheck.push(id)
      const action ={
        type:"CHON_CHO_NGOI",
        ghe:id
      }
      this.props.dispatch(action)
     
    }

    

    this.setState({
      isChecked: this.state.isChecked
    });

  };

  renderVe = () => {
    const { isChecked } = this.state;
    return this.props.loaiVe.map((ve) => {
      return <tbody key={ve.hang}>
        <tr>
          <td className='rowNumber'>{ve.hang}</td>
          {ve.danhSachGhe.map((ghe) => {
          return <td  key={ghe.soGhe}>
             <input defaultChecked={this.state.chon}  type="checkbox" onChange={() =>{

                 this.onChange(ghe)  
                 
             }} className="seats" selected={isChecked.includes(ghe.soGhe)} />
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






