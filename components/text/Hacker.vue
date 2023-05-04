<template>
  <span :style="{color: color}" ref="textRef">
    {{text}}
  </span>
</template>

<script setup lang="ts">

interface Props {
  color: string,
  text: string,
}

const props = defineProps<Props>();

const textRef : Ref = ref(null);

// on hover
onMounted(() => {

  const element = textRef.value as HTMLElement;
  element.addEventListener('mouseover', () => {
    let iterations = 0;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let interval = setInterval(() => {
      textRef.value.innerText =  textRef.value.innerText.split("")
          .map((letter: any, index: number) => {
            if (index < iterations) {
              return props.text[index];
            }
            let choice = letters[Math.floor(Math.random() * 26)];

            // if props.text[index] is a space, return a space
            if (props.text[index] === " ") {
              return " ";
            }

            // if props.text[index] is minuscule, return choice.toLowerCase() else return choice
            if (props.text[index] === props.text[index].toLowerCase()) {
              return choice.toLowerCase();
            }

            return choice;
          })
          .join("");

      if (iterations > props.text.length) clearInterval(interval)

      iterations += 1/3;

    }, 30);
  });

});


</script>

<style scoped lang="scss">

</style>