const koa=require("koa");
const koaBody=require("koa-body");
const koaStatic=require("koa-static");
const router=require("koa-router")()
var dbClient=require("./sqlDrive");
var cors=require("koa-cors")
var app=new koa()
var crypto=require("crypto");



const salt="mayi";

app.use(koaBody({
    multipart:true
}))
app.use(koaStatic(__dirname+"/build"))
app.use(cors())
app.use(router.routes())
app.use(router.allowedMethods())

router.post("/api/register",async (ctx)=>{
   
    let {username,password,mobile,email}=ctx.request.body;
    console.log("ctx.request.body:",ctx.request.body)
   
    //
    let findRes=await dbClient.findOne({$or:[{username},{mobile},{email}]})
    console.log("findRes:",findRes)
    if(findRes){
        ctx.body={
            result:false,
            errInfo:"该用户名或者手机号/邮箱已注册"
        }
    }else{
        //加密密码
        var md5=crypto.createHash("md5");
        var newPassword=md5.update(password+salt,'utf8').digest('hex');
        console.log("newpassword");
        var data={
            username,
            password:newPassword,
            mobile,
            email    
        }
        let res=dbClient.insertOne(data);
        ctx.body={
            result:true
        }
    }
})

router.post("/api/login",async (ctx)=>{
    
    let{username,password}=ctx.request.body;
    var md5=crypto.createHash("md5");
    var md5password= md5.update(password+salt,'utf8').digest('hex');
    let findRes=await dbClient.findOne({username}); //返回值是一条数据
  
        //核对加密后的密码和数据库密码是否一致  
        if(findRes.password===md5password){
           ctx.body={
            result:true
           }
        }else{
       
            ctx.body={
                result:false,
                errInfo:"用户名不存在"
            } 
        } 
})
    

    








app.listen(8989)