// 模拟景点数据（前端存储）
const spotData = {
    '岳阳': {
        name: '岳阳楼',
        description: '岳阳楼是中国古代建筑的代表之一，拥有悠久的历史，是岳阳的文化象征。',
        image: 'https://example.com/yueyang.jpg'
    },
    '长沙': {
        name: '岳麓山',
        description: '岳麓山是湖南省长沙市的一个历史文化名山，具有丰富的文化遗产。',
        image: 'https://example.com/yalushan.jpg'
    },
    '张家界': {
        name: '张家界国家森林公园',
        description: '张家界是世界著名的自然景区，以奇特的石峰景观和森林覆盖著称。',
        image: 'https://example.com/zhangjiajie.jpg'
    },
    '常德': {
        name: '桃花源',
        description: '桃花源是常德市的一个著名景区，融合了自然风光和人文历史。',
        image: 'https://example.com/taohuayuan.jpg'
    },
    '衡阳': {
        name: '南岳衡山',
        description: '衡山是中国五岳之一，历史悠久，文化底蕴深厚。',
        image: 'https://example.com/nanyuehengshan.jpg'
    }
};

// 初始化 ECharts 地图
var myChart = echarts.init(document.getElementById('map'));

var option = {
    title: {
        text: '湖南省旅游景点分布',
        subtext: '点击查看景点信息',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },
    geo: {
        map: 'china',
        roam: true,
        zoom: 1.2,
        label: {
            show: true
        },
        itemStyle: {
            areaColor: '#f5f5f5',
            borderColor: '#999'
        },
        emphasis: {
            itemStyle: {
                areaColor: '#d1d1d1'
            }
        }
    },
    series: [
        {
            name: '景点',
            type: 'map',
            mapType: '湖南',
            roam: true,
            label: {
                show: true,
                color: '#fff'
            },
            data: [
                { name: '岳阳', value: 100 },
                { name: '长沙', value: 200 },
                { name: '张家界', value: 300 },
                { name: '常德', value: 150 },
                { name: '衡阳', value: 120 }
            ]
        }
    ]
};

// 设置地图
myChart.setOption(option);

// 处理地图点击事件
myChart.on('click', function (params) {
    // 获取点击的城市名称
    const city = params.name;

    // 获取该城市的景点信息
    const spot = spotData[city];

    if (spot) {
        // 更新景点介绍区域
        const spotInfo = document.getElementById('spot-info');
        spotInfo.innerHTML = `
            <h3>${spot.name}</h3>
            <p>${spot.description}</p>
            <img src="${spot.image}" alt="${spot.name}" style="width: 100%; max-height: 300px; object-fit: cover;">
        `;
    } else {
        // 如果没有找到相关景点
        const spotInfo = document.getElementById('spot-info');
        spotInfo.innerHTML = `
            <h3>该城市暂无详细信息</h3>
            <p>点击地图上的其他景点，查看更多信息。</p>
        `;
    }
});
