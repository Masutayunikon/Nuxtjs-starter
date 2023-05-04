<template>
  <div class="screen">
    <div class="screen-image" :style="{backgroundImage: `url(${image})`}" alt="..."/>
    <div class="screen-overlay">

    </div>
  </div>
</template>

<script setup lang="ts">

interface Props {
  image: string
}

defineProps<Props>();

</script>

<style scoped lang="scss">

.screen {
  overflow: hidden;
  position: relative;
  .screen-image {
    width: 100%;
    height: 100%;
    background-size: 300%;
    background-position: center;
    background-repeat: no-repeat;
    animation: pan-image 15s linear infinite;
    //filter: sepia(100%) hue-rotate(180deg);
  }
  .screen-overlay {
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      rgb(0,0, 255, 0.15),
      rgb(0,0, 255, 0.15) 3px,
      transparent 3px,
      transparent 9px
    );
    background-size: 100% 9px;
    animation: pan-overlay 22s infinite linear;
    position: absolute;
    top: 0;
    left: 0;

  }

  @keyframes pan-overlay {
    from {
      background-position: 0% 100%;
    }

    to {
      background-position: 0% 0%;
    }
  }

  @keyframes pan-image {
    0% {
      background-position: 36% 42%;
      background-size: 200%;
    }

    20% {
      background-position: 30% 35%;
      background-size: 200%;
    }

    20.0001% { /* -- View 2 -- */
      background-position: 60% 85%;
      background-size: 500%;
    }

    40% {
      background-position: 49% 81%;
      background-size: 500%;
    }

    40.0001% { /* -- View 3 -- */
      background-position: 80% 42%;
      background-size: 300%;
    }

    60% {
      background-position: 84% 33%;
      background-size: 300%;
    }

    60.0001% { /* -- View 4 -- */
      background-position: 0% 0%;
      background-size: 300%;
    }

    80% {
      background-position: 15% 4%;
      background-size: 300%;
    }

    80.0001% { /* -- View 5 -- */
      background-position: 80% 10%;
      background-size: 300%;
    }

    100% {
      background-position: 72% 14%;
      background-size: 300%;
    }
  }
}


</style>