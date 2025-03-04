import { SHOPPING_CAR_KEYWORD } from "../../lib/constants/index.js";
import { getToLocalStorage } from "../../lib/utils/get-to-local-storage.js";
import { saveToLocalStorage } from "../../lib/utils/save-to-local-storage.js";
import { useMutationObserver } from "../../lib/utils/use-mutation-observer.js";

const productsContainer = document.querySelector("#productos")


useMutationObserver(productsContainer, () => {
  const products = document.querySelectorAll(".producto");

  products.forEach((item) => {
    item.addEventListener('click', () => {
      const { id } = item.dataset;

      const productNameElement = item.querySelector(".producto-btn");
      const prevSavedProducts = getToLocalStorage(SHOPPING_CAR_KEYWORD) ?? [];
      const newSavedProducts = new Set([...prevSavedProducts, id]);

      saveToLocalStorage(SHOPPING_CAR_KEYWORD, Array.from(newSavedProducts))

      productNameElement.textContent = "anadido"
    })

  })

})
