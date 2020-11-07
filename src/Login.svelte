<script>
  import Profile from './Profile.svelte';
  import Searches from './Searches.svelte';

  import { auth, googleProvider } from './firebase';
  import { authState } from 'rxfire/auth';

  let user = authState(auth);

  function login() {
    auth.signInWithPopup(googleProvider);
  }
</script>


<style>
  section {
    /* background: rgb(235, 235, 235); */
    padding: 20px;
  }
</style>

<section>
  {#if $user}
    <Searches uid={$user.uid} />
    <Profile photoURL={$user.photoURL} uid={$user.uid} displayName={$user.displayName} />
    <button on:click={ () => auth.signOut() } class="button">Logout</button>
  {:else}
    <button on:click={login} class="button">
      Signin with Google
    </button>
  {/if}
</section>