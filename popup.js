// const main = async () => {
//     const data =  await fetch('https://demon-slayer-api.onrender.com/v1/')
//     const json = await data.json()
//     // console.log(json)
  
//     chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)    {
//         console.log(request)
//     });
// }

// main()

console.log('This is running')



// chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
//     if(message.msg === "image"){
//       fetch('https://some-random-api.ml/img/pikachu')
//             .then(response => response.text())
//             .then(data => {
//               let dataObj = JSON.parse(data);
//               senderResponse({data: dataObj, index: message.index});
//             })
//             .catch(error => console.log("error", error))
//         return true;  // Will respond asynchronously.
//     }
//   });

// let images = document.getElementsByTagName('img');
// for(let i = 0; i < images.length; i++){
//   chrome.runtime.sendMessage({msg: 'image', index: i}, function({data, index}){
//     images[index].src = data.link;
//   });
// }

chrome.action.onClicked.addListener((tab) => {
    console.log(tab.url);
   });

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }