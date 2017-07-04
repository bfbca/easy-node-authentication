// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : 'your-clientID-here', // your App ID
        'clientSecret'    : 'your-client-secret-here', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    },

    'twitterAuth' : {
        'consumerKey'        : 'your-consumer-key-here',
        'consumerSecret'     : 'your-client-secret-here',
        'callbackURL'        : 'http://localhost:8080/twitter/callback'
    },

    'wordpressAuth' : {
        'clientID'         : 'your-client-id-from-WP-OAuth-Server-plugin',
        'clientSecret'     : 'your-client-secret-from-WP-OAuth-Server-plugin',
        'wordpressURL'     : 'https://mywordpresssite.example.com',
        'callbackURL'      : 'http://localhost:8080/auth/wordpress/callback'
    },

    'googleAuth' : {
        'clientID'         : 'your-clientID-here',
        'clientSecret'     : 'your-client-secret-here',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};
