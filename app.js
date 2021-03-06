// Full Documentation - https://docs.turbo360.co
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const express = require('express')

const app = express() // initialize app

/*  
	Apps can also be initialized with config options as shown in the commented out example below. Options
	include setting views directory, static assets directory, and database settings. To see default config
	settings, view here: https://docs.turbo360.co

const config = {
	views: 'views', 							// Set views directory 
	static: 'public', 							// Set static assets directory
	logging: true,
	// controllers: require('./controllers'), 	// only for CMS integration
	db: vertex.nedb()
}

vertex.configureApp(app, config) // remove line 30 below and replace with this
*/

vertex.configureApp(app)
app.use(vertex.setContext(process.env))


// import routes
const main = require('./routes/main')

// set routes
app.use('/', main)

module.exports = app