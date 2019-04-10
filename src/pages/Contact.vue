<template>
  <q-page padding>
    <h3>Reach out to me with anything!</h3>
    <q-field
      icon="email"
      label="Your E-mail"
      type="email"
      helper="Helper"
      :error="mailHasError"
      error-label="We need a valid email"
      :count="10"
    >
    <!-- <q-input suffix="@gmail.com" v-model="model" /> -->
    </q-field>
    <q-field
      icon="subject"
      label="Subject"
      helper="Helper"
      :error="mailHasError"
      error-label="We need a valid email"
      :count="10"
    >
    </q-field>
    <q-field>
      <q-input
        v-model="area"
        type="textarea"
        placeholder="Enter your message . . ."
        label="Message"
        float-label="Textarea"
        :max-height="100"
        rows="7"
      />
    </q-field>
    <!-- <q-input v-model="email" type="email" float-label="Email" suffix="@gmail.com" /> -->

  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style>
</style>
