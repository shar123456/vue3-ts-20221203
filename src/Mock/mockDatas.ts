/* eslint-disable @typescript-eslint/no-explicit-any */
import Mock from 'mockjs'
// import {IDataItem,} from '../TypeInterface/userInterface'
//安装mock的命令  npm i mockjs
//在shims-vue.d.ts文件中进行类型声明证明这个库是安全的   declare module 'mockjs'，否则因为mockjs的时候会报错,
//在main.ts文件中导入import './Mock/mockDatas'
Mock.setup({ 
    timeout: 10 //设置一个延迟时间虚拟服务器响应效果
})

Mock.mock(
    '/mock/Authentication/Login',
    'post',
    (req:any) => {
 
        const { password, user } = JSON.parse(req.body)
        console.log(password,user);
        if (user === 'admin' && password === '123456') {
            return { success: true,code:200,token:"mockadmin123456" }


        } else {
            return { success: false,code:400 }
        }
    }
)

Mock.mock(
  '/mock/register',
  'post',
  (req:any) => {

      const { password, user,passwordCheck,code } = JSON.parse(req.body)
      if (user!="") {
          return { success: true,code:200}


      } else {
          return { success: false,code:400 }
      }
  }
)
Mock.mock(
  '/mock/GetCode',
  'post',
  (req:any) => {

    const velidateCode=Math.floor(Math.random()*(9999-1000))+1000;
     
          return { success: true,code:200,velidateCode}


      
  }
)




const columnsList = [
    { title: "用户Id", width: 100, dataIndex: "Id", key: "name" },
    { title: "用户名",sorter: true, width: 100, dataIndex: "Name", key: "age" },
    { title: "密码", width: 100, dataIndex: "password", key: "1", },
    { title: "性别", filters: [
        { text: '男', value: '男' },
        { text: '女', value: '女' },
      ], width: 100, dataIndex: "sex", slots: { customRender: 'sex' }, key: "2" ,},
    { title: "状态", width: 100, dataIndex: "IsUse",slots: { customRender: 'IsUse' }, key: "3" },
    { title: "地址", width: 150, dataIndex: "address", key: "4" },
    { title: "手机号", width: 150, dataIndex: "phone", key: "5" },
    { title: "E-mail", width: 150, dataIndex: "email", key: "6" },
    { title: "Level", width: 100, dataIndex: "level", key: "7" },
     { title: "备注", width: 100, dataIndex: "desc", key: "8" },
  
    {
      title: "操作",
      key: "operation",
  
      width: 90,
      slots: { customRender: "action"  }
    },
  ];
  const data:Array<any> = 
  [
    {
      key: "1",
      seq: 1,
      Id: "0001",
      Name: 'king',
      password: `123456`,
      sex: `男`,
      IsUse: `启用`,
      address: `福建省厦门市`,
      phone: `13588889658`,
      email: `1245@qq.com`,
      level: `v1`,
      desc: `暂无`,
    },
    {
        key: "2",
        seq: 2,
        Id: "0002",
        Name: 'star',
        password: `123456`,
        sex: `女`,
        IsUse: `启用`,
        address: `福建省厦门市`,
        phone: `115855559658`,
        email: `98657@qq.com`,
        level: `v2`,
        desc: `暂无`,
      },
      {
        key: "3",
        seq: 3,
        Id: "0003",
        Name: 'star',
        password: `123456`,
        sex: `男`,
        IsUse: `禁用`,
        address: `福建省厦门市`,
        phone: `115855559658`,
        email: `98657@qq.com`,
        level: `v2`,
        desc: `暂无`,
      },
      {
        key: "4",
        seq: 4,
        Id: "0004",
        Name: 'star',
        password: `123456`,
        sex: `女`,
        IsUse: `禁用`,
        address: `福建省厦门市`,
        phone: `115855559658`,
        email: `98657@qq.com`,
        level: `v2`,
        desc: `暂无`,
      },
      {
        key: "5",
        seq: 5,
        Id: "0005",
        Name: 'star',
        password: `123456`,
        sex: `男`,
        IsUse: `禁用`,
        address: `福建省厦门市`,
        phone: `115855559658`,
        email: `98657@qq.com`,
        level: `v2`,
        desc: `暂无`,
      },
      {
        key: "6",
        seq: 6,
        Id: "0006",
        Name: 'star',
        password: `123456`,
        sex: `女`,
        IsUse: `禁用`,
        address: `福建省厦门市`,
        phone: `115855559658`,
        email: `98657@qq.com`,
        level: `v2`,
        desc: `暂无`,
      },
      {
        key: "7",
        seq: 7,
        Id: "0007",
        Name: 'star',
        password: `123456`,
        sex: `男`,
        IsUse: `启用`,
        address: `福建省厦门市`,
        phone: `115855559658`,
        email: `98657@qq.com`,
        level: `v2`,
        desc: `暂无`,
      },
      {
        key: "8",
        seq: 8,
        Id: "0008",
        Name: 'star',
        password: `123456`,
        sex: `男`,
        IsUse: `禁用`,
        address: `福建省厦门市`,
        phone: `115855559658`,
        email: `98657@qq.com`,
        level: `v2`,
        desc: `暂无`,
      },
      {
        key: "9",
        seq: 9,
        Id: "0009",
        Name: 'star',
        password: `123456`,
        sex: `男`,
        IsUse: `启用`,
        address: `福建省厦门市`,
        phone: `115855559658`,
        email: `98657@qq.com`,
        level: `v2`,
        desc: `暂无`,
      },
      {
        key: "10",
        seq: 10,
        Id: "0010",
        Name: 'star',
        password: `123456`,
        sex: `男`,
        IsUse: `禁用`,
        address: `福建省厦门市`,
        phone: `115855559658`,
        email: `98657@qq.com`,
        level: `v2`,
        desc: `暂无`,
      },
      {
        key: "11",
        seq: 11,
        Id: "0011",
        Name: 'star',
        password: `123456`,
        sex: `男`,
        IsUse: `禁用`,
        address: `福建省厦门市`,
        phone: `115855559658`,
        email: `98657@qq.com`,
        level: `v2`,
        desc: `暂无`,
      },
      {
        key: "12",
        seq: 12,
        Id: "0012",
        Name: 'star',
        password: `123456`,
        sex: `男`,
        IsUse: `启用`,
        address: `福建省厦门市`,
        phone: `115855559658`,
        email: `98657@qq.com`,
        level: `v2`,
        desc: `暂无`,
      },
      {
        key: "13",
        seq: 13,
        Id: "0013",
        Name: 'star',
        password: `123456`,
        sex: `男`,
        IsUse: `启用`,
        address: `福建省厦门市`,
        phone: `115855559658`,
        email: `98657@qq.com`,
        level: `v2`,
        desc: `暂无`,
      },
      {
        key: "14",
        seq: 14,
        Id: "0014",
        Name: 'star',
        password: `123456`,
        sex: `男`,
        IsUse: `启用`,
        address: `福建省厦门市`,
        phone: `115855559658`,
        email: `98657@qq.com`,
        level: `v2`,
        desc: `暂无`,
      },
      
  ];
//get请求无参数
Mock.mock(
    '/mock/UserListColumn',
    'get',
    (req:any) => {
        const columnsData = columnsList.filter(i => i.title !="");
        return {
            code:200,
            success: true,
            columns:columnsData
        }
    }
)
//get请求无参数
Mock.mock(
    '/mock/UserDatas',
    'post',
    (req:any) => {
    
        const { current, pageSize,Id ,Name,phone,Email,IsUse,sex} = JSON.parse(req.body)
    
        const skip = pageSize * (current - 1);
        const num = pageSize * current;
        //console.log(current*1)
        let datas:any[] = data.filter(i => i.key !="");
        if(Id!=undefined&&Id!="")
        {
          datas = datas.filter(i=>i.Id.indexOf(Id)>=0);
        }
        if(Name!=undefined&&Name!="")
        {
          datas = datas.filter(i=>Name.indexOf(i.Name)>=0);
        }
        if(phone!=undefined&&phone!="")
        {
          datas = datas.filter(i=>phone.indexOf(i.phone)>=0);
        }
        if(Email!=undefined&&Email!="")
        {
          datas = datas.filter(i=>Email.indexOf(i.email)>=0);
        }
        if(IsUse!=undefined&&IsUse!="未选择")
        {
          datas = datas.filter(i=>IsUse.indexOf(i.IsUse)>=0);
        }
        if(sex!=undefined&&sex!="未选择")
        {
          datas = datas.filter(i=>sex.indexOf(i.sex)>=0);
        }
        const total=datas?.length;
        datas= datas.filter(i =>  i.seq <= num && i.seq > skip);
       
        return {
            code:200,
            success: true,
            data:datas,
            total:total
        }
    }
)


Mock.mock(/\/mock\/Job.*/,'get',{
  'data|5':[{
    "id":1,
    "Name":"king"
  }]
})
Mock.mock('/mock/Job2','post',{code:200})





// let GoodsList = [

//     {
//         "id": 1,
//         "title": "高端显微镜",
//         "price": 45,
//         "stock": 62,
//         "sales": 0,
//         "type": "sales",
//         "collects_count": 0,
//         "cover": "product/2020-0820-5f3e17d6ed7e8.png",
//         "description": "精密美观 / 《使用手册》",
//         "cover_url": "assets/images/1.jpg",
//         "category_id": 1
//     },
//     {
//         "id": 2,
//         "title": "光学显微镜",
//         "price": 55,
//         "stock": 23,
//         "sales": 0,
//         "type": "new",
//         "collects_count": 0,
//         "cover": "product/2020-0820-5f3e177b79824.png",
//         "description": "云诊断 / 《远程连接》",
//         "cover_url": "assets/images/4.jpg",
//         "category_id": 1
//     },
// ]

// //post请求
// Mock.mock(
//     '/api/login',
//     'post',
//     (req) => {
//         const { password, username } = JSON.parse(req.body);
//         if (username === 'admin' && password === '123456') {
//             return { success: true, code: 200, token: 'admintoken' }
//         } else {
//             return {
//                 succcess: false
//             }
//         }
//     }
// )

// //get请求无参数
// Mock.mock(
//     '/api/getGoods',
//     'get',
//     (req) => {
//         let goodsInfo = GoodsList.filter(i => i.id > 0);
//         return {
//             success: true,
//             goods: {
//                 data: goodsInfo
//             }
//         }
//     }
// )

// //get请求有参数
// Mock.mock(
//     RegExp('/api/getGoodsByType' + ".*"),
//     'get',
//     (req) => {
//         let type = "";
//         let page = 0
//         let params = req.url.split('?')[1];
//         params.split('&').forEach(element => {
//             let temp = element.split('=')[0];
//             if (temp == "type") {
//                 type = element.split('=')[1];
//             }
//             if (temp == "page") {
//                 page = element.split('=')[1];
//             }
//         });
//         //console.log(type);
//         let skip = 10 * (page - 1);
//         let num = 10 * page;
//         //console.log(skip + "-" + num);
//         //let goodsInfo = GoodsList.filter(i => i.id <= num && i.id >= skip && i.type == type);
//         let goodsInfo = GoodsList.filter(i => i.type == type);
//         return {
//             success: true,
//             goods: {
//                 data: goodsInfo
//             }
//         }
//     }

// )