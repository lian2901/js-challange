

// We have a collection of product and price with CSV formats:

// NAME, CATEGORY, PRICE
// Xiaomi Redmi 5A, Smartphone, 1199000
// Macbook Air, Laptop, 13775000
// Samsung Galaxy J7, Smartphone, 3549000
// DELL XPS 13, Laptop, 26799000
// Xiaomi Mi 6, Smartphone, 5399000
// LG V30 Plus, Smartphone, 10499000

const csv = `NAME, CATEGORY, PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000`;

const data = csv.split("\n");
data.splice(0, 1);
const output = data.map((item) => {
  const i = item.split(/,[\s]+/); 
  const price = new Intl.NumberFormat("id", {
    style: "currency",
    currency: "IDR",
  }).format(parseInt(i[2]));
  return {
    name: i[0],
    price: price,
    category: i[1],
  };
});


