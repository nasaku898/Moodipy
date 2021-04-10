<template>
<input id="input-box">
</template>

<script>
export default {
    name: "Input"
}
</script>

<style>
#input-box {
    background: #FFFFFF;
    /* Shadow */
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08);
    border-radius: 4px;

    /* input */
    width: 482px;
    height: 56px;

    /* text inside the input  */

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: center;

    /* Colors */
    color: black;
    padding-left: 10px;
}
</style>
