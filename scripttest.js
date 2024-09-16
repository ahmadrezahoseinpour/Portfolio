
const imageElement4 = document.getElementById("blur-image");

setTimeout(function() {
  imageElement4.classList.add("resize");},950); //  milliseconds)


const imageElement1 = document.getElementById("blurclass");
  
  setTimeout(function() {
    imageElement1.classList.add("resize");},950); // 


const firstSection = document.querySelector('.firstSection');
setTimeout(function() {
  firstSection.classList.add("resize"); // Hide the image with animation
},950); // Adjust delay for showing the image (in milliseconds)


//const imageElement2 = document.getElementById("baseSection");
//
//setTimeout(function() {
//  imageElement2.classList.add("show"); // Hide the image with animation
//}, 1000); // Adjust delay for showing the image (in milliseconds)

const imageElement3 = document.getElementById("header");

setTimeout(function() {
  imageElement3.classList.add("show"); // Hide the image with animation
}, 1500); // Adjust delay for showing the image (in milliseconds)


//------------------BUTTON SCROLL-------------------------------

//const scrollLink = document.getElementById("scrollToTargetLink");
//
//scrollLink.addEventListener("click", function(event) {
//  event.preventDefault(); // Prevent default link behavior
//
//  // Get the target element (div)
//  const targetDiv = document.getElementById("descriptionContent");
//
//  // Get the offset top position of the target element
//  const targetTop = targetDiv.offsetTop;
//
//  // Smoothly scroll to the target position
//  window.scrollTo({
//    top: targetTop,
//    behavior: "smooth"
//  });
//});


//.............................PHOTOS.........................................................

const photoContainer = document.querySelector('.photos-container');
const photo = photoContainer.querySelectorAll('img');
const photocircles = photoContainer.querySelectorAll('.circle');
let currentImageIndex = 0;
let isAutoplayEnabled = true; // Flag to control autoplay

function showImage(index) {
  photo[currentImageIndex].classList.remove('active');
  photo[index].classList.add('active');
  photocircles[currentImageIndex].classList.remove('active');
  photocircles[index].classList.add('active');
  currentImageIndex = index;
}

photoContainer.addEventListener('scroll', (event) => {
  const scrollPosition = event.target.scrollLeft;
  const imageWidth = photoContainer.clientWidth;
  const newIndex = Math.round(scrollPosition / imageWidth);

  // Ensure new index stays within image boundaries
  if (newIndex >= 0 && newIndex < photo.length) {
    showImage(newIndex);
  }
});

photocircles.forEach(circle => {
  circle.addEventListener('click', (event) => {
    const newIndex = parseInt(event.target.dataset.index);
    showImage(newIndex);
    stopAutoplay(); // Optional: Stop autoplay on circle click
  });
});

// Optional automatic image change
let intervalId = null;

function startAutoplay() {
  if (!isAutoplayEnabled) return;
  intervalId = setInterval(() => {
    showImage((currentImageIndex + 1) % photo.length);
  }, 3000); // Change image every 3 seconds
}

function stopAutoplay() {
  clearInterval(intervalId);
  intervalId = null;
}

// Start autoplay initially
startAutoplay();

// Functionality to toggle autoplay (optional)
// Add event listener (e.g., click) on a separate element to control autoplay

// Example: Disable autoplay on scroll event (optional)
photoContainer.addEventListener('scroll', () => {
  stopAutoplay();
});

// Example: Re-enable autoplay on mouse

photoContainer.addEventListener('scroll', () => {
  stopAutoplayPhotos();
});

// Example: Re-enable autoplay on mouse


//.............................VIDEOS.........................................................

const videosContainer = document.querySelector('.videos-container');
const videos = videosContainer.querySelectorAll('img');
const videosCircles = videosContainer.querySelectorAll('.videoscircle');
let videoscurrentImageIndex = 0;
let videosisAutoplayEnabled = true; // Flag to control autoplay

function showImagevideos(index) {
  videos[videoscurrentImageIndex].classList.remove('active');
  videos[index].classList.add('active');
  videosCircles[videoscurrentImageIndex].classList.remove('active');
  videosCircles[index].classList.add('active');
  videoscurrentImageIndex = index;
}

videosContainer.addEventListener('scroll', (event) => {
  const scrollPosition = event.target.scrollLeft;
  const imageWidth = videosContainer.clientWidth;
  const newIndex = Math.round(scrollPosition / imageWidth);

  // Ensure new index stays within image boundaries
  if (newIndex >= 0 && newIndex < videos.length) {
    showImagevideos(newIndex);
  }
});

videosCircles.forEach(circle => {
  circle.addEventListener('click', (event) => {
    const newIndex = parseInt(event.target.dataset.index);
    showImagevideos(newIndex);
    videosstopAutoplay(); // Optional: Stop autoplay on circle click
  });
});

// Optional automatic image change
let videosintervalId = null;

function videosstartAutoplay() {
  if (!videosisAutoplayEnabled) return;
  videosintervalId = setInterval(() => {
    showImagevideos((videoscurrentImageIndex + 1) % videos.length);
  }, 3000); // Change image every 3 seconds
}

function videosstopAutoplay() {
  clearInterval(videosintervalId);
  videosintervalId = null;
}

// Start autoplay initially
videosstartAutoplay();

// Functionality to toggle autoplay (optional)
// Add event listener (e.g., click) on a separate element to control autoplay

// Example: Disable autoplay on scroll event (optional)
videosContainer.addEventListener('scroll', () => {
  videosstopAutoplay();
});

// Example: Re-enable autoplay on mouse


//.............................WEBDESIGNS.......................................................

const webdesignsContainer = document.querySelector('.webdesigns-container');
const webdesigns = webdesignsContainer.querySelectorAll('img');
const webdesignscircles = webdesignsContainer.querySelectorAll('.circle');
let webdesignscurrentImageIndex = 0;
let webdesignsisAutoplayEnabled = true; // Flag to control autoplay

function webdesignsshowImage(index) {
  webdesigns[webdesignscurrentImageIndex].classList.remove('active');
  webdesigns[index].classList.add('active');
  webdesignscircles[webdesignscurrentImageIndex].classList.remove('active');
  webdesignscircles[index].classList.add('active');
  webdesignscurrentImageIndex = index;
}

webdesignsContainer.addEventListener('scroll', (event) => {
  const scrollPosition = event.target.scrollLeft;
  const imageWidth = webdesignsContainer.clientWidth;
  const newIndex = Math.round(scrollPosition / imageWidth);

  // Ensure new index stays within image boundaries
  if (newIndex >= 0 && newIndex < webdesigns.length) {
    webdesignsshowImage(newIndex);
  }
});

webdesignscircles.forEach(circle => {
  circle.addEventListener('click', (event) => {
    const newIndex = parseInt(event.target.dataset.index);
    webdesignsshowImage(newIndex);
    webdesignsstopAutoplay(); // Optional: Stop autoplay on circle click
  });
});

// Optional automatic image change
let webdesignsintervalId = null;

function webdesignsstartAutoplay() {
  if (!webdesignsisAutoplayEnabled) return;
  webdesignsintervalId = setInterval(() => {
    webdesignsshowImage((webdesignscurrentImageIndex + 1) % webdesigns.length);
  }, 3000); // Change image every 3 seconds
}

function webdesignsstopAutoplay() {
  clearInterval(webdesignsintervalId);
  webdesignsintervalId = null;
}

// Start autoplay initially
webdesignsstartAutoplay();

// Functionality to toggle autoplay (optional)
// Add event listener (e.g., click) on a separate element to control autoplay

// Example: Disable autoplay on scroll event (optional)
webdesignsContainer.addEventListener('scroll', () => {
  webdesignsstopAutoplay();
});

// Example: Re-enable autoplay on mouse


//.............................GRAPHICS.........................................................

const graphicsContainer = document.querySelector('.graphics-container');
const graphics = graphicsContainer.querySelectorAll('img');
const graphicscircles = graphicsContainer.querySelectorAll('.circle');
let graphicscurrentImageIndex = 0;
let graphicsisAutoplayEnabled = true; // Flag to control autoplay

function graphicsshowImage(index) {
  graphics[graphicscurrentImageIndex].classList.remove('active');
  graphics[index].classList.add('active');
  graphicscircles[graphicscurrentImageIndex].classList.remove('active');
  graphicscircles[index].classList.add('active');
  graphicscurrentImageIndex = index;
}

graphicsContainer.addEventListener('scroll', (event) => {
  const scrollPosition = event.target.scrollLeft;
  const imageWidth = graphicsContainer.clientWidth;
  const newIndex = Math.round(scrollPosition / imageWidth);

  // Ensure new index stays within image boundaries
  if (newIndex >= 0 && newIndex < graphics.length) {
    graphicsshowImage(newIndex);
  }
});

graphicscircles.forEach(circle => {
  circle.addEventListener('click', (event) => {
    const newIndex = parseInt(event.target.dataset.index);
    graphicsshowImage(newIndex);
    graphicsstopAutoplay(); // Optional: Stop autoplay on circle click
  });
});

// Optional automatic image change
let graphicsintervalId = null;

function graphicsstartAutoplay() {
  if (!graphicsisAutoplayEnabled) return;
  graphicsintervalId = setInterval(() => {
    graphicsshowImage((graphicscurrentImageIndex + 1) % graphics.length);
  }, 3000); // Change image every 3 seconds
}

function graphicsstopAutoplay() {
  clearInterval(graphicsintervalId);
  graphicsintervalId = null;
}

// Start autoplay initially
graphicsstartAutoplay();

// Functionality to toggle autoplay (optional)
// Add event listener (e.g., click) on a separate element to control autoplay

// Example: Disable autoplay on scroll event (optional)
graphicsContainer.addEventListener('scroll', () => {
  graphicsstopAutoplay();
});

window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};
// Example: Re-enable autoplay on mouse


// ..................................................SCROLL.........................................................................................

//


//
//
//const sections = document.querySelectorAll("resume"); // Select all divs with IDs starting with "section"
//console.log('event');
//window.addEventListener("scroll", (event) => {
//  console.log('event');
//  // Reduce the scroll amount for a smoother experience
//  event.deltaY *= 0.2; // Adjust the multiplier for desired scroll speed
//
//  // Update scroll position based on wheel event
//  window.scrollBy({
//    top: event.deltaY,
//    behavior: "smooth" // Enable smooth scrolling
//  });
//  console.log('event');
//});
//console.log('event');
//// Optionally, set initial scroll position to the first section
//window.scrollTo({ top: 0, behavior: "smooth" });
//
//