function AnimationFun(element) {
    let label = element.previousElementSibling;
    label.classList.add('label')
    let str = label.textContent;
    let arrStr = str.split("");
    let newStr = "";
    for (let i of arrStr) {
        console.log(i);
        newStr = newStr + `<span>${i}</span>`;
    }
    label.innerHTML = newStr;
}

function RemoveAnimation(element) {
    let label = element.previousElementSibling;
    label.classList.remove('label')
}