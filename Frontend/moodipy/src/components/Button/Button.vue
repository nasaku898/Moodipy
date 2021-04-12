<template>
<button id="my-btn" :style="{background: background, color: color}">{{ text }}</button>
</template>

<script>
export default {
    name: "Button",
    props: {
        text: String,
        background: String,
        color: String
    }
}
</script>

<style scoped>
#my-btn {

    /* button positioning and style */

    display: inline-block;
    padding: 10px 20px;
    align-items: center;
    border: 2px solid #6E41E2;

    box-shadow: 3px 3px rgba(0, 0, 0, 0.1);

    box-sizing: border-box;
    cursor: pointer;

    /* text */
    border-radius: 4px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    margin-right: 20px;
    text-align: center;

}

button:active {
    transform: translateY(2px);
}
</style>
