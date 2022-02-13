//配置webpack
/**
 * 1.npm init初始化包描述文件
 * 2.下包 webpack_test  npm i webpack webpack-cli -g全局安装
 *      npm i webpack webpack-cli -D 安装开发依赖
 * 
 * 
 */
module.exports = {
    extry:'./src/index.js' , //入口文件
    output:{
        filename:'built.js', //输出文件
        path:resolve(__dirname,'build')  //路径
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            //打包其他资源（除了html/js/css资源以外的资源）
            {
                exclude:/\.(css|js|html|less)$/,
                loader:'file-loader',
                options:{
                    name:'[hash:10].[ext]'  //输出的名称为10位，不想太长
                }
            }
        ]
    },
    //plugins（插件）可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development'
}
