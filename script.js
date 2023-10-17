let sorted = false;
let sortBtn = document.getElementById("sortBtn");
let barsContainer = document.getElementById("barContainer");
let algo = document.getElementById("algo");
let speed = document.getElementById("speed");
let slider = document.getElementById("slider");
let min_val = 1;
let max_val = slider.value;
let numOfBars = slider.value;
let heightFactor = 4;
let speedFactor = 100;
let unsortedArray = new Array(numOfBars);

const randomize = (min, max) => {
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}

const randomizeArray = () => {
    let array = new Array(numOfBars);
    for (let i = 0; i < numOfBars; i++) {
        array[i] = randomize(min_val, max_val);
    }
    sorted = false;
    return array;
}

const renderBars = (array) => {
    for (let i = 0; i < numOfBars; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = array[i] * heightFactor + "px";
        barsContainer.appendChild(bar);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    unsortedArray = randomizeArray();
    renderBars(unsortedArray);
})

slider.addEventListener("input", function () {
    numOfBars = slider.value;
    max_val = slider.value;
    barsContainer.innerHTML = "";
    unsortedArray = randomizeArray();
    renderBars(unsortedArray);
});

let algoUsed = '';

algo.addEventListener('change', () => {
    algoUsed = algo.value;
})

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function bubbleSort(array) {
    slider.disabled = true;
    algo.disabled = true;
    sortBtn.disabled = true;
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                for (let k = 0; k < bars.length; k++) {
                    if (k !== j && k !== j + 1) {
                        bars[k].style.backgroundColor = "aqua";
                    }
                }
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                bars[j].style.height = array[j] * heightFactor + "px";
                bars[j].style.backgroundColor = "lightgreen";
                bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
                bars[j + 1].style.backgroundColor = "lightgreen";
                await sleep(speedFactor);
                bars[j].style.backgroundColor = "aqua";
                bars[j + 1].style.backgroundColor = "aqua";
            }
        }
        bars[i].style.backgroundColor = "aqua";
        await sleep(speedFactor);
    }
    slider.disabled = false;
    algo.disabled = false;
    sortBtn.disabled = false;
    return array;
}

async function selectionSort(array) {
    slider.disabled = true;
    algo.disabled = true;
    sortBtn.disabled = true;
    let bars = document.getElementsByClassName("bar");
    let k, temp;

    for (let i = 0; i < array.length - 1; i++) {
        k = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[k])
                k = j;
        }
        temp = array[i];
        array[i] = array[k];
        array[k] = temp;
        bars[i].style.backgroundColor = "lightgreen";
        bars[k].style.backgroundColor = "lightgreen";
        await sleep(speedFactor);

        bars[i].style.height = array[i] * heightFactor + "px";
        bars[k].style.height = array[k] * heightFactor + "px";

        bars[i].style.backgroundColor = "aqua";
        bars[k].style.backgroundColor = "aqua";
    }
    slider.disabled = false;
    algo.disabled = false;
    sortBtn.disabled = false;
}

async function insertionSort(array) {
    slider.disabled = true;
    algo.disabled = true;
    sortBtn.disabled = true;
    let bars = document.getElementsByClassName("bar");
    let i, temp, j;

    for (i = 1; i < array.length; i++) {
        temp = array[i];
        j = i - 1;
        bars[i].style.backgroundColor = 'lightgreen';
        await sleep(speedFactor);

        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            bars[j + 1].style.height = array[j + 1] * heightFactor + 'px';
            bars[j + 1].style.backgroundColor = 'lightgreen';
            await sleep(speedFactor);

            bars[j + 1].style.backgroundColor = "aqua";
            j = j - 1;
        }

        array[j + 1] = temp;
        bars[j + 1].style.height = temp * heightFactor + "px";
        bars[j + 1].style.backgroundColor = "lightgreen";
        await sleep(speedFactor);

        bars[j + 1].style.backgroundColor = "aqua";
    }
    slider.disabled = false;
    algo.disabled = false;
    sortBtn.disabled = false;
}




async function mergeSort(arr, low, high) {
    let bars = document.getElementsByClassName("bar")
    if (low >= high) {
        return;
    }

    let mid = Math.floor((low + high) / 2);
    await mergeSort(arr, low, mid);
    await mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);

    for (let i = low; i < high; i++) {
        bars[i].style.backgroundColor = 'yellow';
    }
    await sleep(speedFactor);
    for (let i = low; i < high; i++) {
        bars[i].style.backgroundColor = 'aqua';
    }
}
async function merge(arr, low, mid, high) {
    let left = low;
    let right = mid + 1;
    let temp = new Array();
    let bars = document.getElementsByClassName('bar')

    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }

    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }

    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }

    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }

    for (let i = low; i <= high; i++) {
        bars[i].style.height = arr[i] * heightFactor + "px";
        bars[i].style.backgroundColor = "lightgreen";
    }

    await sleep(speedFactor);

    for (let i = low; i <= high; i++) {
        bars[i].style.backgroundColor = 'aqua';
    }
}

async function swap(items, leftIndex, rightIndex, bars) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
    bars[leftIndex].style.height = items[leftIndex] * heightFactor + "px";
    bars[leftIndex].style.backgroundColor = "lightgreen";
    bars[rightIndex].style.height = items[rightIndex] * heightFactor + "px";
    bars[rightIndex].style.backgroundColor = "lightgreen";
    await sleep(speedFactor);
}
async function partition(items, left, right) {
    let bars = document.getElementsByClassName("bar");
    let pivotIndex = Math.floor((right + left) / 2);
    var pivot = items[pivotIndex];
    bars[pivotIndex].style.backgroundColor = "red";

    for (let i = 0; i < bars.length; i++) {
        if (i != pivotIndex) {
            bars[i].style.backgroundColor = "aqua";
        }
    }

    (i = left),
        (j = right);
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            await swap(items, i, j, bars);
            i++;
            j--;
        }
    }
    return i;
}

async function quickSort(items, left, right) {
    var index;
    let bars = document.getElementsByClassName("bar");
    if (items.length > 1) {
        index = await partition(items, left, right);
        if (left < index - 1) {
            await quickSort(items, left, index - 1);
        }
        if (index < right) {
            await quickSort(items, index, right);
        }
    }

    for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = "aqua";
    }
    return items;
}
sortBtn.addEventListener('click', () => {
    if (sorted) {
        barsContainer.innerHTML = '';
        unsortedArray = randomizeArray();
        renderBars(unsortedArray);
        sorted = false;
    }

    else {
        switch (algoUsed) {
            case "bub":
                bubbleSort(unsortedArray);
                break;

            case "select":
                selectionSort(unsortedArray);
                break;

            case "insert":
                insertionSort(unsortedArray);
                break;

            case 'merge':
                mergeSort(unsortedArray, 0, unsortedArray.length - 1);
                break;

            case 'quick':
                quickSort(unsortedArray, 0, unsortedArray.length - 1);
                break;

            default:
                bubbleSort(unsortedArray);
                break;
        }

        sorted = true;
    }
})

speed.addEventListener('change', () => {
    speedFactor = speed.value;
})

barsContainer.addEventListener('click', () => {
    barsContainer.innerHTML = '';
    unsortedArray = randomizeArray();
    renderBars(unsortedArray);
})