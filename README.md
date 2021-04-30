# Sorting Visualizer

#### Video Demo:  https://youtu.be/itTXCcYUSoo
#### Description: My project is a sorting algorithm visualizer. It animate bars representing values to show how each implemented algorithm works.
#### The implemented algorithms are Bubble Sort, Selection Sort, Insertion Sort, and In-place Merge Sort, which does not use an auxiliary array and it's easier to animate due to its nature.
#### There are a few methods to generate the values array, they are:

 - Random Array, which generates many random values between 1 and the size of the array.
 - Full Range Array, which generates unique random values from 1 to the size of the array.
 - Inverted Array, which generates values sorted in descending order, the worst-case scenario for many algorithms.

#### The user can choose the size of the array using an input of type range, the minimum size is 4 and the maximum array size is 250.
#### The user can also choose the speed for the animation and has an option called "Slow Mode" that will slow down the animation, even more, making it possible for the user to see clearly what is being compared and swapped during the execution.
#### This project was made primarily using JavaScript and the HTML5 Canvas. The JavaScript manages the user inputs and deals with printing all the bars on the canvas on each update (which includes browser window resize operations).
#### I also made use of some Bootstrap CSS components for the navbar used to host all the options on the page. On the navbar, I used an unordered list and list elements for each option and wish some custom spacing classes.
#### All the processing power used for the sorting method and the canvas drawing is used locally, provided by the user computer for the JavaScript application.
#### For the drawing and the animation I had to use some way to make the application stop for a while (the time it sleeps is calculated base on what the user set on the speed input bar) and the way I implemented this was to simply set a Promise with a Timeout, just like this, defined in the /utils/sleep.js:

```
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
```

#### There are a few different colors for the bars:

 - Darker Gray - it's the default color for the bars.
 - Light Gray - indicates that the values are being compared.
 - Red - means that the values have been swapped with one another.
 - Green - means that the bar is in the right position (have been ordered).

#### File resposabilities:

 - /src/algorithms/arrayGeneration/FullRangeGeneration.js - this file contains the class for generating values using the full range function defined above.
 - /src/algorithms/arrayGeneration/InvertedGeneration.js - this file contains the class for generating values in decreasing order, as defined above.
 - /src/algorithms/arrayGeneration/RandomGeneration.js - this file contains the class for generating random values, as defined above.
 - /src/algorithms/sortAlgorithms/BubbleSort.js - Defines the class for Bubble Sorting.
 - /src/algorithms/sortAlgorithms/InsertionSort.js - Defines the class for Insertion Sorting.
 - /src/algorithms/sortAlgorithms/SelectionSort.js - Defines the class for Selection Sorting.
 - /src/algorithms/sortAlgorithms/MergeSort.js - Defines the class for in-place Merge Sorting.
 - /src/renders/PageRender.js - Take care for the window/canvas resizing calculations.
 - /src/renders/PageRender.js - Take care of the bar size, canvas offset, bar height, bar/canvas drawing.
 - /src/utils/Compare.js - Class for the comparing action on each sorting method, it calls drawing methods from CanvasRender.
 - /src/utils/Swap.js - Class for the swapping action on each sorting method, it calls drawing methods from CanvasRender.
 - /src/utils/Sleep.js - Take cares of the sleep function.

#### GitHub Repository: https://github.com/igortorati/cs50_final_project
#### GitHub Project Page: https://igortorati.github.io/cs50_final_project/
