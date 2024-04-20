const users = [
    { userId: 'user1', password: 'password1' },
    { userId: 'user2', password: 'password2' },
    { userId: 'user3', password: 'password3' }
    // Add more users as needed
  ];
  
  function login() {
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
  
    const user = users.find(u => u.userId === userId && u.password === password);
  
    if (user) {
      document.getElementById('loginContainer').style.display = 'none';
      document.getElementById('mainContent').style.display = 'block';
      loadJobPortal(user);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
  
  function loadJobPortal(user) {
    // Your code to load job posts, application forms, etc. can go here
  }
  
  function showApplicationForm(jobId) {
    const form = document.getElementById(`applicationForm${jobId}`);
    form.style.display = 'block';
  }
  
  function submitApplication(jobId) {
    const name = document.getElementById(`name${jobId}`).value;
    const email = document.getElementById(`email${jobId}`).value;
    const resume = document.getElementById(`resume${jobId}`).value;
  
    const table = document.getElementById('appliedJobsTable');
    const tbody = document.getElementById('appliedJobsBody');
  
    const newRow = tbody.insertRow();
    newRow.innerHTML = `<td>${jobId}</td><td>${name}</td><td>${email}</td><td>${resume}</td>`;
  
    // Clear the form
    document.getElementById(`applicationForm${jobId}`).style.display = 'none';
    document.getElementById(`name${jobId}`).value = '';
    document.getElementById(`email${jobId}`).value = '';
    document.getElementById(`resume${jobId}`).value = '';
  
    // Inform the user
    alert('Application submitted successfully!');
  }