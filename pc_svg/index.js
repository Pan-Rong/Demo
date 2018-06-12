(function () {
    //左边，排号
    for (let i = 0; i < 11; i++) {
        let svgH = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgH.setAttribute('width', '40');
        if (i == 2) {
            svgH.setAttribute('height', '80');
        } else {
            svgH.setAttribute('height', '40');
        }
        let textH = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        textH.setAttribute('x', '10');
        textH.setAttribute('y', '20');
        textH.setAttribute('style', 'fill:#000');
        textH.innerHTML = i + 1 - 0;
        svgH.appendChild(textH);
        document.getElementById("verticalTitle").append(svgH);
        //中部，座位号
        for (let j = 0; j < 15; j++) {
            let svgDom = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            /////设置预览框里的元素
            let svgDomSmall = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svgDom.setAttribute('width', '40');
            svgDomSmall.setAttribute('width', '13');
            if (i == 2) {
                svgDom.setAttribute('height', '80');
                svgDomSmall.setAttribute('height', '26');
            } else {
                svgDom.setAttribute('height', '40');
                svgDomSmall.setAttribute('height', '13');
            }

            let rectDom = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectDom.setAttribute('width', '30');
            rectDom.setAttribute('height', '30');
            rectDom.setAttribute('style', 'fill:#eee;stroke-width:1;stroke:#aaa');

            let rectDomSmall = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectDomSmall.setAttribute('width', '10');
            rectDomSmall.setAttribute('height', '10');
            rectDomSmall.setAttribute('style', 'fill:#eee;stroke-width:1;stroke:#aaa');
         
            /////
            rectDom.setAttribute('id', `${i}_${j}`);
            rectDom.addEventListener("click", function () {
                let currentStyle = rectDom.getAttribute("style");
                if (currentStyle == "fill:#eee;stroke-width:1;stroke:#aaa") {
                    rectDom.setAttribute('style', 'fill:#0cc;stroke-width:1;stroke:#aaa');
                    rectDomSmall.setAttribute('style', 'fill:#0cc;stroke-width:1;stroke:#aaa');
                } else {
                    rectDom.setAttribute('style', 'fill:#eee;stroke-width:1;stroke:#aaa');
                    rectDomSmall.setAttribute('style', 'fill:#eee;stroke-width:1;stroke:#aaa');
                }
                console.log("rectDom", rectDom);
            });

            svgDomSmall.appendChild(rectDomSmall);
            document.getElementById("skeletonize").append(svgDomSmall);

            svgDom.appendChild(rectDom);
            document.getElementById("svg").append(svgDom);

            //底部，座号序列
            if (i == 10) {
                let svgV = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svgV.setAttribute('width', '40');
                svgV.setAttribute('height', '40');
                let textV = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                textV.setAttribute('x', '15');
                textV.setAttribute('y', '25');
                textV.setAttribute('style', 'fill:#000');
                textV.innerHTML = j + 1 - 0;
                svgV.appendChild(textV);
                document.getElementById("horizontalTitle").append(svgV);

            }
        }
    }
})();

// (function () {
//     for (let i = 0; i < 11; i++) {
//         let tempNode = document.createElement("div");
//         tempNode.innerHTML = i + 1 - 0;
//         if (i == 2) {
//             tempNode.setAttribute('style', 'width: 40px; height:83px ;line-height: 43px');
//         } else {
//             tempNode.setAttribute('style', 'width: 40px; height:43px ;line-height: 43px');
//         }
//         document.getElementById("verticalTitle").append(tempNode);
//     }
//     for (let i = 0; i < 11; i++) {
//         for (let j = 0; j < 15; j++) {
//             let svgDom = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//             svgDom.setAttribute('width', '40');
//             if (i == 2) {
//                 svgDom.setAttribute('height', '80');
//             } else {
//                 svgDom.setAttribute('height', '40');
//             }
//             let rectDom = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
//             rectDom.setAttribute('width', '30');
//             rectDom.setAttribute('height', '30');
//             rectDom.setAttribute('style', 'fill:#eee;stroke-width:1;stroke:#aaa');
//             rectDom.setAttribute('id', `${i}_${j}`);
//             rectDom.addEventListener("click", function () {
//                 let currentStyle = rectDom.getAttribute("style");
//                 if (currentStyle == "fill:#eee;stroke-width:1;stroke:#aaa") {
//                     rectDom.setAttribute('style', 'fill:#0cc;stroke-width:1;stroke:#aaa');
//                 } else {
//                     rectDom.setAttribute('style', 'fill:#eee;stroke-width:1;stroke:#aaa');
//                 }
//                 console.log("rectDom", rectDom);
//             });
//             svgDom.appendChild(rectDom);
//             document.getElementById("svg").append(svgDom);

//         }
//     }
//     for (let i = 0; i < 15; i++) {
//         let tempNode1 = document.createElement("div");
//         tempNode1.innerHTML = i + 1 - 0;
//         tempNode1.setAttribute('style', 'width: 40px; height:40px ;line-height: 40px;');
//         document.getElementById("horizontalTitle").append(tempNode1);
//     }

// })();