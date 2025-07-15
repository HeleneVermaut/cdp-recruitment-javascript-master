<script>
  import { filterData, countChildrens, data } from './utils.js';
  import CountryCard from './lib/CountryCard.svelte';
  import FilterInput from './lib/FilterInput.svelte';
  
  let currentData = data;
  let filterPattern = '';
  let showCounts = false;
  let isLoading = false;
  
  // Fonction pour filtrer les données
  const handleFilter = (event) => {
    isLoading = true;
    filterPattern = event.detail.pattern;
    
    setTimeout(() => {
      if (filterPattern.trim() === '') {
        currentData = showCounts ? countChildrens(data) : data;
      } else {
        const filtered = filterData(data, filterPattern);
        currentData = showCounts ? countChildrens(filtered) : filtered;
      }
      isLoading = false;
    }, 100); // Petit délai pour montrer le loading
  };
  
  // Fonction pour basculer l'affichage des comptes
  const toggleCounts = () => {
    isLoading = true;
    showCounts = !showCounts;
    
    setTimeout(() => {
      if (filterPattern.trim() === '') {
        currentData = showCounts ? countChildrens(data) : data;
      } else {
        const filtered = filterData(data, filterPattern);
        currentData = showCounts ? countChildrens(filtered) : filtered;
      }
      isLoading = false;
    }, 100);
  };
  
  // Fonction pour réinitialiser les données
  const resetData = () => {
    isLoading = true;
    filterPattern = '';
    showCounts = false;
    
    setTimeout(() => {
      currentData = data;
      isLoading = false;
    }, 100);
  };
</script>

<main>
  <header>
    <h1>🦕 CDP Data Explorer 🦕</h1>
    <p>Explorez les données des pays, personnes et animaux</p>
  </header>
  
  <div class="controls">
    <FilterInput on:filter={handleFilter} bind:value={filterPattern} />
    
    <div class="buttons">
      <button 
        class="count-btn" 
        class:active={showCounts}
        on:click={toggleCounts}
        disabled={isLoading}
      >
        {showCounts ? '📊 Masquer les comptes' : '📊 Afficher les comptes'}
      </button>
      
      <button 
        class="reset-btn" 
        on:click={resetData}
        disabled={isLoading}
      >
        🔄 Réinitialiser
      </button>
    </div>
  </div>
  
  {#if isLoading}
    <div class="loading">
      <div class="spinner"></div>
      <p>Chargement en cours...</p>
    </div>
  {:else}
    <div class="results">
      <div class="stats">
        <p>
          <strong>{currentData.length}</strong> pays trouvé{currentData.length > 1 ? 's' : ''}
          {#if filterPattern}
            pour le motif "<em>{filterPattern}</em>"
          {/if}
        </p>
      </div>
      
      <div class="countries-grid">
        {#each currentData as country (country.name)}
          <CountryCard {country} />
        {/each}
      </div>
      
      {#if currentData.length === 0}
        <div class="no-results">
          <h3>🔍 Aucun résultat trouvé</h3>
          <p>Essayez avec un autre motif de recherche.</p>
        </div>
      {/if}
    </div>
  {/if}
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
  }
  
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    min-height: 100vh;
  }
  
  header {
    text-align: center;
    margin-bottom: 2rem;
    color: white;
  }
  
  header h1 {
    font-size: 2.5rem;
    margin: 0 0 0.5rem 0;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  }
  
  header p {
    font-size: 1.1rem;
    opacity: 0.9;
    margin: 0;
  }
  
  .controls {
    background: rgba(255, 255, 255, 0.95);
    padding: 1.5rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
  }
  
  .buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    flex-wrap: wrap;
  }
  
  .count-btn, .reset-btn {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
  }
  
  .count-btn {
    background: #4CAF50;
    color: white;
  }
  
  .count-btn.active {
    background: #FF9800;
  }
  
  .count-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
  
  .reset-btn {
    background: #f44336;
    color: white;
  }
  
  .reset-btn:hover:not(:disabled) {
    background: #d32f2f;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
  
  .count-btn:disabled, .reset-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  .loading {
    text-align: center;
    padding: 3rem;
    color: white;
  }
  
  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255,255,255,0.3);
    border-top: 4px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 1rem auto;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .results {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 12px;
    padding: 1.5rem;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .stats {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #e0e0e0;
  }
  
  .stats p {
    margin: 0;
    font-size: 1.1rem;
    color: #333;
  }
  
  .countries-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 1.5rem;
  }
  
  .no-results {
    text-align: center;
    padding: 3rem;
    color: #666;
  }
  
  .no-results h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
  
  .no-results p {
    margin: 0;
    font-size: 1.1rem;
  }
  
  @media (max-width: 768px) {
    main {
      padding: 1rem;
    }
    
    header h1 {
      font-size: 2rem;
    }
    
    .controls {
      padding: 1rem;
    }
    
    .buttons {
      flex-direction: column;
    }
    
    .countries-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
