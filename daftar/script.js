document.addEventListener("DOMContentLoaded", function () {
    const complaintForm = document.getElementById("complaintForm");

    complaintForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Mencegah form dikirimkan

        // Mengambil nilai-nilai input
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validasi input
        if (name === "" || email === "" || subject === "" || message === "") {
            alert("Harap isi semua kolom.");
        } else {
            // Di sini Anda dapat mengirimkan data pengaduan ke server atau melakukan tindakan lain yang sesuai.
            alert("Pengaduan Anda telah berhasil dikirim!");
            complaintForm.reset();
        }
    });
});
