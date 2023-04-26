let apiUrl = 'https://minga-amarillo-back-zli4.onrender.com/'

if (process.env.NODE_ENV==='production') {
    apiUrl = import.meta.VITE_API
}

export default apiUrl