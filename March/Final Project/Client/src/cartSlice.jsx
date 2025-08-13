import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:"mycart",
    initialState:{
        "cart":[],
        "cartDetails":{},
        "categorys":[]
    },
    reducers:{
        addToCart:(state, actions)=>{
                const cartData=state.cart.filter(key=>key.id == actions.payload.id);
                if(cartData.length>=1){
                    alert("Cart Already Added");
                }
                else{
                    state.cart.push(actions.payload);
                }
        },

        qtyIncreament:(state,actions)=>{
            for (var i=0; i<state.cart.length; i++)
                {
                  if (state.cart[i].id==actions.payload.id)
                  {
                      state.cart[i].qnty++;
                  }
                }
        },
        qtyDecrement:(state,actions)=>{
            for (var i=0; i<state.cart.length; i++)
                {
                  if (state.cart[i].id==actions.payload.id)
                  {
                      if (state.cart[i].qnty<=1)
                      {
                          alert("Quantity not less than 1 ");
                      }
                      else 
                      {
                          state.cart[i].qnty--;
                      }
                      
                  }
                }
        },
        productRemove:(state, actions)=>{
            state.cart=state.cart.filter(key=>key.id!=actions.payload.id)
        },
        CartDetails:(state, actions)=>{
            state.cartDetails=actions.payload;
        },

        Category:(state, actions)=>{
            state.categorys=actions.payload;
            // console.log(actions.payload);

        },
        cartEmpty:(state)=>{
            state.cart=[];
      }
        
    }
})

export const {addToCart,qtyIncreament,qtyDecrement,productRemove,CartDetails,Category,cartEmpty} = cartSlice.actions;
export default cartSlice.reducer;