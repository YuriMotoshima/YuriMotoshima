module.exports = {
    proxy: 'http://localhost:5000', // Proxy para o servidor Node.js
    port: 3000, // Porta para o browserSync
    ui: {
        port: 3001, // Porta para a interface do usuário do browserSync
    },
    files: [
        './views/**/*.ejs',
        './public/**/*',
    ],
};
