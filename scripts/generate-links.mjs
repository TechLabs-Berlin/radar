#!/usr/bin/env node
import YAML from 'yaml'
import fs from 'fs'

function generateCode(length) {
  var result           = '';
  var characters       = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

let links = {}
while(Object.keys(links).length < 1000) {
  links[generateCode(3)] = ''
}

const linksYAML = YAML.stringify(links)

fs.writeFile('content/links.yaml', linksYAML, function (err) {
  if (err) return console.log(err);
});
