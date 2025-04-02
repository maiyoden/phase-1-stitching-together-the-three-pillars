
/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {};

// Step 1: Select the heart elements in the DOM
const articleHearts = document.querySelectorAll('.heart'); // Assuming the heart elements have a class of 'heart'

// Log the NodeList to the console to verify
console.log(articleHearts);

// Step 2: Set up mock server communication
function mockServerLike(postId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ success: true, postId: postId });
        }, 500); // Simulate a delay for the server response
    });
}

// Step 3: Add event listeners to the heart elements
articleHearts.forEach((heart, index) => {
    heart.addEventListener('click', async () => {
        const postId = index; // Assuming the index corresponds to the post ID
        const response = await mockServerLike(postId);
        
        if (response.success) {
            heart.classList.toggle('liked'); // Toggle the 'liked' class to change the heart color
            alert(`Post ${postId} liked!`);
        }
    });
});