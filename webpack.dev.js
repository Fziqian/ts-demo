const path=require('path');
module.exports={
    mode:'production',
    entry:path.resolve(__dirname,"./src/ts/main.ts"),
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:"bundle.js"
    }, 
    devServer:{
        contentBase:'./dist'
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:'ts-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
};