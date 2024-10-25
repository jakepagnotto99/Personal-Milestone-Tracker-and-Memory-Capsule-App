async function fetchReactions() {
    try {
      const response = await axios.get('http://localhost:3001/api/reactions');
      
     
      if (response.data) {
        // displayReactions(response.data);
        console.log(response)
        displayReactions(response.data)
      } else {
        console.error('No data found in response');
      }
    } catch (error) {
      console.error('Error fetching reactions:', error);
    }
  }
  
 
  function displayReactions(reactions) {
    const reactionContainer = document.getElementById('container');
    
    if (!reactions.length) {
      reactionContainer.textContent = 'No reactions found.';
      return;
    }
  
   
    reactionContainer.innerHTML = '';
  

    reactions.forEach(reaction => {
      const reactionDiv = document.createElement('div');
      reactionDiv.className = 'reaction';
  
      const title = document.createElement('h3');
      title.textContent = reaction.type;
      reactionDiv.appendChild(title);
  
      const user = document.createElement('p');
      user.textContent = reaction.user_id.username
      reactionDiv.appendChild(user);
  
      reactionContainer.appendChild(reactionDiv);
    });
  }
  
  document.addEventListener('DOMContentLoaded', fetchReactions);
  