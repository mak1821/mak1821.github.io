

function deleteRow() {
    var tableBody = document.getElementById("semesterTableBody");
    var rowCount = tableBody.rows.length;

    if (rowCount > 1) {
        tableBody.deleteRow(rowCount - 1);
    }
}