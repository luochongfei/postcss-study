const 
    // 下一代css语法
    cssnext=require('postcss-cssnext'),

    // 浏览器兼容前缀
    autoprefixer=require('autoprefixer'),

    // css压缩
    cssnano=require('cssnano');

module.exports={
    plugins:[
        cssnext(),
        autoprefixer({
            browsers:['>5%']
        }),
        // cssnano()
    ]
}
