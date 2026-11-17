$(document).ready(function () {
  $(".hidden-content")
    .css({ opacity: 0, transform: "translateY(30px)" })
    .animate(
      { opacity: 1 },
      {
        duration: 800,
        step: function (now, fx) {
          if (fx.prop === "opacity") {
            const moveY = 30 - now * 30;
            $(this).css("transform", `translateY(${moveY}px)`);
          }
        },
      },
    );

  $(".note-btn").click(function () {
    const target = $(this).attr("data-note");
    $(".note-box").addClass("d-none");
    $(target).removeClass("d-none").hide().fadeIn(300);
  });

  $(".size-btn").click(function () {
    $(".size-btn").removeClass("btn-ice active").addClass("btn-outline-ice");
    $(this).removeClass("btn-outline-ice").addClass("btn-ice active");

    const rawPrice = $(this).attr("data-price");
    const numericPrice = parseFloat(rawPrice);
    $("#priceDisplay").fadeOut(150, function () {
      $(this)
        .text(`$${numericPrice.toFixed(2)}`)
        .fadeIn(150);
    });
  });

  $("#addToCartSakura").click(function () {
    const name = $(this).data("name");
    const price = parseFloat($("#sakuraPrice").attr("data-price"));

    let cart = JSON.parse(localStorage.getItem("aromaCart")) || [];
    cart.push({ name, price });
    localStorage.setItem("aromaCart", JSON.stringify(cart));

    $(this).text("Added ✓").removeClass("btn-danger").addClass("btn-success");
    setTimeout(() => {
      $(this)
        .text("Add to Cart")
        .removeClass("btn-success")
        .addClass("btn-danger");
    }, 1000);
  });

  $("#addToCartOud").click(function () {
    const name = $(this).data("name");
    const priceText = $("#priceDisplay").text().replace("$", "");
    const price = parseFloat(priceText);

    let cart = JSON.parse(localStorage.getItem("aromaCart")) || [];
    cart.push({ name, price });
    localStorage.setItem("aromaCart", JSON.stringify(cart));

    $(this).text("Added ✓").removeClass("btn-ice").addClass("btn-success");
    setTimeout(() => {
      $(this)
        .text("Add to Cart")
        .removeClass("btn-success")
        .addClass("btn-ice");
    }, 1000);
  });
});
