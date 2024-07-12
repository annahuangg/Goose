<!-- src/GridImages.svelte -->
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
	];
  </script>
  
  <style>
	.grid-container {
	  display: grid;
	  grid-template-columns: repeat(4, 1fr);
	  gap: 10px;
	  margin-top: 20px;
	}
  
	.grid-item {
	  position: relative;
	  overflow: hidden;
	  border-radius: 8px;
	}
  
	.grid-item img {
	  width: 100%;
	  height: 100%;
	  object-fit: cover;
	}
  </style>
  
  <div class="grid-container">
	{#each images as image}
	  <div class="grid-item">
		<img src={image.src} alt={image.alt} />
	  </div>
	{/each}
  </div>
  