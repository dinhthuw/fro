const getBaseUrl = () => {
    // Check if we're in development or production
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    // Return appropriate API URL based on environment
    return isDevelopment ? "https://ba-kt0n.onrender.com" : "https://ba-kt0n.onrender.com";
}

export default getBaseUrl;