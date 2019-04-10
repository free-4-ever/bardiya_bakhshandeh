<template>
  <q-layout view="lhh Lpr lff">
    <!-- <q-layout-header reveal>
      <q-toolbar
        color="bb"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Quasar App
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header> -->

    <q-layout-drawer
      side = "left"
      width="300"
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        dense
        link
        inset-delimiter
        separator
        class=""
        color="white"
      >

        <q-list-header class="text-weight-bolder relative-position">
          <img alt="Quasar logo" src="~assets/me.jpg" class=" fit round-borders absoulte-center">
          <br>
          Bardiya Bakhshandeh
        </q-list-header>
        <q-item-separator />
                 <!-- <router-link :to="{name: 'treasury'}">Go to Foo</router-link> -->

        <q-item dense to="/" >
          <q-item-side icon="home" inverted color="primary" text-color="" />
          <q-item-main label="Home" />
        </q-item>
        <q-item to="about">
          <q-item-side inverted  color="info" letter="BB" />
          <q-item-main label="About" />
          <q-item-side inverted  color="info" stamp="B" />
        </q-item>
        <q-item to="skills">
          <q-item-side icon="code" inverted />
          <q-item-main label="Skills"  />
        </q-item>
        <q-item @click.native="openURL('https://discord.gg/5TDhbDg')">
          <q-item-side icon="school" inverted />
          <q-item-main label="Education" />
        </q-item>
        <q-item to="treasury">
          <q-item-side icon="money" inverted/>
          <q-item-main label="Treasury" />
        </q-item>
        <q-item to="contact">
          <q-item-side icon="mail" inverted/>
          <q-item-main label="Contact" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
/* @import '~variables' */
.text-bb {
  color: #001f3f;
}
.bg-bb {
  background: #001f3f;
}
</style>
