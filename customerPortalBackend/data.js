// import { faker } from "@faker-js/faker";
const { faker } = require("@faker-js/faker");
const users = [];
const orders = {};
const sales = {};
for (let i = 1; i <= 10; i++) {
  const uname = faker.name.fullName();
  const userData = {
    id: i,
    name: uname,
    photoURL: faker.image.avatar(),
    customer_type: i % 2 === 0 ? "Designer" : "Architect",
    customer_zone: i % 3 === 0 ? "Canada" : "USA",
    email: `${uname
      .split(" ")
      [uname.split(" ").length - 1].toLowerCase()}@example.com`,
    since_date: new Date(
      new Date().getTime() - i * 24 * 60 * 60 * 1000
    ).toISOString(),
  };

  const userOrderData = {
    userId: i,
    purchasing: {
      currency: i % 2 === 0 ? "CAD" : "USD",
      payment_terms: i % 3 === 0 ? "CAD-Cash Against Documents" : "NET 30",
      payment_method: i % 4 === 0 ? "Credit Card" : "Wire Transfer",
      measurement_system: i % 2 === 0 ? "Imperial" : "Metric",
      incoterms:
        i % 5 === 0 ? "DPU-Delivered at Place Unloaded" : "FOB-Free on Board",
    },
    shipping: {
      mode: i % 3 === 0 ? "Air" : "Ocean, Rail and Road",
      shipping_port: i % 4 === 0 ? "New York" : "Los Angeles",
    },
    addressDetails: {
      line1: `${i}${i}${i} Main St.`,
      line2: `Unit ${i}`,
      zipcode: `${i}${i}${i}${i}${i}`,
      state: i % 3 === 0 ? "Ontario" : "California",
      country: i % 2 === 0 ? "Canada" : "USA",
    },
  };

  let numOrders = Math.floor(Math.random() * 10) + 1;
  let usales = [];
  for (let j = 0; j < numOrders; j++) {
    let salesData = {
      sales_order: "SO-" + faker.datatype.number(),
      sales_date: new Date(
        new Date().getTime() - j * 24 * 60 * 60 * 1000
      ).toISOString(),
      product: Math.floor(Math.random() * 1000) + 1,
      thickness: Math.floor(Math.random() * 10) + 1,
      finish: faker.commerce.productMaterial(),
      unit_price: faker.finance.amount(),
    };
    usales.push(salesData);
  }
  users.push(Object.assign({}, userData));
  orders[i] = Object.assign({}, userOrderData);
  sales[i] = usales;
}

module.exports = { users, orders, sales };
