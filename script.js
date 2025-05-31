// GitHub username
const username = 'space47';

// DOM elements
const profileImage = document.getElementById('profile-image');
const profileName = document.getElementById('profile-name');
const profileBio = document.getElementById('profile-bio');
const reposCount = document.getElementById('repos-count');
const followersCount = document.getElementById('followers-count');
const followingCount = document.getElementById('following-count');
const githubLink = document.getElementById('github-link');
const currentYear = document.getElementById('current-year');

// Set current year in footer
currentYear.textContent = new Date().getFullYear();

// Fetch GitHub profile data
async function fetchGitHubProfile() {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error('Failed to fetch GitHub profile');
        }
        const data = await response.json();
        
        // Update DOM elements with GitHub data
        profileImage.src = data.avatar_url;
        profileName.textContent = data.name || username;
        profileBio.textContent = data.bio || 'No bio available';
        reposCount.textContent = data.public_repos;
        followersCount.textContent = data.followers;
        followingCount.textContent = data.following;
        githubLink.href = data.html_url;

        // Remove loading text
        document.querySelectorAll('.loading').forEach(el => el.classList.remove('loading'));
    } catch (error) {
        console.error('Error:', error);
        profileName.textContent = 'Error loading profile';
        profileBio.textContent = 'Please try again later';
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', fetchGitHubProfile);

