// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  //sendHere();
  //detectHere();



  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
    function: detectHere,
  });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
    function: sendHere,
  });
});

// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}


function detectHere() {
  let element = document.getElementsByClassName("oIy2qc");
  let length = element.length;
  alert(element[0].innerHTML);
  //let latest = element[length - 1].toLowerCase();
  alert(document.getElementsByClassName("oIy2qc").length)
  //return (latest == "here" || latest.indexOf("here") != -1);//I think?
}

function sendHere() {

  alert("yeah, we really dont know how to make this program");
  let input = "here";
  //document.getElementsByClassName("KHxj8b tL9Q4c")[0].value = input;
  document.getElementsByName('chatTextInput')[0].value = input;
  //document.getElementsByClassName('edhGSc zKHdkd XnKlKd CDELXb')[0].value = "hi";

  //document.getElementsByClassName('Pc9Gce Wic03c')[0].value = "hello";

  //document.querySelector('.uArJ5e .Y5FYJe .cjq2Db .IOMpW .Cs0vCd .M9Bg4d').click();

  var classes = document.getElementsByClassName('uArJ5e Y5FYJe cjq2Db IOMpW Cs0vCd M9Bg4d');
  var button1 = classes[0];
  button1.click();
  button1.click();

  console.log("hi");


}