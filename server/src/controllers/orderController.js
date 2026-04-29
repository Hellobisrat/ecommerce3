import Order from '../models/Order.js'

export const placeOrder = async(req,res)=>{
  try {
    const { items, total, shippingAddress, shippingMethod } = req.body;

    const order = await Order.create({
      user:req.user._id,
      items,
      total,
      shippingAddress,
      shippingMethod,

    })
    res.this.status(201).json(order)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

export const getUserOrders = async(req,res)=>{
  try {
    const orders = (await Order.find({user:req.user._id})).sort({cratedAt:-1})
     res.json(orders)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

export const getAllOrders = async (req,res)=>{
  try {
     const orders = await Order.find()
           .populate("user","name email")
           .sort({createdAt:-1})

           res.json(orders)
  } catch (error) {
      res.status(500).json({message:error.message})
  }
}

export const updateOrderStatus = async(req,res)=>{
  try {
    const order = await Order.findByIdAndUpdate(req.params.id,
      {status:req.body.status},
      {new:true}
    )
    res.json(order)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}