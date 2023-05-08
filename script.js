let count = 0;
let products = [];
const formParentDiv = document.getElementById("product-section");
document.getElementById("plus-btn").addEventListener("click", () => {
  count++;
  const htmlForm = `<div class="products-form-div ${
    "products-form-div-" + count
  }">
  <button onclick="deleteForm('${
    "products-form-div-" + count
  }')" id="delete-btn">Delete</button>
  <form>
    <label for="prod-name">Product Name</label><br/>
    <input type="text" class="product-name" id=${
      "product-name" + count
    } name="prodName" placeholder="your name"/><br/>
    <label for="describe">Description</label><br/>
    <textarea name="describe" class="description" id=${
      "describe" + count
    } cols="30" rows="5"></textarea><br/>
    <label for="quantity">Quantity</label><br/>
    <input name="quantity" type="number" class="quantity" id=${
      "quantity" + count
    } placeholder=""/><br/>
    <label for="rate">Rate</label><br/>
    <input name="rate" type="number" class="quantity" id=${
      "rate" + count
    } placeholder=""/><br/>
    <label for="amount">Amount</label><br />
    <input name="amount" type="number" id=${
      "amount" + count
    } placeholder=""/><br/><br/>
  </form>
  <br/>
  </div>`;
  const formParentDiv = document.getElementById("product-section");
  const innerDiv = document.createElement("div");
  innerDiv.innerHTML = htmlForm;
  formParentDiv.appendChild(innerDiv);
});

const productFormDiv = document.getElementsByClassName("products-form-div");
const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", () => {
  const productArray = Array.from(
    document.getElementsByClassName("products-form-div")
  );
  console.log(productFormDiv.length, productArray);
  productArray.forEach((product) => {
    console.log(product.getElementsByClassName("product-name")[0].value);
  });
});

// delete form
const deleteForm = (uniqueClass) => {
  const deleteFormDiv = document.getElementsByClassName(uniqueClass);
  console.log(deleteFormDiv);
  for (let deleteForm of deleteFormDiv) {
    console.log(deleteForm);
    formParentDiv.removeChild(deleteForm.parentNode);
  }
};
