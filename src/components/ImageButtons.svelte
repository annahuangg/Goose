<script>
  import { stories, wrongOrderStory } from '../lib/ImageClick.js';
  import GridImages from './GridImages.svelte';

  const images = [
    { src: '/images/basketball.jpg', alt: 'Basketball', clicked: false },
    { src: '/images/panda.jpg', alt: 'Panda', clicked: false },
    { src: '/images/singapore.jpg', alt: 'Singapore', clicked: false },
    { src: '/images/goose.jpg', alt: 'Goose', clicked: false }
  ];

  let clickedOrder = [];
  let currentStory = null;
  let showRetry = false;
  let showSurprise = false;
  let showZigzagPanda = false;

  function handleClick(image) {
    if (clickedOrder.length < 4) {
      clickedOrder.push(image.alt.toLowerCase());
      image.clicked = true;

      if (clickedOrder.length === 4) {
        checkOrder();
      }
    }
  }

  function checkOrder() {
    const clickedOrderString = clickedOrder.join(',');
    if (stories.hasOwnProperty(clickedOrderString)) {
      currentStory = stories[clickedOrderString];
      showSurprise = clickedOrderString === 'goose,panda,basketball,singapore';
      showRetry = !showSurprise;
    } else {
      currentStory = wrongOrderStory;
      showRetry = true;
      showSurprise = false;
    }
  }

  function retry() {
    clickedOrder = [];
    currentStory = null;
    showRetry = false;
    showSurprise = false;
    showZigzagPanda = false;
    images.forEach(image => image.clicked = false);
  }

  function surprise() {
    showZigzagPanda = true;
  }
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .image-button {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    overflow: hidden;
    display: inline-block;
    margin: 10px;
    cursor: pointer;
    transition: transform 0.2s;
    filter: grayscale(0%);
    position: relative;
  }

  .image-button.clicked {
    filter: grayscale(100%);
  }

  .image-button img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-button:hover {
    transform: scale(1.1);
  }

  .story-container {
    margin-top: 20px;
    text-align: center;
  }

  .retry-button,
  .surprise-button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .retry-button:hover,
  .surprise-button:hover {
    background-color: #0056b3;
  }

  @keyframes zigzag {
    0% {
      transform: translateX(0) translateY(0);
    }
    25% {
      transform: translateX(100px) translateY(50px);
    }
    50% {
      transform: translateX(0) translateY(100px);
    }
    75% {
      transform: translateX(100px) translateY(150px);
    }
    100% {
      transform: translateX(0) translateY(200px);
    }
  }

  .zigzag-panda {
    width: 200px;
    height: 200px;
    position: absolute;
    animation: zigzag 3s ease-in-out infinite;
  }
</style>

<div class="container">
  {#if !showZigzagPanda}
    <div>
      {#each images as image}
        <div class="image-button {image.clicked ? 'clicked' : ''}" on:click={() => handleClick(image)}>
          <img src={image.src} alt={image.alt} />
          {#if image.clicked}
            <span style="position: absolute; top: 10px; left: 10px; color: white; font-size: 24px;">{clickedOrder.indexOf(image.alt.toLowerCase()) + 1}</span>
          {/if}
        </div>
      {/each}
    </div>

    {#if currentStory}
      <div class="story-container">
        <p>{currentStory}</p>
        {#if showRetry}
          <button class="retry-button" on:click={retry}>Retry</button>
        {/if}
        {#if showSurprise}
          <button class="surprise-button" on:click={surprise}>Surprise</button>
        {/if}
      </div>
    {/if}
  {:else}
    <div>
      <GridImages />
    </div>
  {/if}
</div>

<!-- src/App.svelte -->
<!-- <script>
  import { stories, wrongOrderStory } from '../lib/ImageClick.js';
  import GridImages from './GridImages.svelte'; // Import the GridImages component

  const images = [
    { src: '/images/goose.jpg', alt: 'Goose', clicked: false },
    { src: '/images/panda.jpg', alt: 'Panda', clicked: false },
    { src: '/images/basketball.jpg', alt: 'Basketball', clicked: false },
    { src: '/images/singapore.jpg', alt: 'Singapore', clicked: false },
  ];

  let clickedOrder = [];
  let currentStory = null;
  let showRetry = false;
  let showSurprise = false;
  let showZigzagPanda = false;

  function handleClick(image) {
    if (clickedOrder.length < 4) {
      clickedOrder.push(image.alt.toLowerCase());
      image.clicked = true;

      if (clickedOrder.length === 4) {
        checkOrder();
      }
    }
  }

  function checkOrder() {
    const clickedOrderString = clickedOrder.join(',');
    if (stories.hasOwnProperty(clickedOrderString)) {
      currentStory = stories[clickedOrderString];
      showSurprise = clickedOrderString === 'goose,panda,basketball,singapore';
      showRetry = !showSurprise;
    } else {
      currentStory = wrongOrderStory;
      showRetry = true;
      showSurprise = false;
    }
  }

  function retry() {
    clickedOrder = [];
    currentStory = null;
    showRetry = false;
    showSurprise = false;
    showZigzagPanda = false;
    images.forEach(image => image.clicked = false);
  }

  function surprise() {
    showSurprise = true;
  }
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .image-button {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    overflow: hidden;
    display: inline-block;
    margin: 10px;
    cursor: pointer;
    transition: transform 0.2s;
    filter: grayscale(0%);
    position: relative;
  }

  .image-button.clicked {
    filter: grayscale(100%);
  }

  .image-button img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-button:hover {
    transform: scale(1.1);
  }

  .story-container {
    margin-top: 20px;
    text-align: center;
  }

  .retry-button,
  .surprise-button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .retry-button:hover,
  .surprise-button:hover {
    background-color: #0056b3;
  }
</style>

<div class="container">
  {#if !showSurprise}
    <div>
      {#each images as image}
        <div class="image-button {image.clicked ? 'clicked' : ''}" on:click={() => handleClick(image)}>
          <img src={image.src} alt={image.alt} />
          {#if image.clicked}
            <span style="position: absolute; top: 10px; left: 10px; color: white; font-size: 24px;">{clickedOrder.indexOf(image.alt.toLowerCase()) + 1}</span>
          {/if}
        </div>
      {/each}
    </div>

    {#if currentStory}
      <div class="story-container">
        <p>{currentStory}</p>
        {#if showRetry}
          <button class="retry-button" on:click={retry}>Retry</button>
        {/if}
        {#if !showSurprise}
          <button class="surprise-button" on:click={surprise}>Surprise</button>
        {/if}
      </div>
    {/if}
  {:else}
    <GridImages />
  {/if}
</div> -->
