<script>
  import { createEventDispatcher } from 'svelte';
  
  export let value = '';
  
  const dispatch = createEventDispatcher();
  
  let inputElement;
  
  const handleInput = () => {
    dispatch('filter', {
      pattern: value
    });
  };
  
  const clearInput = () => {
    value = '';
    handleInput();
    inputElement.focus();
  };
</script>

<div class="filter-container">
  <label for="filter-input">🔍 Filtrer les animaux :</label>
  <div class="input-wrapper">
    <input
      id="filter-input"
      bind:this={inputElement}
      bind:value
      on:input={handleInput}
      type="text"
      placeholder="Tapez le nom d'un animal (ex: ry, duck, snake...)"
      autocomplete="off"
    />
    {#if value}
      <button 
        class="clear-btn"
        on:click={clearInput}
        title="Effacer"
      >
        ✕
      </button>
    {/if}
  </div>
  {#if value}
    <small class="filter-info">
      Recherche active pour : "<strong>{value}</strong>"
    </small>
  {/if}
</div>

<style>
  .filter-container {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #333;
    font-size: 1.1rem;
  }
  
  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: white;
  }
  
  input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  input::placeholder {
    color: #999;
  }
  
  .clear-btn {
    position: absolute;
    right: 0.5rem;
    background: #f44336;
    color: white;
    border: none;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    transition: all 0.2s ease;
  }
  
  .clear-btn:hover {
    background: #d32f2f;
    transform: scale(1.1);
  }
  
  .filter-info {
    display: block;
    margin-top: 0.5rem;
    color: #666;
    font-style: italic;
  }
  
  .filter-info strong {
    color: #667eea;
  }
  
  @media (max-width: 768px) {
    input {
      font-size: 16px; /* Évite le zoom sur iOS */
    }
  }
</style>
