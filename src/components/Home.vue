<template>
  <img alt="Vue logo" src="../assets/logo.png">
  <h1>Welcome Home !</h1>
  <button @click="signOutOidc">Log Out</button>
</template>

<script>
import { useOidcState } from '@/state/oidcState';

export default {
  setup() {
    const { signOutOidc } = useOidcState();
    return {
      signOutOidc
    };
  }
}
</script>

<style>

</style>