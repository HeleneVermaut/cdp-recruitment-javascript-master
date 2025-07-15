<script>
  import PersonCard from './PersonCard.svelte';
  
  export let country;
  
  let isExpanded = false;
  
  const toggleExpanded = () => {
    isExpanded = !isExpanded;
  };
</script>

<div class="country-card">
  <div class="country-header" 
       on:click={toggleExpanded} 
       on:keypress={toggleExpanded}
       role="button"
       tabindex="0">
    <h3 class="country-name">
      🌍 {country.name}
    </h3>
    <div class="country-stats">
      <span class="people-count">
        👥 {country.people.length} personne{country.people.length > 1 ? 's' : ''}
      </span>
      <button class="expand-btn" class:expanded={isExpanded}>
        {isExpanded ? '▼' : '▶'}
      </button>
    </div>
  </div>
  
  {#if isExpanded}
    <div class="country-content">
      <div class="people-grid">
        {#each country.people as person (person.name)}
          <PersonCard {person} />
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .country-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }
  
  .country-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    border-color: #667eea;
  }
  
  .country-header {
    padding: 1.5rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
  }
  
  .country-header:hover {
    background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
  }
  
  .country-name {
    margin: 0;
    font-size: 1.3rem;
    font-weight: 600;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
  }
  
  .country-stats {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .people-count {
    font-size: 0.9rem;
    opacity: 0.9;
    background: rgba(255,255,255,0.2);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    backdrop-filter: blur(10px);
  }
  
  .expand-btn {
    background: rgba(255,255,255,0.2);
    border: none;
    color: white;
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
  }
  
  .expand-btn:hover {
    background: rgba(255,255,255,0.3);
    transform: scale(1.1);
  }
  
  .expand-btn.expanded {
    transform: rotate(90deg);
  }
  
  .expand-btn.expanded:hover {
    transform: rotate(90deg) scale(1.1);
  }
  
  .country-content {
    padding: 1.5rem;
    background: #f8f9fa;
  }
  
  .people-grid {
    display: grid;
    gap: 1rem;
  }
  
  @media (max-width: 768px) {
    .country-header {
      padding: 1rem;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
    
    .country-stats {
      align-self: stretch;
      justify-content: space-between;
    }
    
    .country-name {
      font-size: 1.1rem;
    }
  }
</style>
