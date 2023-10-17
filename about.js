const moveUp = () => {
    scrollTo(0, 0);
}

const moveDown = () => {
    scrollTo(0, 600);
}

let dd = document.getElementById("dropdownMenu");
let bs = document.getElementById("bs");
let ss = document.getElementById("ss");
let is = document.getElementById("is");
let ms = document.getElementById("ms");
let qs = document.getElementById("qs");
let title = document.getElementById("title");
let text = document.getElementById("text");
let img = document.getElementById("img");

bs.addEventListener("click", () => {
    title.innerText = 'Bubble Sort';
    dd.innerText = "Bubble Sort";
    text.innerHTML = "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high. In this article, we will discuss the Bubble sort Algorithm. The working procedure of bubble sort is simplest. This article will be very helpful and interesting to students as they might face bubble sort as a question in their examinations. So, it is important to discuss the topic. Bubble sort works on the repeatedly swapping of adjacent elements until they are not in the intended order.It is called bubble sort because the movement of array elements is just like the movement of air bubbles in the water.Bubbles in water rise up to the surface; similarly, the array elements in bubble sort move to the end in each iteration. Although it is simple to use, it is primarily used as an educational tool because the performance of bubble sort is poor in the real world.It is not suitable for large data sets.The average and worst -case complexity of Bubble sort is O(n2), where n is a number of items."
    img.style.display = "block";
    img.src = "/imgs/BubbleSort.png";
    moveDown();
})

ss.addEventListener("click", () => {
    title.innerText = 'Selection Sort';
    dd.innerText = "Selection Sort";
    text.innerHTML = "Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list. The algorithm repeatedly selects the smallest (or largest) element from the unsorted portion of the list and swaps it with the first element of the unsorted part. This process is repeated for the remaining unsorted portion until the entire list is sorted. In selection sort, the smallest value among the unsorted elements of the array is selected in every pass and inserted to its appropriate position into the array. It is also the simplest algorithm. It is an in-place comparison sorting algorithm. In this algorithm, the array is divided into two parts, first is sorted part, and another one is the unsorted part. Initially, the sorted part of the array is empty, and unsorted part is the given array. Sorted part is placed at the left, while the unsorted part is placed at the right. In selection sort, the first smallest element is selected from the unsorted array and placed at the first position.After that second smallest element is selected and placed in the second position.The process continues until the array is entirely sorted. The average and worst -case complexity of selection sort is O(n2), where n is the number of items.Due to this, it is not suitable for large data sets."
    img.style.display = "block";
    img.src = "/imgs/SelectionSort.png";
    moveDown();
})

is.addEventListener("click", () => {
    title.innerText = 'Insertion Sort';
    dd.innerText = "Insertion Sort";
    text.innerHTML = "Insertion sort works similar to the sorting of playing cards in hands. It is assumed that the first card is already sorted in the card game, and then we select an unsorted card. If the selected unsorted card is greater than the first card, it will be placed at the right side; otherwise, it will be placed at the left side. Similarly, all unsorted cards are taken and put in their exact place. The same approach is applied in insertion sort.The idea behind the insertion sort is that first take one element, iterate it through the sorted array.Although it is simple to use, it is not appropriate for large data sets as the time complexity of insertion sort in the average case and worst case is O(n2), where n is the number of items.Insertion sort is less efficient than the other sorting algorithms like heap sort, quick sort, merge sort, etc."
    img.style.display = "block";
    img.src = "/imgs/InsertionSort.png";
    moveDown();
})

ms.addEventListener("click", () => {
    title.innerText = 'Merge Sort';
    dd.innerText = "Merge Sort";
    text.innerHTML = "In simple terms, we can say that the process of merge sort is to divide the array into two halves, sort each half, and then merge the sorted halves back together. This process is repeated until the entire array is sorted. Merge sort is similar to the quick sort algorithm as it uses the divide and conquer approach to sort the elements. It is one of the most popular and efficient sorting algorithm. It divides the given list into two equal halves, calls itself for the two halves and then merges the two sorted halves. We have to define the merge() function to perform the merging. The sub - lists are divided again and again into halves until the list cannot be divided further.Then we combine the pair of one element lists into two - element lists, sorting them in the process.The sorted two - element pairs is merged into the four - element lists, and so on until we get the sorted list."
    img.style.display = "block";
    img.src = "/imgs/MergeSort.png";
    moveDown();
})

qs.addEventListener("click", () => {
    title.innerText = 'Quick Sort';
    dd.innerText = "Quick Sort";
    text.innerHTML = "QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array. The key process in quickSort is a partition(). The target of partitions is to place the pivot (any element can be chosen to be a pivot) at its correct position in the sorted array and put all smaller elements to the left of the pivot, and all greater elements to the right of the pivot. Partition is done recursively on each side of the pivot after the pivot is placed in its correct position and this finally sorts the array. Sorting is a way of arranging items in a systematic manner. Quicksort is the widely used sorting algorithm that makes n log n comparisons in average case for sorting an array of n elements. It is a faster and highly efficient sorting algorithm. This algorithm follows the divide and conquer approach. Divide and conquer is a technique of breaking down the algorithms into subproblems, then solving the subproblems, and combining the results back together to solve the original problem.";
    img.style.display = "block";
    img.src = "/imgs/QuickSort.png";
    moveDown();
})