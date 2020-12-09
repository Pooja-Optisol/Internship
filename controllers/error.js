exports.pageNotFound = (req,res,next) => {
    res.status(404).render('page-not-found',{docTitle:'Page Not Found 404'}) //Render the pug file
    // res.status(404).sendFile(path.join(__dirname,'../','views','page-not-found.html'));
}