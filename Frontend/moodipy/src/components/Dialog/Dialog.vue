<template>
  <div v-show="show" class="overlay">
    <div class="dialog">
      <div class="dialog_content">
        <h2 class="dialog_title" v-text="title"></h2>
        <p class="dialog_description" v-text="description"></p>
      </div>
      <div class="dialog_footer">
        <button @click="confirm" class="dialog_confirm">Got it!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['show', 'title', 'description', 'confirm']
}
</script>

<style scoped>
button {
  font-family: 'Roboto';
  font-size: 120%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

h2,
p {
  margin: 0;
}

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

button {
  cursor: pointer;
}

button {
  padding: 0;
  line-height: inherit;
  color: inherit;
}

.overlay {
  --tw-bg-opacity: 1;
  background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
  --tw-bg-opacity: 0.5;
  height: 100%;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  z-index: 10;
}

.dialog {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  border-radius: 0.75rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2.5rem;
  max-width: 100%;
  width: 24rem;
}

.dialog_content {
  padding-left: 1rem;
  padding-right: 0.75rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.dialog_title {
  font-weight: bolder;
  font-family: "Roboto";
  font-size: 1.30rem;
  line-height: 1.75rem;
  margin-bottom: 1.5rem;
  --tw-text-opacity: 1;
  color: rgba(17, 24, 39, var(--tw-text-opacity));
}

.dialog_description {
  font-size: 1rem;
  font-family: "Roboto";
  font-weight: bold;
  line-height: 1.25rem;
  --tw-text-opacity: 1;
  color: rgba(107, 114, 128, var(--tw-text-opacity));
}

.dialog_footer {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.dialog_confirm {
  --tw-bg-opacity: 1;
  background-color: rgba(110, 65, 226, var(--tw-bg-opacity));
  border-radius: 0.75rem;
  font-weight: 500;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
}

.dialog_confirm:focus{
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.dialog_confirm{
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.dialog_confirm:focus{
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(144, 109, 233, var(--tw-ring-opacity));
  --tw-ring-opacity: 0.5;
}

.dialog_confirm{
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.dialog_confirm:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(144, 109, 233, var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(225, 255, 255, var(--tw-text-opacity));
}
</style>