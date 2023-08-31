// Write all the code here
//4.2

import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {"some 33-56ss addr"}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"Mariana"}
          </p>
          <p>
            <b>Phone</b>
            {2131232123}
          </p>
        </div>

        {/*Created Status section with Order Status, Placed At and Delivered At content */}
        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At</b>
            {"08-03-2022"}
          </p>
          <p>
            <b>Delivered At</b>
            {"23-02-2003"}
          </p>
        </div>

        {/*Created Payment section with Payment Method, Payment Reference and Paid At content of the Order Details Page*/}
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {"COD"}
          </p>
          <p>
            <b>Payment Reference</b>#{"rfrfrjfrjfjrf"}
          </p>
          <p>
            <b>Paid At</b>
            {"26-08-2003"}
          </p>
        </div>

        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>₹{80}
          </p>
          <p>
            <b>Shipping Charges</b>₹{60}
          </p>
          <p>
            <b>Tax</b>₹{232}
          </p>
          <p>
            <b>Total Amount</b>₹{75 + 55 + 80}
          </p>
        </div>

        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{5}</span> x <span>{80}</span>
            </div>
          </div>
          <div>
            <h4>Veg Cheese Burger</h4>
            <div>
              <span>{6}</span> x <span>{60}</span>
            </div>
          </div>
          <div>
            <h4>Burger Fries</h4>
            <div>
              <span>{4}</span> x <span>{40}</span>
            </div>
          </div>
          <div>
            <h4
              style={{
                fontWeight: 800,
              }}
            >
              Sub Total
            </h4>
            <div
              style={{
                fontWeight: 800,
              }}
            >
              ₹{920}
            </div>
          </div>
        </article>

      </main>
    </section>
  );
};
export default OrderDetails;
