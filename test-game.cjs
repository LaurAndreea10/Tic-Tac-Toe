const fs=require('fs'), vm=require('vm'),assert=require('assert/strict');
let s=fs.readFileSync('index.html','utf8').match(/<script>([\s\S]*?)<\/script>/)[1];
s=s.replace('      init();','globalThis.api={winningSegments,getWinner,validateSession,DEFAULT_SETTINGS,DEFAULT_MATCH,boundedMove,app};');
const elements=new Map();function el(){return {style:{},classList:{add(){},remove(){},toggle(){},contains(){return false}},dataset:{},setAttribute(){},addEventListener(){},value:'',textContent:'',querySelectorAll(){return []}};}
const document={querySelector(q){if(!elements.has(q))elements.set(q,el());return elements.get(q)},querySelectorAll(){return []},body:el()};
const ctx={document,localStorage:{getItem(){return null}},console,window:{},setTimeout,clearTimeout};vm.createContext(ctx);vm.runInContext(s,ctx);const a=ctx.api;
let count=0;for(let n=3;n<=6;n++)for(let g=2;g<=n;g++)for(const line of a.winningSegments(n,g)){let b=Array(n*n).fill(null);line.forEach(i=>b[i]='O');assert.equal(a.getWinner(b,n,g).player,'O');count++;}
const good={version:1,settings:{...a.DEFAULT_SETTINGS},match:a.DEFAULT_MATCH()};assert.equal(a.validateSession(good).match.board.length,9);
for(const change of [v=>v.match.scores=null,v=>v.match.board=['X'],v=>v.settings.boardSize=100,v=>v.settings.player1Name='<img>',v=>v.match.turn='Z',v=>v.match.round=-1]){let value=JSON.parse(JSON.stringify(good));change(value);assert.throws(()=>a.validateSession(value));}
a.app.settings.boardSize=6;a.app.settings.winLength=4;a.app.match.board=Array(36).fill(null);a.app.match.board[0]='O';a.app.match.board[1]='O';a.app.match.board[2]='O';assert.equal(a.boundedMove('O'),3);
a.app.match.board[0]='X';a.app.match.board[1]='X';a.app.match.board[2]='X';assert.equal(a.boundedMove('O'),3);
console.log(count+' winner paths, backup validation and AI immediate win/block passed');
