<template>
    <div>
      <div class="wrapper bg-black">
        <div class="typing-demo text-white">
          FRONTEND DEVELOPER HYEGYEONG LEE.
        </div>
        <div class="typing-demo-2 text-white -mt-[30rem]">
          FRONTEND DEVELOPER HYEGYEONG LEE.
        </div>
      </div>
  
      <div class="arrow" @click="scrollToQuestion">
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <div ref="questionSection">
        ?????????
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const questionSection = ref(null);
  
  const scrollToQuestion = () => {
    questionSection.value.scrollIntoView({ behavior: 'smooth' });
  };
  </script>
<style scoped>

.wrapper {
  height: 100vh;
  /*This part is important for centering*/
  display: grid;
  place-items: center;
}

.typing-demo {
  width: 33ch;
  animation: typing 2s steps(33), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 3em;
}

.typing-demo-2 {
  width: 33ch;
  animation: typing 2s steps(33), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 3em;
}

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}

.arrow {
    position: absolute;
    bottom: 7rem;
    left: 50%;
    transform: translate(-50%, -50%);
    /* Remove the rotation here */
    cursor: pointer;
}

.arrow span {
    display: block;
    width: 1.5vw;
    height: 1.5vw;
    border-bottom: 5px solid white;
    border-right: 5px solid white;
    transform: rotate(45deg); /* This rotation is now correct for downward pointing */
    margin: -10px;
    animation: animate 2s infinite;
}

.arrow span:nth-child(2) {
    animation-delay: -0.2s;
}

.arrow span:nth-child(3) {
    animation-delay: -0.4s;
}

@keyframes animate {
    0% {
        opacity: 0;
        transform: rotate(45deg) translate(-20px, -20px);
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: rotate(45deg) translate(20px, 20px);
    }
}
</style>