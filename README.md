# Authenticate Node.js against your own Wordpress website

Add Wordpress blog to your Node.js website (or vice versa), where user's Wordpress account automatically works in your Node.js.
- single user account used both in your Wordpress and Node.js. No need to have separate Wordpress and Node.js user accounts.
- when user visits your Node.js site, redirect user to your Wordpress site to enter username/password, then redirect back to your Node.js (just like authenticating against Google/Facebook/Twitter, but against your own Wordpress)
- manage Node.js users in Wordpress
- to be clear, authentication is against your own Wordpress site, not against wordpress.com
- Node.js + Express.js + Passport.js + MongoDb + Wordpress

Based on [Getting Started and Local Authentication](http://scotch.io/tutorials/easy-node-authentication-setup-and-local) tutorial from scotch.io. Uses WP OAuth Server free plugin and passport-wordpress-oauth-server npm module.

## Instructions

Let's assume your blog runs at mywordpressblog.example.com and your Node.js (this code) runs at http://localhost:8080/.

### I. Set up Wordpress

1. Install Wordpress (if you haven't done so already)
2. Install Wordpress plugin [WP OAuth Server](https://wordpress.org/plugins/oauth2-provider/), free
3. Configure the WP Oauth Server plugin
  - in Wordpress admin panel (dashboard menu on the left), click OAuth Server, click Clients tab, click Add New Client
  - enter client name, e.g. My Node.js Site, enter Redirect URI, e.g. https://localhost:8080/auth/wordpress/callback
  - once client is created, you will see a list of clients (containing only "My Node.js") - write down client ID, then mouse over "My Node.js", Show Secret link will appear, click Show Secret and write down your client secret

### II. Set up Node.js
1. Clone the repo: `git clone https://github.com/bfbca/easy-node-authentication`
2. Install mongoDb on localhost (no admin/password), if you haven't done so already
   Optionally, detailed database configuration is located in config/database.js
3. Install packages: `cd easy-node-authentication`, then `npm install`
4. Change auth keys in config/auth.js - insert client ID, client secret from WP OAuth Server plugin. Change out your Wordpress site URL and (if not localhost:8080) your Node.js site URL.
5. Launch: `node server.js`
6. Open our browser at: `http://localhost:8080`

For production, make sure Node.js and your blog run on https to make the authentication process secure.
