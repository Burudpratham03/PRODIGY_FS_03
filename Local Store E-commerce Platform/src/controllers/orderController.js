const Order = require('../models/Order');

// Create a new order
const createOrder = async (req, res) => {
  const { userId, products, totalPrice } = req.body;
  try {
    const order = new Order({ user: userId, products, totalPrice });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user products.product');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createOrder, getAllOrders };
