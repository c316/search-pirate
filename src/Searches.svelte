<script>
  import SearchItem from './SearchItem.svelte';
  import { db } from './firebase';
  import { collectionData } from 'rxfire/firestore';
  import { startWith } from 'rxjs/operators';
  export let uid;

  let text = '';
  const query = db.collection('searches').where('uid', '==', uid).orderBy('created', 'desc');
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

<input id="search" bind:value={text} type="text" />
<button class="button is-info" on:click={add}>Search</button>

<ul>
  {#each $searches as search}
    <SearchItem {...search} on:remove={removeItem} on:toggle={updateStatus} />
  {/each}
</ul>

