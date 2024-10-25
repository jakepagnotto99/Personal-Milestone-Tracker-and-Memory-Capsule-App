async function fetchMilestones() {
    try {
      const response = await axios.get('http://localhost:3001/api/milestones');
      
     
      if (response.data) {
        // displayMilestones(response.data);
        console.log(response)
        displayMilestones(response.data)
      } else {
        console.error('No data found in response');
      }
    } catch (error) {
      console.error('Error fetching milestones:', error);
    }
  }
  
 
  function displayMilestones(milestones) {
    const milestoneContainer = document.getElementById('container');
    
    if (!milestones.length) {
      milestoneContainer.textContent = 'No milestones found.';
      return;
    }
  
   
    milestoneContainer.innerHTML = '';
  

    milestones.forEach(milestone => {
      const milestoneDiv = document.createElement('div');
      milestoneDiv.className = 'milestone';
  
      const title = document.createElement('h3');
      title.textContent = milestone.title;
      milestoneDiv.appendChild(title);
  
      const description = document.createElement('p');
      description.textContent = milestone.description;
      milestoneDiv.appendChild(description);
  
      milestoneContainer.appendChild(milestoneDiv);
    });
  }
  
  document.addEventListener('DOMContentLoaded', fetchMilestones);
  