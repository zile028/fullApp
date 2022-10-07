$(".deleteUserBtn").on("click", function () {
    let id = $(this).attr("data-id")
    let potvrda = confirm("Da li ste sigurni da zelite obrisati korisnika?")
    if (potvrda) {
        $.ajax({
            url: `/admin/delete/user/${id}`
        }).then((res) => {
            if (res === "OK") {
                window.location.href = "/admin"
            }
        })
    }
})

$(".deleteCityBtn").on("click", function () {
    let id = $(this).attr("data-id")
    let potvrda = confirm("Da li ste sigurni da zelite obrisati grad?")
    if (potvrda) {
        $.ajax({
            url: `/admin/delete/city/${id}`
        }).then((res) => {
            if (res === "OK") {
                window.location.href = "/admin"
            }
        })
    }
})

$(".deleteProductBtn").on("click", function () {
    let id = $(this).attr("data-id")
    let potvrda = confirm("Da li ste sigurni da zelite obrisati proizvod?")
    if (potvrda) {
        $.ajax({
            url: `/admin/delete/product/${id}`
        }).then((res) => {
            if (res === "OK") {
                window.location.href = "/admin"
            }
        })
    }
})