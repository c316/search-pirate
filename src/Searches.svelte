<script>
  import SearchItem from './SearchItem.svelte';
  import { db } from './firebase';
  import { collectionData } from 'rxfire/firestore';
  import { startWith } from 'rxjs/operators';
  export let uid;
  let text = 'some task';
  const query = db.collection('searches').where('uid', '==', uid).orderBy('created');
  const searches = collectionData(query, 'id').pipe(startWith([]));
  function add() {
      db.collection('searches').add({ uid, text, complete: false, created: Date.now() });
      text = '';
  }
  function updateStatus(event) {
      const { id, newStatus } = event.detail;
      db.collection('searches').doc(id).update({ complete: newStatus });
  }
  function removeItem(event) {
      const { id } = event.detail;
      db.collection('searches').doc(id).delete();
  }
</script>

<style>
  input { display: block }
</style>

<ul>
{#each $searches as search}
  <SearchItem {...search} on:remove={removeItem} on:toggle={updateStatus} />
{/each}
</ul>


<input bind:value={text}>

<hr>

<p>Your task: <strong>{ text }</strong></p>

<button class="button is-info" on:click={add}>Add Task</button>