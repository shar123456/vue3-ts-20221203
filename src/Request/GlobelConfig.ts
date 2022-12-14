
let G_BASEURL='';
 G_BASEURL=process.env.NODE_ENV === 'production' ? 'http://120.40.187.174:8702/Api' : 'http://localhost:3165/Api';

 //G_BASEURL=process.env.NODE_ENV === 'production' ? 'http://120.40.187.174:8702/Api' : 'http://120.40.187.174:8702/Api';

export {G_BASEURL}