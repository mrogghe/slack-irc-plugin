var request = require('request');

/**
 * Slack API wrapper
 * @param {object} config Slacker configuration
 * - token: Slack API token
 */
var Slacker = function (config) {
    this.token = config.token;
    return this;
};

/**
 * Send slack API request
 * @param  {string} method Slack API method
 * @param  {object} args POST arguments to send to Slack
 */
Slacker.prototype.send = function (slackurl, args) {
    args = args || {} ;
    args.token = this.token;
    request.post({
                     url: slackurl,
                     json: true,
                     body: args
                 }, function (error, response, body) {
        if (error || !body.ok) {
            console.log('Error:', error || body.error);
        }
    });
};

exports.Slacker = Slacker;
