//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".toggle");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            const checkedCheckboxes = document.querySelectorAll(".toggle:checked");

            if (checkedCheckboxes.length > 2) {
                checkedCheckboxes[0].checked = false;
            }
        });
    });
});
