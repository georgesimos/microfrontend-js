import faker from "faker";

const mount = (element) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  element.innerHTML = products;
};

// Only for isolation development
if (process.env.NODE_ENV === "development") {
  const element = document.getElementById("dev-products");
  if (element) mount(element);
}

export { mount };
