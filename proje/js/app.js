var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
    },
});
//PRODUCTS.JS

fetch("products.json")
  .then(response => response.json())
  .then(data => {
    let html = "";
    data.forEach(element => {
      html +=
      `<div class="col-12 col-lg-3 col-md-4 testing" id="cards">
      <div class="card">
        <img src="images/featured-products/featured-1.webp" class="card-img-top" alt="...">
        <div class="card-body text-center">
          <div class="body-text">
            <i class="bi bi-star-fill">${element.rating} <span class="comment">(122 Yorum)</span></i>
          </div>
          <span class="seri-no">${element.barcode} </span>
          <h5 class="card-title">${element.name} </h5>
          <div class="product-info">
            <h2>${element.price} </h2>
            <div class="product-cargo">
              <span>${element.totalproduct} </span>
            </div>
            <span class="cargo">${element.cargo}</span>
            <div class="text-start" id="tooltip">
              <div class="tooltip-icons d-inline-block text-center">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg%22%3E<g><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 16v-4l5 5-5 5v-4H4v-2h12zM8 2v3.999L20 6v2H8v4L3 7l5-5z"></path></g></svg></div><h6 class="ps-4 d-inline-block text-white">
                <a href="#">SEPETE EKLE</a> </h6>
            </div>
          </div>
        </div>
      </div>
    </div>`
      document.getElementById("cards")
      .innerHTML = html
    });
  });