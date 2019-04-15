<template>
  <q-layout view="hhh lpr lff">
    <q-layout-header reveal>
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
          BB
          <!-- <div slot="subtitle">Running on Quasar v{{ $q.version }}</div> -->
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      side = "left"
      v-model="leftDrawerOpen"
      :content-class="[$q.theme === 'mat' ? 'bg-grey-2' : null,'']"
    >
      <q-list
        no-border
        dense
        link
        inset-delimiter
        separator
        class="q-py-none"
        color="white"
      >

        <q-list-header class="text-weight-bolder relative-position bg-bb">
          <img alt="Quasar logo" src="~assets/me.jpg" class="fit q-pa-lg rounded">
          <div id="name-line" class="row justify-center q-subheading text-weight-medium uppercase text-light">
            <span  class="border-primary">Bardiya Bakhshandeh</span>
          </div>
          <div class="row justify-center q-subheading">
            <small class="q-pt-xs"> Developer at Niron</small>
          </div>
          <div class="row justify-center q-mt-sm">
            <q-btn round color="light" text-color="primary" icon="ion-logo-twitter" size="xs" push glossy />
            <q-btn round color="light" text-color="primary" icon="ion-logo-facebook" size="xs" push glossy />
            <q-btn round color="light" text-color="primary" icon="ion-logo-linkedin" size="xs" push glossy />
            <q-btn @click="openURL('https://instagram.com/___free4ever___')" round color="light" text-color="red" icon="ion-logo-instagram" size="xs" push link />
            <q-btn round color="light" text-color="primary" icon="ion-logo-github" size="xs" push glossy />
          </div>
        </q-list-header>
        <q-item-separator />
                 <!-- <router-link :to="{name: 'treasury'}">Go to Foo</router-link> -->

        <q-item to="/" clas="bg-green" >
          <q-item-side icon="home" inverted color="light" text-color="" />
          <q-item-main label="Home" />
        </q-item>
        <q-item to="about" clas="bg-green">
          <q-item-side icon="ion-person" inverted clas="hi"  color="light" letter="BB" />
          <q-item-main label="About" />
          <q-item-side inverted  color="info" stamp="B" />
        </q-item>
        <q-item to="skills" clas="bg-light">
          <q-item-side icon="code" color="primary" inverted />
          <q-item-main label="Skills"  />
        </q-item>
        <q-item to="education"   clas="bg-light">
          <q-item-side icon="school" color="primary" inverted />
          <q-item-main label="Education" />
        </q-item>
        <q-item to="treasury" clas="bg-teal-5">
          <q-item-side icon="ion-logo-usd" color="red" inverted/>
          <q-item-main label="Treasury">
            <!-- <q-tree
              :nodes="simple"
              node-key="label"
            /> -->
          </q-item-main>
        </q-item>
        <q-item clas="bg-light-blue-4">
          <q-item-side icon="history" color="red" inverted/>
          <q-item-main label="Projects" />
        </q-item>
        <q-item  clas="bg-light-blue-4">
          <q-item-side icon="mail" color="red" inverted/>
          <q-item-main label="Excerpts" />
        </q-item>
        <q-item to="contact" clas="bg-light-blue-4">
          <q-item-side icon="mail" color="red" inverted/>
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
      leftDrawerOpen: this.$q.platform.is.desktop,
      width: function () {
        if (!this.leftDrawerOpen) {
          return 100
        } else {
          return 300
        }
      },
      simple: [
        {
          label: 'Satisfied customers',
          children: [
            {
              label: 'Good food',
              children: [
                { label: 'Quality ingredients' },
                { label: 'Good recipe' }
              ]
            },
            {
              label: 'Good service (disabled node)',
              disabled: true,
              children: [
                { label: 'Prompt attention' },
                { label: 'Professional waiter' }
              ]
            },
            {
              label: 'Pleasant surroundings',
              children: [
                { label: 'Happy atmosphere' },
                { label: 'Good table presentation' },
                { label: 'Pleasing decor' }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    openURL
  }
}
</script>

<style lang="stylus">
@import '~variables'

.rounded
  border-radius 100%
  border 3px solid $light

#name-line
  border-bottom 1px solid $light
  border-top 1px solid $light
// .hi
//   background-color $bb
// .text-bb {
//   color: #001f3f;
// }
.bg-bb {
  background: #001f3f;
}
</style>
