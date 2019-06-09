module.exports = function GithubAPI(){
    
    this.getUserData = async (username, callback) => {

        // Github API Link
        const APILink = `https://api.github.com/users/${username}`;
    
        // Sends a request to the Github API and gets
        // a response which contains full user data.
        await fetch(APILink)
        .then(response => response.json())
        .then(userdata => {
            callback(userdata);
        });
    
    }

    this.getUserRepositories = async (username, callback) => {

        const APILink = `https://api.github.com/users/${username}/repos`;
    
        // Sends a request to the Github API and gets
        // a response which contains all user repositories.
        await fetch(APILink)
        .then(response => response.json())
        .then(userRepositories => {
            callback(userRepositories);
        });
    
    }

    this.getListOfUsers = async (username, numberOfRepositories, callback) => {

        // Github API Link
        const APILink = `https://api.github.com/search/users?q=${username}+repos:%3E${numberOfRepositories}&sort=repositories&order=desc`;
    
        // Sends a request to the Github API and gets
        // a basic response with a list of profiles based on 
        // username and amount of repositories.
        await fetch(APILink)
        .then(response => response.json())
        .then(userlist => {
            callback(userlist.items);
        });
    
    }

} 