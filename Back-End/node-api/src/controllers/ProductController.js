const mongoose=require("mongoose")
const Product=mongoose.model("Product");

module.exports={
    //Mostrar informações
    async index(req,res){
    const {page =1}=req.query;
    const products=await Product.paginate({},{page,limit:10});//CHAVES VAZIA É PARA UMA QUERRY EX:WHERE ...
return res.json(products); 

},

//FUNÇÃO PARA DETALHAR CADA OBJETO

async show(req,res){

    const product=await Product.findById(req.params.id);

    return res.json(product);

},

//FUNÇÃO PARA ATUALIZAR----------------------------------------------

async update(req,res){
    const product= await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,useFindAndModify:false
    });
    return res.json(product);
},
//FUNÇÃO PARA DELETAR------------------------------------------------
async destroy(req,res){

  await Product.findByIdAndRemove(req.params.id);  
return res.send();
},
//INSERIR INFORMAÇÕES-------------------------------------------------

async store(req,res){
    
    const product=await Product.create(req.body);

    return res.json(product);

}




};