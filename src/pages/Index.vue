<template>
  <q-page padding class="">
    <div class="row flex-center">

    </div>
    <div class="row">
      <div class="col flex items-center flex flex-center">
        <h4 class="justify-center">I THINK, hence I DEVELOP!</h4>
        <q-btn round color="primar" text-color="primary" icon="ion-logo-twitter" size="md" push glossy />
        <q-btn round color="primary" icon="ion-logo-facebook" size="sm" push glossy />
        <q-btn round color="primary" icon="ion-logo-linkedin" size="sm" push glossy />
        <q-btn @click="openURL('https://discord.gg/5TDhbDg')" round color="primar" text-color="red" icon="ion-logo-instagram" size="md" push link  />
      </div>
      <div class="col">
        <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
      </div>
    </div>
    <!-- <div class="row">
      <h4>Welcome!</h4>
    </div> -->
    <!-- <h2>Welcome to my website!</h2> <br> -->
    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg"> -->
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
