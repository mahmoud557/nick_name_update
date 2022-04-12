var EventEmitter = require('events');
var express = require('express')
var cors = require('cors')
var path = require('path')
var bodyParser = require('body-parser');
var fetch = require('node-fetch');
class MyEmitter extends EventEmitter {}

class Fetcher{

	constructor() {
		this.events=new MyEmitter();
		this.start()
	}

	//582TrK6cMtENwyL1a6
	async start(){
		this.http_server = express()
		this.http_server.use(cors())
		this.http_server.use(express.json());

		this.http_server.get('/awake',async(req,res)=>{
			try{
				console.log(true)
				await this.delay(20000)
				res.send({state:true})
			}catch(err){
				console.log(err)
			}
		})

		this.http_server.post('/fetch',async(req,res)=>{
			try{
				var url=req.body.url;
				var options=req.body.options;
				console.log(url,options)
				//this.fetch_requste(url,options,res)
			}catch(err){
				console.log(err)
			}
		})

		this.http_server.listen(80)
	}

	async fetch_requste(url,options,res){
		try{
			console.log('iwill')
	 		const response = await fetch(url,options);
	 		console.log('down')
	 		res.set('oragenal_headers',response.headers)
	 		response.body.pipe(res)
		}catch(err){
			res.set("fetcher_error",'true')
			res.end()
		}
	}	

 	delay(time){
		return new Promise((res,rej)=>{
			setTimeout(()=>{res()},time)
		})
	}
}


var fetcher=new Fetcher
