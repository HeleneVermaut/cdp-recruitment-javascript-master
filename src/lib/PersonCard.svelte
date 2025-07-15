<script>
  export let person;
  
  let showAnimals = false;
  
  const toggleAnimals = () => {
    showAnimals = !showAnimals;
  };
  
  // Fonction pour obtenir un emoji aléatoire pour les animaux
  const getAnimalEmoji = () => {
    const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🐤', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜', '🕷', '🦂', '🐢', '🐍', '🦎', '🐙', '🦑', '🦐', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦏', '🐘', '🦛', '🐪', '🐫', '🦒', '🐃', '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🐐', '🦌', '🐕', '🐩', '🐈'];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };
</script>

<div class="person-card">
  <div class="person-header">
    <h4 class="person-name">
      👤 {person.name}
    </h4>
    <div class="person-actions">
      <span class="animal-count">
        🐾 {person.animals.length} animal{person.animals.length > 1 ? 'aux' : ''}
      </span>
      {#if person.animals.length > 0}
        <button class="show-animals-btn" on:click={toggleAnimals}>
          {showAnimals ? '🔼' : '🔽'}
        </button>
      {/if}
    </div>
  </div>
  
  {#if showAnimals && person.animals.length > 0}
    <div class="animals-container">
      <div class="animals-grid">
        {#each person.animals as animal (animal.name)}
          <div class="animal-tag">
            <span class="animal-emoji">{getAnimalEmoji()}</span>
            <span class="animal-name">{animal.name}</span>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .person-card {
    background: white;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  
  .person-card:hover {
    border-color: #667eea;
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.15);
  }
  
  .person-header {
    padding: 1rem;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .person-name {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
  }
  
  .person-actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  
  .animal-count {
    font-size: 0.85rem;
    color: #666;
    background: #e3f2fd;
    padding: 0.25rem 0.5rem;
    border-radius: 12px;
    font-weight: 500;
  }
  
  .show-animals-btn {
    background: #667eea;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    font-size: 0.8rem;
    transition: all 0.2s ease;
  }
  
  .show-animals-btn:hover {
    background: #5a6fd8;
    transform: scale(1.05);
  }
  
  .animals-container {
    padding: 1rem;
    background: #fafafa;
  }
  
  .animals-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .animal-tag {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background: white;
    padding: 0.375rem 0.75rem;
    border-radius: 20px;
    border: 1px solid #e0e0e0;
    font-size: 0.85rem;
    transition: all 0.2s ease;
    cursor: default;
  }
  
  .animal-tag:hover {
    border-color: #667eea;
    background: #f3f4f6;
    transform: translateY(-1px);
  }
  
  .animal-emoji {
    font-size: 1rem;
  }
  
  .animal-name {
    font-weight: 500;
    color: #333;
  }
  
  @media (max-width: 768px) {
    .person-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
    
    .person-actions {
      align-self: stretch;
      justify-content: space-between;
    }
    
    .person-name {
      font-size: 1rem;
    }
  }
</style>
