import React, { Component } from 'react'

import { connect } from 'react-redux'


class GioHang extends Component {

    renderCart = () => {
        console.log(this.props)
        return this.props.gioHang.map((spGH) => {
            return <tr key={`cart-${spGH.soGhe}`}>
                <td>{spGH.soGhe}</td>
                <td>{spGH.gia}</td>
                <td><button onClick={() => {
                     let action = {
                        type: "XOA_GIO_HANG",
                        maSPXoa:spGH.maSP
                      }

                      this.props.dispatch(action);
                }} className='btn btn-danger'>Hủy vé</button></td>
            </tr>
        })
    }



    render() {
        console.log(this.props)
        return (
            <div className="container" id='trangGH'>
                <table className='gioHang'>
                    <thead>
                        <tr>
                            <th>Số Ghế</th>
                            <th>Giá</th>
                            <th>Tổng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCart()}
                    </tbody>
                </table>
            </div>

        )
    }
}

const mapStateToProps = (rootReducer) => {

    //lưu state vào props của component
    return {
      gioHang: rootReducer.gioHangReducer
    }
  }


  const ComponentGioHangRedux = connect(mapStateToProps)(GioHang);

   export default ComponentGioHangRedux;