
const Timestamp = new Date().getTime();
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '../' : '/', // 根域上下文目录
    //outputDir: 'dist', // 构建输出目录
    lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
    

    // output: {
    //     path: pathlib.resolve('dist'),
    //     //filename: 'bundle.js'
    //     filename: '[name].[contenthash:8].js',
    //     //publicPath: '../../',
    // },
   // vue项目 npm run build 打包项目时为css、js文件加时间戳版本号，防止浏览器缓存
    configureWebpack: { // webpack 配置
        output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
            // path: pathlib.resolve('dist'),
          filename: `js/[name].${process.env.VUE_APP_Version}.${Timestamp}.js`,
          chunkFilename: `js/[name].${process.env.VUE_APP_Version}.${Timestamp}.js`
        },
      },
      
      css:{
        extract:{
        filename:`css/'[name].${process.env.VUE_APP_Version}.${Timestamp}.css`,
        chunkFilename: `css/[name].${process.env.VUE_APP_Version}.${Timestamp}.css`
        }
        
        },

    // devServer: {
    //     open: false,
    //     host: 'localhost',
    //     port: 8858,
    //     https: false,
    //     hotOnly: false,
    //     proxy: { // 配置跨域
    //         '/api': {
    //             target: 'http://localhost:3165/Api', //接口域名
    //             ws: true, //是否代理websockets
    //             changOrigin: true, //是否跨域
    //             pathRewrite: { //重置路径
    //                 '^/api': '/' //这里理解成用‘/api’代替target里面的地址，
    //             }
    //         }
    //     },

    //},
    // devServer: {
    //     open: false,
    //     host: '0.0.0.0',
    //     port: 8858,
    //     https: false,
    //     hotOnly: false,
    //     proxy: { // 配置跨域
    //         '/DevApi': {
    //             target: 'http://120.40.187.174:8702/Api', //接口域名
    //             ws: true, //是否代理websockets
    //             changOrigin: true, //是否跨域
    //             pathRewrite: { //重置路径
    //                 '^/DevApi': '' //这里理解成用‘/api’代替target里面的地址，
    //             }
    //         }
    //     },

    //  },
    devServer: {
        open: false,
        host: '0.0.0.0',
        port: 8858,
        https: false,
        hotOnly: false,
        proxy: { // 配置跨域
            '/DevApi': {
                target: 'http://localhost:3165/Api', //接口域名
                ws: true, //是否代理websockets
                changOrigin: true, //是否跨域
                pathRewrite: { //重置路径
                    '^/DevApi': '' //这里理解成用‘/api’代替target里面的地址，
                }
            }
        },

    },
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "@/styles/globlemain.scss";` //引入全局变量   

            }
        }
    }
}