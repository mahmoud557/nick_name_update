var EventEmitter = require('events');
var fetch = require('node-fetch');
var CryptoJS = require("crypto-js");

var stringText={
	parse:function(jsonStr){var j=JSON.parse(jsonStr);var cipherParams=CryptoJS.lib.CipherParams.create({ciphertext:CryptoJS.enc.Base64.parse(j.ct)});if(j.iv){cipherParams.iv=CryptoJS.enc.Hex.parse(j.iv)}if(j.s){cipherParams.salt=CryptoJS.enc.Hex.parse(j.s)}return cipherParams},
	stringify:function(cipherParams){var j={ct:cipherParams.ciphertext.toString(CryptoJS.enc.Base64)};if(cipherParams.iv)j.iv=cipherParams.iv.toString();if(cipherParams.salt)j.s=cipherParams.salt.toString();return JSON.stringify(j)}
}

var description='es in providing gamers with the best service, it provides its se';
var descK='es in providing gamers with the ';

class MyEmitter extends EventEmitter {}

class Manager_Ashab{
	constructor() {
		this.events=new MyEmitter();
		this.fetcher_url='http://18.215.144.232';

		this.description='es in providing gamers with the best service, it provides its se';
		this.descK='es in providing gamers with the ';
		//this.start_ceek_if_awake_interval()
	}

	async get_nick_name_sycle_free_fire(id){
		try{
			var url=`https://as7abcard.com/pubg-files/pubg.php?action=getPlayerName&game=freefire&playerID=${id}`
			var body=CryptoJS.AES.encrypt(JSON.stringify(`${this.description}${id}`),`${this.descK}${id}`,{format:stringText}).toString()
			var options={
				"headers": {
				    "accept": "*/*",
				    "accept-language": "en-US,en;q=0.9,ar;q=0.8",
				    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
				    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Google Chrome\";v=\"99\"",
				    "sec-ch-ua-mobile": "?0",
				    "sec-ch-ua-platform": "\"Windows\"",
				    "sec-fetch-dest": "empty",
				    "sec-fetch-mode": "cors",
				    "sec-fetch-site": "same-origin",
				    "x-requested-with": "XMLHttpRequest",
				    "cookie": "language=arabic",
				    "Referer": "https://as7abcard.com/app/",
				    "Referrer-Policy": "strict-origin-when-cross-origin"
				},
				"body": `${body}`,
				"method": "POST"
			}
			var fetcher_body=JSON.stringify({url,options})
			const response = await fetch(`${this.fetcher_url}/fetch`, {
				"headers": {
				    "accept": "*/*",
				    "accept-language": "en-US,en;q=0.9,ar;q=0.8",
				    "content-type": "application/json",
				  },		
				  "body": fetcher_body,
				  "method": "POST"
			});
			const data = await response.text()	
			console.log(data)		
			if(data!='invalid'){return {result:data,err:false}}
			return {result:false,err:true}
		}catch(err){
			console.log(err)
			return {result:false,err:true}
		}
	}


	async get_nick_name_sycle_pubgy_fire(id){
		try{
			var url=`https://as7abcard.com/pubg-files/pubg.php?action=getPlayerName&game=pubg&playerID=${id}`
			var body=CryptoJS.AES.encrypt(JSON.stringify(`${this.description}${id}`),`${this.descK}${id}`,{format:stringText}).toString()
			var options={
				"headers": {
				    "accept": "*/*",
				    "accept-language": "en-US,en;q=0.9,ar;q=0.8",
				    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
				    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Google Chrome\";v=\"99\"",
				    "sec-ch-ua-mobile": "?0",
				    "sec-ch-ua-platform": "\"Windows\"",
				    "sec-fetch-dest": "empty",
				    "sec-fetch-mode": "cors",
				    "sec-fetch-site": "same-origin",
				    "x-requested-with": "XMLHttpRequest",
				    "cookie": "language=arabic",
				    "Referer": "https://as7abcard.com/app/",
				    "Referrer-Policy": "strict-origin-when-cross-origin"
				},
				"body": `${body}`,
				"method": "POST"
			}
			var fetcher_body=JSON.stringify({url,options})
			const response = await fetch(`${this.fetcher_url}/fetch`, {
				"headers": {
				    "accept": "*/*",
				    "accept-language": "en-US,en;q=0.9,ar;q=0.8",
				    "content-type": "application/json",
				  },		
				  "body": fetcher_body,
				  "method": "POST"
			});
			const data = await response.text()
			console.log(data)
			if(data!='invalid'){return {result:data,err:false}}
			return {result:false,err:true}
		}catch(err){
			return {result:false,err:true}
		}
	}
	start_ceek_if_awake_interval(){
		setInterval(async()=>{
			try{
				console.log('iwill cheek')
				await fetch(`${this.fetcher_url}/awake`)
			}catch(err){
				console.log(err)
			}
		},20000)
	}
 	delay(time){
		return new Promise((res,rej)=>{
			setTimeout(()=>{res()},time)
		})
	}
}



module.exports= new Manager_Ashab

