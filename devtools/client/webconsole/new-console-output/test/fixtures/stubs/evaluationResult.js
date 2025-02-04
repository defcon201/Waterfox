/* Any copyright is dedicated to the Public Domain.
  http://creativecommons.org/publicdomain/zero/1.0/ */
/* eslint-disable max-len */

"use strict";

/*
 * THIS FILE IS AUTOGENERATED. DO NOT MODIFY BY HAND. RUN TESTS IN FIXTURES/ TO UPDATE.
 */

const { ConsoleMessage } =
  require("devtools/client/webconsole/new-console-output/types");

let stubPreparedMessages = new Map();
let stubPackets = new Map();
stubPreparedMessages.set("new Date(0)", new ConsoleMessage({
  "id": "1",
  "allowRepeating": true,
  "source": "javascript",
  "timeStamp": 1479159921364,
  "type": "result",
  "level": "log",
  "parameters": {
    "type": "object",
    "actor": "server1.conn0.child1/obj30",
    "class": "Date",
    "extensible": true,
    "frozen": false,
    "sealed": false,
    "ownPropertyLength": 0,
    "preview": {
      "timestamp": 0
    }
  },
  "repeatId": "{\"id\":null,\"allowRepeating\":true,\"source\":\"javascript\",\"timeStamp\":null,\"type\":\"result\",\"level\":\"log\",\"parameters\":{\"type\":\"object\",\"actor\":\"server1.conn0.child1/obj30\",\"class\":\"Date\",\"extensible\":true,\"frozen\":false,\"sealed\":false,\"ownPropertyLength\":0,\"preview\":{\"timestamp\":0}},\"repeatId\":null,\"stacktrace\":null,\"frame\":null,\"groupId\":null,\"userProvidedStyles\":null,\"notes\":null,\"indent\":0}",
  "stacktrace": null,
  "frame": null,
  "groupId": null,
  "userProvidedStyles": null,
  "notes": null,
  "indent": 0
}));

stubPreparedMessages.set("asdf()", new ConsoleMessage({
  "id": "1",
  "allowRepeating": true,
  "source": "javascript",
  "timeStamp": 1479159921377,
  "type": "result",
  "level": "error",
  "messageText": "ReferenceError: asdf is not defined",
  "parameters": {
    "type": "undefined"
  },
  "repeatId": "{\"id\":null,\"allowRepeating\":true,\"source\":\"javascript\",\"timeStamp\":null,\"type\":\"result\",\"level\":\"error\",\"messageText\":\"ReferenceError: asdf is not defined\",\"parameters\":{\"type\":\"undefined\"},\"repeatId\":null,\"stacktrace\":null,\"frame\":{\"source\":\"debugger eval code\",\"line\":1,\"column\":1},\"groupId\":null,\"exceptionDocURL\":\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Errors/Not_defined?utm_source=mozilla&utm_medium=firefox-console-errors&utm_campaign=default\",\"userProvidedStyles\":null,\"notes\":null,\"indent\":0}",
  "stacktrace": null,
  "frame": {
    "source": "debugger eval code",
    "line": 1,
    "column": 1
  },
  "groupId": null,
  "exceptionDocURL": "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Errors/Not_defined?utm_source=mozilla&utm_medium=firefox-console-errors&utm_campaign=default",
  "userProvidedStyles": null,
  "notes": null,
  "indent": 0
}));

stubPreparedMessages.set("1 + @", new ConsoleMessage({
  "id": "1",
  "allowRepeating": true,
  "source": "javascript",
  "timeStamp": 1479159921399,
  "type": "result",
  "level": "error",
  "messageText": "SyntaxError: illegal character",
  "parameters": {
    "type": "undefined"
  },
  "repeatId": "{\"id\":null,\"allowRepeating\":true,\"source\":\"javascript\",\"timeStamp\":null,\"type\":\"result\",\"level\":\"error\",\"messageText\":\"SyntaxError: illegal character\",\"parameters\":{\"type\":\"undefined\"},\"repeatId\":null,\"stacktrace\":null,\"frame\":{\"source\":\"debugger eval code\",\"line\":1,\"column\":4},\"groupId\":null,\"exceptionDocURL\":\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Errors/Illegal_character?utm_source=mozilla&utm_medium=firefox-console-errors&utm_campaign=default\",\"userProvidedStyles\":null,\"notes\":null,\"indent\":0}",
  "stacktrace": null,
  "frame": {
    "source": "debugger eval code",
    "line": 1,
    "column": 4
  },
  "groupId": null,
  "exceptionDocURL": "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Errors/Illegal_character?utm_source=mozilla&utm_medium=firefox-console-errors&utm_campaign=default",
  "userProvidedStyles": null,
  "notes": null,
  "indent": 0
}));

stubPreparedMessages.set("longString message Error", new ConsoleMessage({
  "id": "1",
  "allowRepeating": true,
  "source": "javascript",
  "timeStamp": 1493108241073,
  "type": "result",
  "level": "error",
  "messageText": {
    "type": "longString",
    "initial": "Error: Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Lon",
    "length": 110007,
    "actor": "server1.conn0.child1/longString37"
  },
  "parameters": {
    "type": "undefined"
  },
  "repeatId": "{\"id\":null,\"allowRepeating\":true,\"source\":\"javascript\",\"timeStamp\":null,\"type\":\"result\",\"level\":\"error\",\"messageText\":{\"type\":\"longString\",\"initial\":\"Error: Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Lon\",\"length\":110007,\"actor\":\"server1.conn0.child1/longString37\"},\"parameters\":{\"type\":\"undefined\"},\"repeatId\":null,\"stacktrace\":null,\"frame\":null,\"groupId\":null,\"userProvidedStyles\":null,\"notes\":null,\"indent\":0}",
  "stacktrace": null,
  "frame": null,
  "groupId": null,
  "userProvidedStyles": null,
  "notes": null,
  "indent": 0
}));

stubPackets.set("new Date(0)", {
  "from": "server1.conn0.child1/consoleActor2",
  "input": "new Date(0)",
  "result": {
    "type": "object",
    "actor": "server1.conn0.child1/obj30",
    "class": "Date",
    "extensible": true,
    "frozen": false,
    "sealed": false,
    "ownPropertyLength": 0,
    "preview": {
      "timestamp": 0
    }
  },
  "timestamp": 1479159921364,
  "exception": null,
  "frame": null,
  "helperResult": null,
  "notes": null
});

stubPackets.set("asdf()", {
  "from": "server1.conn0.child1/consoleActor2",
  "input": "asdf()",
  "result": {
    "type": "undefined"
  },
  "timestamp": 1479159921377,
  "exception": {
    "type": "object",
    "actor": "server1.conn0.child1/obj32",
    "class": "Error",
    "extensible": true,
    "frozen": false,
    "sealed": false,
    "ownPropertyLength": 4,
    "preview": {
      "kind": "Error",
      "name": "ReferenceError",
      "message": "asdf is not defined",
      "stack": "@debugger eval code:1:1\n",
      "fileName": "debugger eval code",
      "lineNumber": 1,
      "columnNumber": 1
    }
  },
  "exceptionMessage": "ReferenceError: asdf is not defined",
  "exceptionDocURL": "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Errors/Not_defined?utm_source=mozilla&utm_medium=firefox-console-errors&utm_campaign=default",
  "frame": {
    "source": "debugger eval code",
    "line": 1,
    "column": 1
  },
  "helperResult": null,
  "notes": null
});

stubPackets.set("1 + @", {
  "from": "server1.conn0.child1/consoleActor2",
  "input": "1 + @",
  "result": {
    "type": "undefined"
  },
  "timestamp": 1479159921399,
  "exception": {
    "type": "object",
    "actor": "server1.conn0.child1/obj33",
    "class": "Error",
    "extensible": true,
    "frozen": false,
    "sealed": false,
    "ownPropertyLength": 4,
    "preview": {
      "kind": "Error",
      "name": "SyntaxError",
      "message": "illegal character",
      "stack": "",
      "fileName": "debugger eval code",
      "lineNumber": 1,
      "columnNumber": 4
    }
  },
  "exceptionMessage": "SyntaxError: illegal character",
  "exceptionDocURL": "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Errors/Illegal_character?utm_source=mozilla&utm_medium=firefox-console-errors&utm_campaign=default",
  "frame": {
    "source": "debugger eval code",
    "line": 1,
    "column": 4
  },
  "helperResult": null,
  "notes": null
});

stubPackets.set("longString message Error", {
  "from": "server1.conn0.child1/consoleActor2",
  "input": "throw new Error(\"Long error \".repeat(10000))",
  "result": {
    "type": "undefined"
  },
  "timestamp": 1493108241073,
  "exception": {
    "type": "object",
    "actor": "server1.conn0.child1/obj35",
    "class": "Error",
    "extensible": true,
    "frozen": false,
    "sealed": false,
    "ownPropertyLength": 4,
    "preview": {
      "kind": "Error",
      "name": "Error",
      "message": {
        "type": "longString",
        "initial": "Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error",
        "length": 110000,
        "actor": "server1.conn0.child1/longString36"
      },
      "stack": "@debugger eval code:1:7\n",
      "fileName": "debugger eval code",
      "lineNumber": 1,
      "columnNumber": 7
    }
  },
  "exceptionMessage": {
    "type": "longString",
    "initial": "Error: Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Long error Lon",
    "length": 110007,
    "actor": "server1.conn0.child1/longString37"
  },
  "frame": null,
  "helperResult": null,
  "notes": null
});

module.exports = {
  stubPreparedMessages,
  stubPackets,
};
