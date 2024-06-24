const db = require('../Model/database');

exports.allOrders = async(req,res)=>{
    const result = await db.query(`select * from orders where user_id = $1`,[req.body.user_id]);
    res.json(result.rows);
}