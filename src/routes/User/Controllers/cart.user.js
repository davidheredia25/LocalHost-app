const User = require('../../../models/User');
const { 
    verificacionId,
    verificacionP,
    splitt
} = require('./middleware');

const addCart = async (req, res) => {
    const { userId } = req.params;
    const { productId, qty } = req.body;  
    console.log('userId addCart: ', userId);
    console.log('productId addCart: ', productId);
    try {
        let verificacionUser = await verificacionId(userId);
        console.log('verificacionUser addCart: ', verificacionUser);
        
        if (verificacionUser.bool) {
            let verificacionProduct = await verificacionP(productId);
            console.log('verificacionProduct addCart: ', verificacionProduct);
            
            if(verificacionProduct.bool) {
                console.log('verificacionProduct.product addCart: ', verificacionProduct.product._id);
                let objCart = {
                    cart: verificacionProduct.product._id,
                    qtyCart: qty 
                };
                console.log('objCart addCart: ', objCart);
                
                let maped = verificacionUser.user.cart.map(o => o.cart); 
                console.log('maped addCart: ', maped);
                let filtered = verificacionUser.user.cart.filter(o => splitt(JSON.stringify(o.cart)) === verificacionProduct.product._id.toString()); 
                console.log('filtered addCart: ', filtered);
                if(filtered.length > 0)  objCart.qtyCart += filtered.length;

                let add = await User.findByIdAndUpdate(userId, {
                    cart: [...verificacionUser.user.cart, objCart]
                }, { new: true });
                add = await add.save();
                console.log('add addCart: ', add);
                return res.json(add);
            }
            return res.send('No se encontro el producto');
        }
        res.send('No estas logueado o el uuario no existe');
    } catch (error) {
        console.log(error);
    }
};




// const addCart = async( req, res) => {
//     //const{ idUser,idItem } =req.params;
//     const { idUser,idItem} = req.params;  
//     function splitt(string) {
//         let id = string.split('"');
//         let dividido = id[1];
//         return dividido;
//       } 
//     //const { idItem } = req.body;
//     try {
//         let user= await User.findById(idUser);
//         let product= await Product.findById(idItem);
//         console.log('usercart',user.cart)
//         let cartUser= user.cart.cart;
        
//         //console.log('cartuser', cartUser[0]._id)
//          let filtered = cartUser.filter(
//             (x) => splitt(JSON.stringify(x.cart._id)) === product._id.toString()
//           );
//         console.log('filtered',filtered);
//         // /let productUser = await user.cart.find(x => x._id === idItem);
//         if(filtered){
//             filtered.count = 1;
//             let edit = await User.findByIdAndUpdate(idUser, {
//                 cart: [...user.cart,filtered],
//              }, { new: true });
//              let editUser = await edit.save(); 
//              res.json(editUser);
            
//         }else {
//         let edit = await User.findByIdAndUpdate(idUser, {
//            cart: [...user.cart,product],
//         }, { new: true });
//         let editUser = await edit.save(); 
//         res.json(editUser); 
//     }
//     } catch (error) {
//         console.log(error);
//     }
// }



module.exports = {
    addCart
};