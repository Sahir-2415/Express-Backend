const express=require('express');
const authRoutes=require('./routes/auth.routes')
const postRoutes=require('./routes/post.routes')
const cookieParser=require('cookie-parser');
const app=express();

app.use(express.json());
app.use(cookieParser()); // token is not sent in response , it is stored in cookies and for that we use cookie parser

app.use('/api/auth',authRoutes); // forward every request that starts with /api/auth to authRoutes file , then in auth routes if it is /api/auth/register then it will use post wala api that we created 

app.use('/api/post',postRoutes);

module.exports=app;