(()=>{
    var scripts = document.getElementsByTagName('script');
    let script_tag = scripts[scripts.length -1];
    let imageIdentifier = script_tag.getAttribute("imageIdentifier");
    let titlePrefix = script_tag.getAttribute("titlePrefix");
    let parentDiv = document.getElementById(script_tag.getAttribute("parentDivID"));
    let folderName = script_tag.getAttribute("folderName");

    for(let i=1; i<100; i++) {

        swipeBoxImagePath = `images/${folderName}/${imageIdentifier}${i}t.jpg`;
        let swipeBoxImage = document.createElement("IMG");
        swipeBoxImage.src = swipeBoxImagePath;
        swipeBoxImage.onload = () => {
            let topDiv = document.createElement("DIV");
            topDiv.className = 'col-md-4 portfolio-wrapper';
            parentDiv.appendChild(topDiv);
            
            let swipeBoxAnchor = document.createElement("A");
            swipeBoxAnchor.href = `images/${folderName}/${imageIdentifier}${i}.jpg`;
            swipeBoxAnchor.className = 'b-link-stripe b-animate-go swipebox';
            swipeBoxAnchor.title = `${titlePrefix}${i}`;
            topDiv.appendChild(swipeBoxAnchor);
            
            swipeBoxAnchor.appendChild(swipeBoxImage);
            
            let plusIconWrapper = document.createElement("DIV");
            plusIconWrapper.className = 'b-wrapper';
            swipeBoxAnchor.appendChild(plusIconWrapper);
            
            let animationHeading = document.createElement("h2");
            animationHeading.className = 'b-animate b-from-left b-delay03';
            plusIconWrapper.appendChild(animationHeading);
            
            let plusIcon = document.createElement("img");
            plusIcon.src = 'images/plus.png';
            animationHeading.appendChild(plusIcon);
        }
    }
})();



