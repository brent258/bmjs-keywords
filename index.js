const rand = require('bmjs-random');
const lib = require('./lib/exports.js');

module.exports = {

  lib: lib,

  keyword: function(obj) {
    if (!obj || typeof obj !== 'object' || !obj[0]) {
      return '';
    }
    let word = [];
    for (let i = 0; i < obj.length; i++) {
      if (obj[i] && obj[i][0]) word.push(rand(...obj[i]));
    }
    return word.join(' ');
  },

  singular: function(seed,obj,count) {
    if (!seed || typeof seed !== 'string' || !obj || typeof obj !== 'object' || !obj[0]) {
      return null;
    }
    if (!count) count = 10;
    let keyword = {
      seed: seed,
      keywordList: [],
      titleKeyword: '',
      keywordType: 'SINGULAR'
    };
    for (let i = 0; i < count; i++) {
      let word = this.keyword(obj);
      if (word) keyword.keywordList.push(word);
    }
    keyword.titleKeyword = keyword.keywordList[0] ? keyword.keywordList[0] : '';
    keyword.keywordList = keyword.keywordList.filter((val,index,arr) => arr.indexOf(val) === index);
    return keyword;
  },

  plural: function(seed,obj,count) {
    if (!seed || typeof seed !== 'string' || !obj || typeof obj !== 'object' || !obj[0]) {
      return null;
    }
    if (!count) count = 10;
    let keyword = {
      seed: seed,
      keywordList: [],
      titleKeyword: '',
      keywordType: 'PLURAL'
    };
    for (let i = 0; i < count; i++) {
      let word = this.keyword(obj);
      if (word) keyword.keywordList.push(word);
    }
    keyword.titleKeyword = keyword.keywordList[0] ? keyword.keywordList[0] : '';
    keyword.keywordList = keyword.keywordList.filter((val,index,arr) => arr.indexOf(val) === index);
    return keyword;
  },

  verb: function(seed,obj,count) {
    if (!seed || typeof seed !== 'string' || !obj || typeof obj !== 'object' || !obj[0]) {
      return null;
    }
    if (!count) count = 10;
    let keyword = {
      seed: seed,
      keywordList: [],
      titleKeyword: '',
      keywordType: 'VERB'
    };
    for (let i = 0; i < count; i++) {
      let word = this.keyword(obj);
      if (word) keyword.keywordList.push(word);
    }
    keyword.titleKeyword = keyword.keywordList[0] ? keyword.keywordList[0] : '';
    keyword.keywordList = keyword.keywordList.filter((val,index,arr) => arr.indexOf(val) === index);
    return keyword;
  },

  gerund: function(seed,obj,count) {
    if (!seed || typeof seed !== 'string' || !obj || typeof obj !== 'object' || !obj[0]) {
      return null;
    }
    if (!count) count = 10;
    let keyword = {
      seed: seed,
      keywordList: [],
      titleKeyword: '',
      keywordType: 'GERUND'
    };
    for (let i = 0; i < count; i++) {
      let word = this.keyword(obj);
      if (word) keyword.keywordList.push(word);
    }
    keyword.titleKeyword = keyword.keywordList[0] ? keyword.keywordList[0] : '';
    keyword.keywordList = keyword.keywordList.filter((val,index,arr) => arr.indexOf(val) === index);
    return keyword;
  },

  question: function(seed,obj,count) {
    if (!seed || typeof seed !== 'string' || !obj || typeof obj !== 'object' || !obj[0]) {
      return null;
    }
    if (!count) count = 10;
    let keyword = {
      seed: seed,
      keywordList: [],
      titleKeyword: '',
      keywordType: 'QUESTION'
    };
    for (let i = 0; i < count; i++) {
      let word = this.keyword(obj);
      if (word) keyword.keywordList.push(word);
    }
    keyword.titleKeyword = keyword.keywordList[0] ? keyword.keywordList[0] : '';
    keyword.keywordList = keyword.keywordList.filter((val,index,arr) => arr.indexOf(val) === index);
    return keyword;
  },

};
