var final = [
    ["x", "x", "x", "x", "x", "x", "x", "c", "x", "x", "c", "x", "c", "c", "c", "c", "c", "x", "c", "c", "x", "c", "x", "x", "x", "x", "x", "x", "x"],
    ["x", "c", "c", "c", "c", "c", "x", "c", "x", "c", "x", "c", "c", "x", "c", "c", "c", "c", "c", "c", "x", "c", "x", "c", "c", "c", "c", "c", "x"],
    ["x", "c", "x", "x", "x", "c", "x", "c", "c", "x", "x", "c", "x", "c", "x", "x", "c", "x", "c", "x", "c", "c", "x", "c", "x", "x", "x", "c", "x"],
    ["x", "c", "x", "x", "x", "c", "x", "c", "c", "x", "x", "x", "c", "x", "x", "c", "c", "x", "c", "c", "x", "c", "x", "c", "x", "x", "x", "c", "x"],
    ["x", "c", "x", "x", "x", "c", "x", "c", "x", "x", "c", "x", "x", "x", "c", "c", "c", "x", "x", "x", "x", "c", "x", "c", "x", "x", "x", "c", "x"],
    ["x", "c", "c", "c", "c", "c", "x", "c", "x", "x", "c", "x", "c", "c", "x", "x", "c", "x", "c", "c", "c", "c", "x", "c", "c", "c", "c", "c", "x"],
    ["x", "x", "x", "x", "x", "x", "x", "c", "x", "c", "x", "c", "x", "c", "x" ,"c", "x", "c", "x", "c", "x", "c", "x", "x", "x", "x", "x", "x", "x"],
    ["c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "x", "c", "c", "x", "x", "c", "x", "x", "c", "c", "x", "c", "c", "c", "c", "c", "c", "c", "c"],
    ["x", "x", "x", "x", "c", "x", "x", "c", "c", "x", "c", "x", "c", "c", "x", "c", "c", "x", "x", "c", "c", "x", "c", "x", "x", "c", "c", "x", "x"],
    ["c", "c", "x", "x", "x", "x", "c", "c", "c", "c", "x", "x", "c", "x", "x", "x", "c", "c", "c", "x", "x", "c", "c", "x", "x", "x", "x", "c", "c"],
    ["c", "c", "c", "x", "x", "x", "x", "x", "x", "c", "x", "c", "c", "x", "x", "x", "x", "c", "c", "c", "x", "c", "x", "x", "x", "c", "c", "c", "c"],
    ["c", "x", "c", "c", "c", "c", "c", "x", "c", "c", "c", "c", "x", "c", "x", "x", "c", "c", "c", "c", "x", "c", "x", "x", "c", "c", "x", "x", "c"],
    ["c", "x", "x", "x", "x", "c", "x", "c", "x", "c", "c", "x", "c", "x", "x", "c", "x", "c", "c", "x", "x", "x", "c", "c", "c", "x", "x", "x", "c"],
    ["x", "c", "c", "c", "x", "c", "c", "c", "c", "x", "x", "x", "x", "x", "c", "c", "c", "x", "x", "c", "c", "x", "c", "x", "x", "x", "x", "c", "c"],
    ["c", "x", "x", "x", "x", "c", "x", "x", "c", "c", "c", "x", "x", "c", "x", "x", "c", "c", "x", "c", "c", "c", "x", "x", "x", "x", "x", "c", "x"],
    ["x", "c", "c", "x", "c", "c", "c", "x", "c", "c", "x", "c", "c", "c", "c", "c", "c", "x", "x", "c", "c", "x", "c", "c", "c", "c", "c", "c", "c"],
    ["x", "x", "c", "c", "c", "x", "x", "c", "c", "x", "x", "c", "x", "x", "c", "x", "c", "x", "c", "c", "x", "x", "c", "x", "c", "c", "x", "c", "x"],
    ["c", "x", "c", "c", "c", "x", "c", "c", "c", "c", "c", "c", "x", "c", "c", "x", "x", "c", "c", "x", "c", "c", "c", "x", "c", "c", "c", "x", "x"],
    ["c", "c", "c", "x", "c", "c", "x", "c", "c", "c", "c", "c", "c", "c", "x", "x", "c", "c", "x", "c", "x", "c", "x", "x", "c", "x", "x", "c", "x"],
    ["c", "x", "x", "c", "c", "c", "c", "x", "x", "x", "c", "x", "x", "c", "c", "x", "x", "x", "c", "x", "x", "x", "c", "x", "x", "c", "x", "x", "c"],
    ["x", "x", "x", "c", "c", "x", "x", "c", "c", "c", "c", "x", "x", "x", "c", "x", "c", "c", "x", "x", "x", "x", "x", "x", "x", "c", "c", "c", "x"],
    ["c", "c", "c", "c", "c", "c", "c", "c", "c", "x", "x", "x", "x", "c", "c", "c", "c", "x", "c", "x", "x", "c", "c", "c", "x", "x", "c", "c", "x"],
    ["x", "x", "x", "x", "x", "x", "x", "c", "c", "x", "x", "c", "x", "x", "x", "c", "x", "c", "x", "c", "x", "c", "x", "c", "x", "x", "c", "x", "x"],
    ["x", "c", "c", "c", "c", "c", "x", "c", "x", "x", "c", "c", "x", "x", "c", "c", "x", "x", "c", "c", "x", "c", "c", "c", "x", "x", "c", "x", "c"],
    ["x", "c", "x", "x", "x", "c", "x", "c", "c", "x", "x", "c", "c", "x", "x", "c", "c", "x", "x", "c", "x", "x", "x", "x", "x", "c", "x", "x", "x"],
    ["x", "c", "x", "x", "x", "c", "x", "c", "x", "c", "x", "x", "x", "c", "x", "c", "x", "c", "x", "c", "c", "x", "x", "c", "x", "x", "c", "x", "c"],
    ["x", "c", "x", "x", "x", "c", "x", "c", "x", "x", "x", "c", "x", "x", "x", "c", "x", "x", "x", "c", "c", "x", "x", "x", "c", "x", "x", "x", "c"],
    ["x", "c", "c", "c", "c", "c", "x", "c", "x", "c", "c", "c", "x", "c", "x", "x", "x", "x", "x", "x", "c", "c", "c", "x", "c", "x", "x", "c", "x"],
    ["x", "x", "x", "x", "x", "x", "x", "c", "x", "c", "x", "c", "c", "c", "c", "c", "c", "x", "c", "c", "c", "c", "x", "c", "x", "c", "x", "c", "c"]
    ];

var start = [
    ["x", "c", "x", "c", "x", "x", "x", "x", "c", "c", "c", "c", "c", "c", "c", "x", "x", "c", "x", "c", "c", "x", "x", "c", "c", "c", "c", "x", "c"],
    ["c", "x", "c", "x", "x", "c", "c", "c", "x", "c", "c", "x", "c", "c", "x", "x", "c", "x", "c", "c", "c", "c", "c", "x", "c", "c", "c", "c", "x"],
    ["c", "x", "c", "x", "x", "c", "x", "x", "c", "c", "c", "x", "x", "c", "c", "c", "x", "c", "c", "c", "x", "x", "c", "c", "c", "x", "x", "x", "c"],
    ["x", "x", "c", "x", "x", "c", "x", "c", "x", "c", "c", "c", "c", "c", "x", "x", "c", "x", "c", "c", "x", "x", "x", "c", "c", "x", "c", "c", "x"],
    ["c", "c", "c", "c", "x", "c", "x", "c", "c", "c", "x", "c", "c", "x", "c", "x", "x", "c", "c", "c", "x", "x", "x", "x", "x", "c", "x", "c", "c"],
    ["c", "c", "x", "c", "c", "c", "c", "c", "x", "x", "c", "c", "x", "x", "x", "c", "x", "c", "c", "c", "c", "c", "c", "c", "c", "x", "c", "x", "x"],
    ["x", "x", "c", "x", "x", "c", "c", "c", "c", "c", "x", "x", "x", "x", "x", "c", "x", "c", "c", "c", "c", "x", "x", "c", "x", "x", "c", "c", "x"],
    ["c", "x", "x", "c", "x", "c", "c", "x", "c", "c", "x", "x", "x", "c", "x", "c", "x", "c", "x", "c", "x", "x", "c", "x", "c", "x", "x", "c", "c"],
    ["c", "x", "c", "x", "x", "c", "c", "x", "c", "c", "x", "x", "c", "x", "x", "c", "c", "x", "x", "c", "x", "c", "x", "c", "x", "c", "x", "x", "x"],
    ["c", "x", "x", "x", "c", "x", "x", "c", "c", "c", "x", "c", "c", "c", "x", "c", "x", "x", "c", "x", "x", "x", "x", "x", "c", "c", "c", "x", "c"],
    ["c", "c", "c", "c", "x", "c", "c", "x", "x", "x", "x", "x", "x", "x", "c", "x", "c", "c", "x", "c", "c", "c", "x", "x", "x", "x", "x", "x", "c"],
    ["x", "x", "x", "x", "c", "x", "c", "c", "x", "x", "c", "x", "c", "c", "c", "c", "c", "c", "c", "x", "c", "x", "x", "c", "c", "c", "c", "c", "x"],
    ["c", "c", "c", "c", "c", "c", "c", "x", "c", "x", "x", "c", "c", "x", "x", "c", "x", "c", "x", "x", "c", "x", "x", "x", "c", "c", "x", "c", "c"],
    ["c", "x", "x", "x", "c", "x", "c", "c", "x", "x", "x", "x", "x", "c", "x", "x", "c", "c", "c", "c", "c", "c", "c", "x", "c", "x", "c", "x", "x"],
    ["x", "c", "x", "c", "c", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "c", "x", "c", "c", "x", "x", "c", "c", "x", "c", "x"],
    ["x", "c", "x", "c", "c", "x", "c", "x", "x", "x", "c", "x", "x", "x", "c", "x", "c", "c", "x", "x", "c", "c", "c", "c", "c", "c", "c", "c", "x"],
    ["c", "x", "x", "x", "c", "x", "c", "x", "x", "c", "x", "c", "c", "x", "c", "x", "x", "x", "c", "c", "c", "x", "c", "x", "x", "x", "c", "c", "x"],
    ["c", "x", "c", "c", "c", "c", "c", "c", "x", "c", "c", "x", "x", "x", "x", "x", "x", "x", "c", "x", "c", "x", "c", "c", "x", "x", "x", "x", "x"],
    ["x", "c", "c", "c", "c", "x", "x", "x", "c", "c", "x", "x", "x", "x", "c", "x", "c", "x", "x", "x", "x", "c", "c", "x", "c", "c", "c", "c", "x"],
    ["x", "c", "c", "c", "x", "x", "x", "x", "x", "x", "x", "x", "c", "x", "x", "x", "x", "x", "c", "c", "x", "x", "c", "x", "c", "c", "c", "c", "x"],
    ["c", "x", "c", "c", "c", "c", "x", "c", "x", "c", "c", "c", "x", "x", "c", "x", "x", "c", "c", "c", "x", "x", "c", "x", "c", "x", "c", "c", "x"],
    ["x", "x", "x", "x", "x", "x", "x", "c", "x", "x", "x", "x", "c", "x", "x", "x", "c", "x", "x", "x", "x", "c", "c", "c", "c", "c", "x", "x", "x"],
    ["c", "x", "x", "x", "x", "c", "x", "c", "x", "c", "c", "x", "c", "x", "c", "x", "x", "x", "c", "x", "c", "c", "x", "x", "c", "c", "x", "x", "c"],
    ["c", "c", "x", "x", "x", "x", "c", "x", "x", "x", "c", "c", "c", "c", "c", "c", "x", "c", "x", "x", "x", "x", "x", "x", "c", "c", "c", "x", "x"],
    ["x", "c", "x", "c", "c", "c", "c", "c", "c", "x", "c", "x", "x", "c", "c", "x", "x", "c", "c", "x", "x", "x", "x", "x", "x", "c", "x", "c", "x"],
    ["x", "x", "x", "c", "x", "x", "x", "c", "x", "x", "c", "x", "x", "c", "c", "x", "c", "c", "x", "c", "c", "c", "x", "c", "x", "c", "x", "x", "x"],
    ["c", "c", "c", "x", "x", "x", "x", "c", "x", "x", "x", "x", "x", "c", "x", "x", "c", "c", "x", "c", "c", "c", "c", "x", "x", "x", "c", "c", "x"],
    ["c", "x", "c", "x", "c", "x", "x", "c", "x", "c", "c", "x", "x", "c", "x", "c", "x", "c", "c", "x", "c", "c", "x", "x", "c", "c", "c", "x", "c"],
    ["c", "c", "c", "x", "c", "x", "x", "x", "c", "c", "c", "x", "c", "c", "x", "x", "x", "c", "x", "x", "x", "x", "x", "x", "c", "x", "c", "x", "c"]
];

var reset = [
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"]
];

var lol = [["c"]];

var colorsObject = {
    x: "rgb(245, 166, 205)",
    c: 'transparent',
    z: 'transparent'
};

var pixelArray = [
    ['c', 'c', 'c'],
    ['x', 'c', 'x']
];

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function createPixelArt(containerElementId, pixelArray, sizeOfPixel, colorsObject){
    // container
    var container = document.getElementById(containerElementId);

    // pixel
    var pixel = document.createElement("div");
    container.appendChild(pixel);
    var noOfRows = pixelArray.length;
    var noOfColumns = pixelArray[0].length;

    // height and width of container element
    var heightOfElement = sizeOfPixel * noOfRows;
    var widthOfElement = sizeOfPixel * noOfColumns;
    container.style.height = heightOfElement + "px";
    container.style.width = widthOfElement + "px";
    container.style.overflow = "hidden";
    container.style.position = "relative";

    // pixel
    pixel.style.position = "absolute";
    pixel.style.height = sizeOfPixel + "px";
    pixel.style.width = sizeOfPixel + "px";
    pixel.style.top = -sizeOfPixel + "px";
    pixel.style.left = -sizeOfPixel + "px";

    var boxShadow = "";
    pixelArray.forEach(function(row, rowIndex) {
        row.forEach(function(column, columnIndex) {
            // box-shadow:"0px 0px color";
            boxShadow += `${(columnIndex + 1) * sizeOfPixel}px ${(rowIndex + 1) * sizeOfPixel}px ${colorsObject[column]},`;
        });
        console.log(boxShadow);
    });

    // remove last comma
    boxShadow = boxShadow.slice(0, -1);
    pixel.style.boxShadow = boxShadow;
}

function snowCrash(start, final, delay){
    createPixelArt("demo", start, 12, colorsObject);
    //createPixelArt("demo", lol, 12, colorsObject);
    //createPixelArt("demo", final, 12, colorsObject);
}

//createPixelArt("demo", start, 12, colorsObject);
createPixelArt("demo", final, 12, colorsObject);

//sleep(2000);

//setTimeout(createPixelArt("demo", reset, 12, colorsObject),10);





//snowCrash(start, final, 2000);

