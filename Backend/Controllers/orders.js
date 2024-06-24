const db = require('../Model/database');

exports.allOrders = async(req,res)=>{
    const result = await db.query(`select order_id , total_cost , user_id , address_id , to_char(order_date, 'YYYY-MM-DD') as order_date from orders where user_id = $1`,[req.body.user_id]);
    const orders = result.rows;
    const orderIds = orders.map(order => order.order_id);
    const tempResult = await db.query(`
        SELECT oi.order_id, p.*
        FROM order_items oi
        JOIN products p ON oi.product_id = p.product_id
        WHERE oi.order_id = ANY($1);
      `, [orderIds]);
      const productsByOrderId = tempResult.rows.reduce((acc, product) => {
        const { order_id, ...productDetails } = product;
        if (!acc[order_id]) {
          acc[order_id] = [];
        }
        acc[order_id].push(productDetails);
        return acc;
      }, {});

      const ordersWithProducts = orders.map(order => {
        return {
          ...order,
          products: productsByOrderId[order.order_id] || []
        };
      });
    //   console.log(ordersWithProducts[0].products)
    res.json(ordersWithProducts);
}