<script>
	const images = [
	  { src: '/images/img1.jpg', alt: 'Image 1' },
	  { src: '/images/img2.jpg', alt: 'Image 2' },
	  { src: '/images/img3.jpg', alt: 'Image 3' },
	  { src: '/images/img4.jpg', alt: 'Image 4' },
	  { src: '/images/img5.jpg', alt: 'Image 5' },
	  { src: '/images/img6.jpg', alt: 'Image 6' },
	  { src: '/images/img7.jpg', alt: 'Image 7' },
	  { src: '/images/img8.jpg', alt: 'Image 8' },
	  { src: '/images/img9.jpg', alt: 'Image 9' },
	  { src: '/images/img10.jpg', alt: 'Image 10' },
	  { src: '/images/img11.jpg', alt: 'Image 11' },
	  { src: '/images/img12.jpg', alt: 'Image 12' },
	  { src: '/images/img13.jpg', alt: 'Image 13' },
	  { src: '/images/img14.jpg', alt: 'Image 14' },
	  { src: '/images/img15.jpg', alt: 'Image 15' },
	  { src: '/images/img16.jpg', alt: 'Image 16' },
	  { src: '/images/img17.png', alt: 'Image 17' },
	  { src: '/images/img18.jpg', alt: 'Image 18' }
	];
</script>

<style>
	.grid-container {
	  display: grid;
	  grid-template-columns: repeat(4, 1fr); /* 4 columns */
	  gap: 1rem; /* Space between images */
	  padding: 1rem; /* Add padding to prevent images from touching edges */
	  box-sizing: border-box; /* Include padding and border in element's total width and height */
	  height: 100vh; /* Full viewport height */
	  max-width: 100vw; /* Full viewport width */
	  /*overflow-y: auto;  Allow vertical scrolling if content overflows */
	  overflow-x: hidden; /* Prevent horizontal scrolling */
	}

	.grid-item {
	  position: relative;
	  overflow: hidden;
	  border-radius: 8px;
	  width: 100%; /* Full width of the grid column */
	  height: calc((100vh - 5rem) / 4); /* Distribute available height evenly among 4 rows */
	  transition: transform 0.3s ease; /* Smooth transition for hover effect */
	}

	.grid-item img {
	  width: 100%;
	  height: 100%;
	  object-fit: cover; /* Ensure images cover the grid item */
	}

	.grid-item:hover {
	  transform: scale(1.05); /* Slightly scale up the image on hover */
	}
</style>

<div class="grid-container">
	{#each images as image}
	  <div class="grid-item">
		<img src={image.src} alt={image.alt} />
	  </div>
	{/each}
</div>
