var config=require("./mongoConfig");
var MongoClient=config.MongoClient;
var mongoose=require("mongoose");
mongoose.connect(config.resourceUrl, {useNewUrlParser:true});

mongoose.connection.on("connected",()=>{console.log("数据库链接成功")})
mongoose.connection.on("error",(err)=>{console.log("数据库链接失败",err)})

var schema=new mongoose.Schema({username:String,password:String,mobile:Number,email:String});
var  landlordData=mongoose.model("landlordData",schema)                         //房东数据表
 
class HandleDataBase {
    
    //查询
    async findOne(data){
        try{
          return await landlordData.findOne(data)

        }catch(err){
            throw new Error(err)
        }
    }
    async insertOne(data){
        try{ 
            await landlordData.create(data)
            console.log("插入成功") 
        }catch(err){
            throw new Error(err)
        }
    }

}

module.exports=new HandleDataBase