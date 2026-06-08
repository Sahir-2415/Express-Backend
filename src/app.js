const express=require('express');
const authRoutes=require('./routes/auth.routes')
const app=express();

app.use(express.json());

app.use('/api/auth',authRoutes); // forward every request that starts with /api/auth to authRoutes file , then in auth routes if it is /api/auth/register then it will use post wala api that we created 

module.exports=app;