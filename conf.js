exports.config = {

  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: [
      './chapter10_steps.js',
      './env.js'
    ]
  },

  specs: [
    './chapter10.feature'
  ],

  onPrepare: function () {
          browser.driver.manage().window().maximize();
        },

      }


























    //   var MailListener = require("mail-listener2");

    // var mailListener = new MailListener({
    //   username: "rocksaasim@gmail.com",
    //   password: "Aasim_ali92",
    //   host: "imap.gmail.com",
    //   port: 993, // imap port 
    //   tls: true,
    //   connTimeout: 10000, // Default by node-imap
    //   authTimeout: 5000, // Default by node-imap,
    //   debug: console.log, // Or your custom function with only one incoming argument. Default: null
    //   tlsOptions: { rejectUnauthorized: false },
    //   mailbox: "INBOX", // mailbox to monitor
    //   searchFilter: ["UNSEEN", "FLAGGED"], // the search filter being used after an IDLE notification has been retrieved
    //   markSeen: true, // all fetched email willbe marked as seen and not fetched next time
    //   fetchUnreadOnStart: true, // use it only if you want to get all unread email on lib start. Default is `false`,
    //   mailParserOptions: {streamAttachments: true}, // options to be passed to mailParser lib.
    //   attachments: true, // download attachments as they are encountered to the project directory
    //   attachmentOptions: { directory: "attachments/" } // specify a download directory for attachments
    // });

    // mailListener.start(); // start listening

    // // stop listening
    // //mailListener.stop();

    // mailListener.on("server:connected", function(){
    //   console.log("imapConnected 1 >>>>  ");
    // });

    // mailListener.on("server:disconnected", function(){
    //   console.log("imapDisconnected  2  >>>");
    // });

    // mailListener.on("error", function(err){
    //   console.log(err);
    // });

    // mailListener.on("mail", function(mail, seqno, attributes){
    //   console.log("imapDisconnected  3  >>>");
    //   // do something with mail object including attachments
    //   //console.log("emailParsed", mail);
    //   // mail processing code goes here
    // });

    // mailListener.on("attachment", function(attachment){
    //   // console.log(attachment.path);
    //   console.log("imapDisconnected  4  >>>");
    // });

    // it's possible to access imap object from node-imap library for performing additional actions. E.x.
    //mailListener.imap.move(:msguids, :mailboxes, function(){})

    // var MailListener = require("mail-listener2");

    // // here goes your email connection configuration
    // var mailListener = new MailListener({
    //   username: "rocksaasim@gmail.com",
    //   password: "Aasim_ali92",
    //   host: "imap.gmail.com",
    //   port: 993, // imap port 
    //   tls: true,
    //   tlsOptions: { rejectUnauthorized: false },
    //   mailbox: "INBOX", // mailbox to monitor 
    //   searchFilter: ["UNSEEN", "FLAGGED"], // the search filter being used after an IDLE notification has been retrieved 
    //   markSeen: true, // all fetched email willbe marked as seen and not fetched next time 
    //   fetchUnreadOnStart: true, // use it only if you want to get all unread email on lib start. Default is `false`, 
    //   mailParserOptions: { streamAttachments: true }, // options to be passed to mailParser lib. 
    //   attachments: true, // download attachments as they are encountered to the project directory 
    //   attachmentOptions: { directory: "C:/Users/aasim/Desktop/Reports/HTMLREPORT/report/indexxx.html" } // specify a download directory for attachments 
    // });

    // mailListener.start();

    // mailListener.on("server:connected", function () {
    //   console.log("Mail listener initialized");
    // });

    // global.mailListener = mailListener;
 // },

  // onCleanUp: function () {
  //   mailListener.stop();
  // }
//};