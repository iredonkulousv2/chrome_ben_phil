function reddenPage() {
    fetch("https://demon-slayer-api.onrender.com/v1/")
        .then(res => {
            return res.json()
        })
        .then(json => {
            const imgDirty = json
            const imgClean = imgDirty.map(el => {
                // console.log(el.image)
                const index = el.image.search(".png")
                const newUrl = el.image.slice(0, index+4)
                console.log(newUrl)
                return newUrl
            })
            console.log(imgClean)

            
        })
    document.body.style.backgroundColor = "red";
    console.log(document);
    
  }
  chrome.action.onClicked.addListener((tab) => {
    if (!tab.url.includes("chrome://")) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: reddenPage,
      });
    }
  });