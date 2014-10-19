var slackbot = require('./lib/bot');

var config = {
    server: 'irc.freenode.com',
    nick: 'slackbot',
    username: 'slackbot-username',
    slackUrl: 'https://<yourorg>.slack.com/services/hooks/incoming-webhook?token=<yourtoken>',
    channels: {
        '#irc-channel password(optional)': '#slack-channel'
    },
    users: {
        '~irclogin': 'slackuser'
    }

    ,silent: true
    ,floodProtection: true
//    ,floodProtectionDelay: 1000
//    ,port: 6667
//    ,debug: false
//    ,showErrors: false
//    ,autoRejoin: true
//    ,autoConnect: true
//    ,secure: false

};

var slackbot = new slackbot.Bot(config);
slackbot.listen();
