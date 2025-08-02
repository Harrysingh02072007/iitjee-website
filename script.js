function searchResources() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const listItems = document.querySelectorAll("#resourceList li");

    listItems.forEach(item => {
        if (item.textContent.toLowerCase().includes(input)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}