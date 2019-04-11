<template>
  <q-page padding>
    <!-- content -->
         <!-- <h4>You are in the Treasury!</h4> -->
    <div class="row flex-center" flex-center>
      <q-list highlight>
      <q-list-header>Recent chats</q-list-header>
      <q-item>
        <q-item-side>
          <q-item-tile avatar>
            <img src="statics/boy-avatar.png">
          </q-item-tile>
        </q-item-side>
        <q-item-main label="John Doe" />
        <q-item-side right>
          <q-item-tile icon="chat_bubble" color="green" />
        </q-item-side>
      </q-item>
      <q-item>
        <q-item-side avatar="statics/linux-avatar.png" />
        <q-item-main label="Jim Doe" />
        <q-item-side right icon="chat_bubble" />
      </q-item>
      <q-item-separator />
      <q-list-header>Previous chats</q-list-header>
      <q-item>
        <q-item-side avatar="statics/guy-avatar.png" />
        <q-item-main label="Jack Doe" />
      </q-item>
    </q-list>
      <!-- <blockquote class="q-my-sm">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <small>Someone famous for <cite title="Quasar Framework">Quasar Framework</cite></small>
      </blockquote>
      <blockquote>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <small>Someone famous for <cite title="Quasar Framework">Quasar Framework</cite></small>
      </blockquote> -->
    </div>

    <!-- <q-list inset-separator>
  <q-item>
    <q-item-side icon="voice_chat" color="secondary" />
    <q-item-main label="Voice Chat with Joe" />
    <q-item-side right icon="voice_chat" color="secondary" />
  </q-item>
  <q-item>
    <q-item-side inverted icon="voice_chat" color="secondary" />
    <q-item-main label="Voice Chat with Joe" />
    <q-item-side right inverted icon="voice_chat" color="secondary" />
  </q-item>
  <q-item>
    <q-item-side inverted icon="voice_chat" color="amber" text-color="black" />
    <q-item-main label="Voice Chat with Joe" />
    <q-item-side right inverted icon="voice_chat" color="amber" text-color="black" />
  </q-item>
  <q-item>
    <q-item-side letter="J" color="secondary" />
    <q-item-main label="John Doe" />
    <q-item-side right letter="J" color="secondary" />
  </q-item>
  <q-item>
    <q-item-side inverted letter="J" color="secondary" />
    <q-item-main label="John Doe" />
    <q-item-side right inverted letter="J" color="secondary" />
  </q-item>
  <q-item>
    <q-item-side inverted letter="J" color="amber" text-color="black" />
    <q-item-main label="John Doe" />
    <q-item-side right inverted letter="J" color="amber" text-color="black" />
  </q-item>
</q-list> -->
  </q-page>
</template>

<script>
export default {
  name: 'Treasury'
}
</script>

<style>
</style>
