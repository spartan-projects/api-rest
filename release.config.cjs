module.exports = {
    branches: ['main'],
    repositoryUrl: 'https://github.com/spartan-projects/api-rest',
    plugins: [
        '@semantic-release/commit-analyzer', 
        '@semantic-release/release-notes-generator', 
        '@semantic-release/github'
    ]
}