var express = require('express');
var bodyParser = require('body-parser');
var promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.get('/', function (req,res,next){
    res.end('This route will send all the promotions to you!');
})

promoRouter.post('/', function (req,res,next){
    res.end('This route will add: '+ req.body.promotionName + 'with its description' + req.body.description);
})

promoRouter.put('/', function (req,res,next){
    res.status(403).json({message:'this route doesnot support put'});
})

promoRouter.delete('/', function (req,res,next){
    res.end("This router will delete all ");
})

promoRouter.get('/:promoId', function (req,res,next){
    res.end('This route send details of the promotion: ' + req.params.promoId + ' to you!');
})

promoRouter.post('/:promoId', function (req,res,next){
    res.status(403).json({message:'this route doesnot support put'});
})

promoRouter.put('/:promoId', function (req,res,next){
    res.write('Updating the promotion: ' + req.params.promoId + '\n');
    res.end('Will update the promotion: ' + req.body.name +
        ' with details: ' + req.body.description);
})

promoRouter.delete('/:promoId', function (req,res,next){
    res.end('This route will delete promotion: ' + req.params.promoId);
})

module.exports = promoRouter;
