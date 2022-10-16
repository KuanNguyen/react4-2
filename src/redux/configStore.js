import { combineReducers,createStore } from "redux";


const gioHang = []


const rootReducer = combineReducers({
    gioHangReducer: (state = gioHang, action) => {
       

        switch (action.type) {
            case "CHON_CHO_NGOI":
               
                let spGH = { ...action.ghe , soLuong :1}
                    state.push(spGH);

                return [...state];

            case "XOA_GIO_HANG":

                let gioHangCapNhat =  state.filter((ghe) => {
                  return ghe.soGhe != action.gheXoa
                }) 

                state = gioHangCapNhat;
                return state;
            default:

                return state;
        }
    
    }
})

export const store = createStore(rootReducer); 