const Customer = require("../models/customers")
const Bill = require("../models/bill")
const mongoose = require("mongoose")


const createBill = async(req, res) =>{
    const {customer_id, payment_amount, payment_method, payment_date} = req.bod

    try{
        const bill = await Bill.create({customer_id, payment_amount, payment_method, payment_date})
        res.status(200).json(bills)
    }catch{
        res.status(400).json({error: error.message})
    }
}
