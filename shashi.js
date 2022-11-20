require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
//const heroku = require('heroku')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const speedofbot = require("performance-now")
const fetch = require('node-fetch')
const maker = require('mumaker')

//-[database]-\\

global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) 
global.db = {
    users: {},
    chats: {},
    sticker: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    ...(global.db || {})
}
