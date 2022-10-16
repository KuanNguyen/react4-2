import React, { Component } from 'react'

import { connect } from 'react-redux'


class GioHang extends Component {

    renderCart = () => {
        return this.props.gioHang.map((ghe) => {
            return <tr key={`cart-${ghe.soGhe}`}>
                <td>{ghe.soGhe}</td>
                <td>{ghe.gia}</td>
                <td><button onClick={() => {
                    let action = {
                        type: "XOA_GIO_HANG",
                        gheXoa: ghe.soGhe
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCart()}
                    </tbody>
                </table>
                <table className='tongTien'>
                    <thead>
                        <tr>
                            <th>Tổng Tiền</th>
                            <th>{this.props.gioHang.length * 75000}</th>
                            <th></th>
                        </tr>
                        </thead>
                    <tbody>
                        
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


