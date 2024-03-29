const User = require('../../../models/User');
const {
    verificacionId,
    verificacionP,
    splitt
} = require('./middleware');

const addCart = async (req, res) => {
    const { userId } = req.params;
    const { productId, qty, talle } = req.body;
    // console.log('userId addCart: ', userId);
    // console.log('body addCart: ', productId, qty, talle);
    try {
        let verificacionUser = await verificacionId(userId);
        // console.log('verificacionUser addCart: ', verificacionUser.user);

        if (verificacionUser.bool) {
            let verificacionProduct = await verificacionP(productId);
            // console.log('verificacionProduct addCart: ', verificacionProduct);

            if (verificacionProduct.bool) {
                // console.log('verificacionProduct.product addCart: ', verificacionProduct.product._id);
                let objCart = {
                    cart: verificacionProduct.product._id,
                    qtyCart: qty,
                    talle: talle
                };
                // console.log('objCart addCart: ', verificacionUser.user.cart);
                let bool = false;
                for (let i = 0; i < verificacionUser.user.cart.length; i++) {
                    if (verificacionUser.user.cart.length >= 1) {
                        if (splitt(JSON.stringify(verificacionUser.user.cart[i].cart._id)) === objCart.cart.toString() && verificacionUser.user.cart[i].talle === objCart.talle) {
                            bool = true;
                        }
                    }
                    // console.log('bool addCart: ', bool);
                    if (bool) {
                        if (qty < 1 && verificacionUser.user.cart[i].qtyCart > 1) verificacionUser.user.cart[i].qtyCart--;
                        else verificacionUser.user.cart[i].qtyCart += qty;

                        let save = await verificacionUser.user.save();
                        let test = await User.findById(save._id).populate('cart.cart', ['price', 'name', 'image', 'talle'])
                        console.log('save addCart: ', test);
                        console.log('test addCart: ', test.cart);
                        return res.json(test);
                    }
                }
                let add = await User.findByIdAndUpdate(userId, {
                    cart: [...verificacionUser.user.cart, objCart]
                }, { new: true });
                add = await add.save();
                let test = await User.findById(add._id).populate('cart.cart', ['price', 'name', 'image', 'talle'])
                // console.log('add addCart: ', test.cart[0].cart);
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
    // console.log('id getCartUser: ', id);
    try {
        let verificacion = await verificacionId(id);
        // console.log('verificacion getCartUser: ', verificacion);
        if (verificacion.bool) return res.json(verificacion.user.cart);
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


const deleteCart = async (req, res) => {
    const { id } = req.params;
    // console.log('id deleteCart', id)
    try {
        let verificacion = await verificacionId(id);
        // console.log('verificacion deleteCart: ', verificacion);
        if (verificacion.bool) {
            let add = await User.findByIdAndUpdate(id, {
                cart: []
            }, { new: true });
            //verificacion.user.cart = []
            return res.json(add.cart)
        }
        res.send('No se encontro el User');
    } catch (error) {
        console.log(error)
    }
}


const deleteCartOne = async (req, res) => {
    const { id, productId, talle } = req.params;
    try {
        let verificacion = await verificacionId(id);
        if (verificacion.bool) {
            let user = await User.findById(id).populate('cart.cart', ['name', 'price'])
            /* let filtered= user.cart.filter(x => splitt(JSON.stringify(x.cart._id)) === productId.toString())
             if(filtered.length> 1 ) {
                filtered= filtered.filter ( x => x.talle !== talle)
                let filter2 = user.cart.filter( x=> splitt(JSON.stringify(x.cart._id)) !== productId.toString())
                let add = await User.findByIdAndUpdate(id, {
                    cart: [...filtered, filter2]
                }, { new: true }).populate('cart.cart', ['name', 'price']); 
                add = await add.save();
                return res.json(add.cart)
            }  */
            let array = [];
            for (var i = 0; i < user.cart.length; i++) {
                if (splitt(JSON.stringify(user.cart[i].cart._id)) === productId.toString()) {
                    if (user.cart[i].talle === talle) console.log('rey')
                    else array.push(user.cart[i])
                } else {
                    array.push(user.cart[i])
                }
            }
            //console.log('user', user)
            let add = await User.findByIdAndUpdate(id, {
                cart: [...array]
            }, { new: true });
            //verificacion.user.cart = []
            add = await add.save();
            return res.json(add.cart)
        }
        res.send('No se encontro el User');
    } catch (error) {
        console.log(error)
    }

};

const Join = async (req, res) => {
    const { id } = req.params;
    const { emptyCart } = req.body;
    // console.log('id', id)
    // console.log('emptycART', emptyCart)
    // console.log('body', req.body)
    try {
        let array = [];
        for (var i = 0; i < req.body.length; i++) {
            array.push({
                cart: req.body[i].product,
                qtyCart: req.body[i].qty,
                talle: req.body[i].talle
            })
        }
        // console.log('array', array)
        let user = await User.findById(id).populate('cart.cart', ['name', 'price', 'image'])
        let add = await User.findByIdAndUpdate(id, {
            cart: [...user.cart, ...array]
        }, { new: true });
        // add= add.populate('cart.cart', ['name', 'price', 'image'])
        add = await add.save();
        //let usuario= await User.findById(id).populate('cart.cart', ['name', 'price', 'image'])
        res.json(array)
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    addCart,
    getCartUser,
    deleteCart,
    deleteCartOne,
    Join
};