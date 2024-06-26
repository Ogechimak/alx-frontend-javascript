function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an API call
    setTimeout(() => {
      // You can resolve or reject the Promise based on your needs
      resolve("API response data");
      // If you want to simulate an error, you can use reject instead:
      // reject(new Error("API request failed"));
    }, 1000);
  });
}

export default getResponseFromAPI;
