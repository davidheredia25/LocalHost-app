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
        console.log('verificacionUser addCart: ', verificacionUser.user.cart);

        if (verificacionUser.bool) {
            let verificacionProduct = await verificacionP(productId);
            console.log('verificacionProduct addCart: ', verificacionProduct);

            if (verificacionProduct.bool) {
                console.log('verificacionProduct.product addCart: ', verificacionProduct.product._id);
                let objCart = {
                    cart: verificacionProduct.product._id,
                    qtyCart: qty
                };
                console.log('objCart addCart: ', objCart);

                let bool = false;
                for (let i = 0; i < verificacionUser.user.cart.length; i++) {
                    if (verificacionUser.user.cart.length >= 1) {
                        if (splitt(JSON.stringify(verificacionUser.user.cart[i].cart._id)) === objCart.cart.toString()) bool = true;
                    }
                    console.log('bool addCart: ', bool);
                    if (bool) {
                        if (qty < 1 && verificacionUser.user.cart[i].qtyCart > 1) verificacionUser.user.cart[i].qtyCart--;
                        else verificacionUser.user.cart[i].qtyCart++;
                        
                        let save = await verificacionUser.user.save();
                        let test= await User.findById(save._id).populate('cart.cart', ['price','name', 'image'])
                        console.log('save addCart: ', test);
                        return res.json(test);
                    }
                }
                let add = await User.findByIdAndUpdate(userId, {
                    cart: [...verificacionUser.user.cart, objCart]
                }, { new: true });
                add = await add.save();
                let test= await User.findById(add._id).populate('cart.cart', ['price','name', 'image'])
                console.log('add addCart: ', test.cart[0].cart);
                return res.json(test.cart);
            }
            return res.send('No se encontro el producto');
        }
        res.send('No estas logueado o el uuario no existe');
    } catch (error) {
        console.log(error);
    }
};

const getCartUser = async (req, res) => {
    const { id } = req.params;
    console.log('id getCartUser: ', id);
    try {
        let verificacion = await verificacionId(id);
        console.log('verificacion getCartUser: ', verificacion);
        if(verificacion.bool)  return res.json(verificacion.user.cart);
        res.send('No se encontro el usuario');
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
    addCart,
    getCartUser
};