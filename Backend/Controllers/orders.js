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
    res.json(ordersWithProducts);
}

exports.orderDetails = async (req,res) =>{
  const {rows} = await db.query(`select orders.order_id, to_char(orders.order_date, 'DD-MM-YYYY') AS order_date, orders.total_cost, address.*, products.*, order_items.quantity FROM
        orders
      JOIN
        order_items ON orders.order_id = order_items.order_id
      JOIN
        products ON order_items.product_id = products.product_id
      JOIN
        address ON orders.address_id = address.address_id
      WHERE
        orders.order_id = $1;`,[req.body.orderId]);

  if (rows.length === 0) {
    return res.status(404).json({ error: 'Order not found' });
  }

  const orderDetails = {
    order_id: rows[0].order_id,
    total_cost: rows[0].total_cost,
    order_date: rows[0].order_date,
  };

  const addressDetails = {
    phone_number: rows[0].phone_number,
    zip: rows[0].zip,
    city: rows[0].city,
    province: rows[0].province,
    street_address: rows[0].street_address,
    full_name: rows[0].full_name
  };

  const productDetails = rows.map(row => ({
    color: row.color,
    brand: row.brand,
    category: row.category,
    description: row.description,
    price: row.price,
    image_url: row.image_url,
    quantity: row.quantity,
  }));

  const result = {
    orderDetails:orderDetails,
    addressDetails:addressDetails,
    productDetails:productDetails,
  };

  res.json(result);
  
}