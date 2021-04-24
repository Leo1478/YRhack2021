//cuz idk how chrome extension works, but might as well do something and add a function
function detectHere() {
    let element = document.getElementsByClassName("oIy2qc");
    let length = element.length;
    let latest = element[length - 1].toLowerCase();
    return (latest == "here" || latest.indexOf("here") != -1);//I think?
}
