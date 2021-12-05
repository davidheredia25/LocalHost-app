const { findById } = require('../../../models/User');
const User = require('../../../models/User');
const Product = require('../../../models/Product');


const addCart = async( req, res) => {
    //const{ idUser,idItem } =req.params;
    const { idUser,idItem} = req.params;  
    function splitt(string) {
        let id = string.split('"');
        let dividido = id[1];
        return dividido;
      } 
    //const { idItem } = req.body;
    try {
        let user= await User.findById(idUser);
        let product= await Product.findById(idItem);
        console.log('usercart',user.cart)
        let cartUser= user.cart.cart;
        
        //console.log('cartuser', cartUser[0]._id)
         let filtered = cartUser.filter(
            (x) => splitt(JSON.stringify(x.cart._id)) === product._id.toString()
          );
        console.log('filtered',filtered);
        // /let productUser = await user.cart.find(x => x._id === idItem);
        if(filtered){
            filtered.count = 1;
            let edit = await User.findByIdAndUpdate(idUser, {
                cart: [...user.cart,filtered],
             }, { new: true });
             let editUser = await edit.save(); 
             res.json(editUser);
            
        }else {
        let edit = await User.findByIdAndUpdate(idUser, {
           cart: [...user.cart,product],
        }, { new: true });
        let editUser = await edit.save(); 
        res.json(editUser); 
    }
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    addCart
};