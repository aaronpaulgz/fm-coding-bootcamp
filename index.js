const images = [
  "./assets/images/image-tanya.jpg",
  "./assets/images/image-john.jpg",
];

const presentations = [
  `"I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future."`,
  `"If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer." `,
];

const names = [`Tanya Sinclair `, `John Tarkpor`];

const descriptions = [`UX Engineer`, `Junior Front-end Developer`];

// ##-----------------##
//     DOM Elements
// ##-----------------##

let $presentation = document.getElementById("presentation");
let $presentationName = document.getElementById("presentation--name");
let $presentationDescription = document.getElementById(
  "presentation--description"
);
let $img = document.getElementById("img");
let $leftSelector = document.getElementById("left-selector");
let $rightSelector = document.getElementById("right-selector");

// ##-----------------##
//         Inners
// ##-----------------##

let i = 0;

$presentation.innerText = presentations[i];
$presentationName.innerText = names[i];
$presentationDescription.innerText = descriptions[i];
$img.src = images[i];

if (i === 0) {
  $leftSelector.style.opacity = ".5";
} else {
}

const checkSelector = () => {
  if (i === 0) {
    $leftSelector.style.opacity = ".5";
    $rightSelector.style.opacity = "1";
  } else if (i === 1) {
    $rightSelector.style.opacity = ".5";
    $leftSelector.style.opacity = "1";
  } else {
  }
};

const sum = () => {
  if (i >= presentations.length - 1) {
  } else {
    i += 1;
    $presentation.innerText = presentations[i];
    $presentationName.innerText = names[i];
    $presentationDescription.innerText = descriptions[i];
    $img.src = images[i];
  }
  checkSelector();
};

const minus = () => {
  if (i === 0) {
  } else {
    i -= 1;
    $presentation.innerText = presentations[i];
    $presentationName.innerText = names[i];
    $presentationDescription.innerText = descriptions[i];
    $img.src = images[i];
  }
  checkSelector();
};
