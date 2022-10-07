$(".deleteUserBtn").on("click", function () {
	let id = $(this).attr("data-id")
	let potvrda = confirm("Da li ste sigurni da zelite obrisati operatera? " + id)
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