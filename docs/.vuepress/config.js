module.exports = {
    title: ' EpicDragon',
    description: ' EpicDragon 的小站',
    base: '/HappyEpicDragon/',
    theme: 'reco',
    themeConfig: {
        type: 'blog',
        heroText: null,
        // authorAvatar: 'https://cdn.nlark.com/yuque/0/2022/png/25888621/1654316239296-d91e9665-70ac-4c2b-83e2-da1c58b38904.png?x-oss-process=image%2Fresize%2Cw_402%2Climit_0',
        nav: [
            { text: '首页', link : '/' }, 
            {
                text: ' EpicDragon 的小站 ',
                items: [
                    { text: 'Github', link: 'https://github.com/HappyEpicDragon' }, 
                ]
            },
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
        ],
        blogConfig: {
            category: {
                location: 2,
                text: 'Category'
            },
            tag: {
                location: 3, 
                text: 'Tag'
            }
        },
        // sidebar: [
            // {
            //     title: '我是谁',
            //     path: '/Intro/',
            //     collapsable: false,
            //     children: [
            //         { title: "我的身份", path: "/Intro/Myself" }, 
            //         { title: "目录", path: "/Intro/Index" }
            //     ]
            // }, 
            // {
            //     '/Intro/': [
            //         'Index', 
            //         'Myself'
            //     ], 
        //         '/handbook/': [
        //             'ConditionalTypes', 
        //             'Generics'
        //         ]
            // },
        //     {
        //         title: "基础学习",
        //         path: '/handbook/ConditionalTypes',
        //         collapsable: false, // 不折叠
        //         children: [
        //             { title: "条件类型", path: "/handbook/ConditionalTypes" },
        //             { title: "泛型", path: "/handbook/Generics" }
        //         ],
        //     }
        // ],
        subSidebar: 'auto',
    },
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    }
}