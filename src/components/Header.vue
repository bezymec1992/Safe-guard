<template>
  <header class="header d-flex flex-row align-center justify-between">
    <div class="logo">
      <img src="@/assets/icons/logo.png" alt="logo" />
    </div>
    <nav class="nav">
      <ul class="d-flex flex-row align-center">
        <li><router-link to="/">About Us</router-link></li>
        <li><router-link to="/">What We Do</router-link></li>
        <li><router-link to="/">Contact Us</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

