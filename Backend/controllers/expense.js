const ExpenseSchema = require("../models/ExpenseModel");

exports.addExpense = async (req,res) => {
const {title, amount, category, description, date } = req.body;

const income = ExpenseSchema({
    title,
    description,
    amount,
    category,
    date
})

try {
    // validations
    if(!title|| !category || !description || !amount || !date){
        return res.status(400).json({message: "All filed are required"});
    }
    if( amount <= 0 || !amount === 'number'){
        return res.status(400).json({message: "Amount must be a positive number"});
    }
    await income.save();
    res.status(200).json({message: "Expense Added"});
} catch (error) {
    return res.status(500).json({message: "Server Error"});
}
}


exports.getExpense = async (req,res) => {
    
    try {
       const expenses  = await ExpenseSchema.find().sort({createdAt : -1})
        res.status(200).json(expenses);
    } catch (error) {
        return res.status(500).json({message: "Server Error"});
    }
    }

 exports.deleteExpense = async (req,res) => {
        const  {id} = req.params;
        console.log(req.params);
        ExpenseSchema.findByIdAndDelete(id).then((expense) => {
            return res.status(500).json({message: "Expense Deleted"});
        }).catch((err) => {
            return res.status(500).json({message: "Server Error"});
        });
        }
        
    