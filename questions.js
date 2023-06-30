let names = [
    "How can I style a button using CSS?",
    "What is the difference between HTML and HTML5?",
    "How do I make a responsive website using CSS?",
    "How to study Python",
    "Tensorflow or Pytorch",
];
let sortedNames = names.sort();


let input = document.getElementById("default-search");


input.addEventListener("keyup", (e) => {

    removeElements();
    for (let i of sortedNames) {


        if (
            i.toLowerCase().startsWith(input.value.toLowerCase()) &&
            input.value != ""
        ) {

            let listItem = document.createElement("li");

            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNames('" + i + "')");

            let word = "<b>" + i.substr(0, input.value.length) + "</b>";
            word += i.substr(input.value.length);

            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);
        }
    }
});
function displayNames(value) {
    input.value = value;
    removeElements();
}
function removeElements() {

    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
        item.remove();
    });
}