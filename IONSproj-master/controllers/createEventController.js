module.exports = function(app){
    
    // routing 
app.get('/',function(req,res){
    res.render('index');
});
app.get('/login',function(req,res){
    res.render('login.ejs');
});
app.get('/createFromVoucher',function(req,res){
    res.render('createFromVoucher.ejs');
});
app.get('/createFromScratch',function(req,res){
    res.render('createFromScratch.ejs');
});
app.get('/join',function(req,res){
    res.render('join.ejs');
});
app.get('/userAcc',function(req,res){
    res.render('userAcc.ejs');
});


app.get('/userProfile',function(req,res){
    res.render('userProfile.ejs');
});
app.get('/homeUser',function(req,res){
    res.render('homeUser.ejs');
});
app.get('/error',function(req,res){
    res.render('error.ejs');
});

app.get('eventsCreated',function(req,res){
    res.render('userAccEvents.ejs')
})

};