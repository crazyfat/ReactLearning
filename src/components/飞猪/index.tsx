import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css'

interface ITags {
    /** 标签图片 */
    icon?: string;
    /** 标签文案 */
    text?: string;
    /** 标签背景色 */
    bgColor?: string;
    /** 标签字体颜色 */
    textColor?: string;
}

interface ICardData {
    /** 商品名 */
    title: string;
    /** 商品描述 */
    des?: string;
    /** 商品图片 */
    img: string;
    /** 商品类型 */
    type?: string;
    /** 营销标签列表 */
    tags?: string | ITags[];
    /** 价格 */
    price: string;
    /** 原价 */
    originalPrice?: string;
}

interface ICardList {
    /** tab名称 */
    tabName: string;
    /** tab下的卡片列表数据 */
    data?: ICardData[]
}

const cardListData: ICardList[] = [
    {
        tabName: '爆款清单',
        data: [{
            title: '丽江爱必侬酒店2晚',
            des: '入住雪山景酒店',
            img: 'https://gw.alicdn.com/imgextra/O1CN01eNQPHX1n6pPImSWNZ_!!6000000005041-0-yinhe.jpg',
            type: '丽江·酒店',
            price: '784',
            tags: 'https://img.alicdn.com/imgextra/i3/O1CN012KFvkF1Zm8Vm7pc5b_!!6000000003236-2-tps-399-90.png'
        }, {
            title: '温德姆全国39家2晚',
            des: '畅行无忧 随心住',
            img: 'https://gw.alicdn.com/imgextra/O1CN01WoAKNA1lUz46DsVma_!!6000000004823-0-yinhe.jpg',
            type: '多地通用·酒店',
            price: '584',
            originalPrice: '599',
            tags: [{
                icon: 'https://img.alicdn.com/imgextra/i3/O1CN012KFvkF1Zm8Vm7pc5b_!!6000000003236-2-tps-399-90.png'
            }, {
                text: '不约可退',
                bgColor: '#FFEEEE',
                textColor: '#FF401A'
            }]
        }, {
            title: '西双版纳万达颐华2-3晚',
            des: '沉浸式体验傣族风情度假,开心度假',
            img: 'https://gw.alicdn.com/imgextra/O1CN01OEPnEL1gVNKGnc2ZG_!!6000000004147-0-yinhe.jpg',
            price: '1484',
            originalPrice: '1499',
            tags: [{
                text: '不约可退',
                bgColor: '#FFEEEE',
                textColor: '#FF401A'
            }, {
                text: '多店通用',
                bgColor: '#FFEEEE',
                textColor: '#FF401A'
            }]
        }, {
            title: '环球影城大酒店小黄人主题房1晚房券',
            img: 'https://gw.alicdn.com/imgextra/O1CN01zdguST22GBjvVSGy8_!!6000000007092-0-yinhe.jpg',
            type: '北京·酒店',
            price: '1873',
            originalPrice: '1888',
            tags: 'https://img.alicdn.com/imgextra/i3/O1CN012KFvkF1Zm8Vm7pc5b_!!6000000003236-2-tps-399-90.png'
        }]
    },
    {
        tabName: '精选好货',
        data: [{
            title: '西双版纳万达颐华2-3晚套餐',
            des: '沉浸式体验傣族风情度假',
            img: 'https://gw.alicdn.com/imgextra/O1CN01OEPnEL1gVNKGnc2ZG_!!6000000004147-0-yinhe.jpg',
            price: '1484',
            originalPrice: '1499',
            tags: [{
                text: '不约可退',
                bgColor: '#FFEEEE',
                textColor: '#FF401A'
            }, {
                text: '多店通用',
                bgColor: '#FFEEEE',
                textColor: '#FF401A'
            }]
        }, {
            title: '丽江爱必侬酒店2晚亲子套餐',
            des: '入住雪山景酒店',
            img: 'https://gw.alicdn.com/imgextra/O1CN01eNQPHX1n6pPImSWNZ_!!6000000005041-0-yinhe.jpg',
            type: '丽江·酒店',
            price: '784',
            tags: 'https://img.alicdn.com/imgextra/i3/O1CN012KFvkF1Zm8Vm7pc5b_!!6000000003236-2-tps-399-90.png'
        }, {
            title: '温德姆全国39家2晚可拆分套餐',
            des: '畅行无忧 随心住',
            img: 'https://gw.alicdn.com/imgextra/O1CN01WoAKNA1lUz46DsVma_!!6000000004823-0-yinhe.jpg',
            type: '多地通用·酒店',
            price: '584',
            originalPrice: '599',
            tags: [{
                icon: 'https://img.alicdn.com/imgextra/i3/O1CN012KFvkF1Zm8Vm7pc5b_!!6000000003236-2-tps-399-90.png'
            }, {
                text: '不约可退',
                bgColor: '#FFEEEE',
                textColor: '#FF401A'
            }]
        }, {
            title: '环球影城大酒店',
            img: 'https://gw.alicdn.com/imgextra/O1CN01zdguST22GBjvVSGy8_!!6000000007092-0-yinhe.jpg',
            type: '北京·酒店',
            price: '1873',
            originalPrice: '1888'
        }]
    }
];

const CardList: React.FC = () => {
    const [idx, setIdx] = useState(0);
    const p = cardListData[idx].data || [];
    const arr = [1,2,3]
    return (
        <>
            <div className="tab-container">
                <div style={{display:"flex"}}>
                    <button style={{backgroundColor: idx==0?'#FFE644':'#FFFFFF'}} className="top-button" onClick={()=>setIdx(0)}>爆款清单</button>
                    <button style={{backgroundColor: idx==1?'#FFE644':'#FFFFFF', marginLeft:"0.24rem"}} className="top-button" onClick={()=>setIdx(1)}>爆款清单1</button>
                </div>
            </div>
            <div className="card-container">
                {
                    p.map((item, idx)=>{
                        return <div style={{ display:"flex", marginLeft: idx%2==0?'':'0.18rem', width:'3.42rem'}}>
                                    <div className="item">
                                        <div className="item-type">{item.type}</div>
                                        <img className="item-img" src={item.img}/>
                                        <div className="item-info">
                                            <div style={{
                                                width:"100%",
                                                textAlign:"left",
                                                fontSize:"0.28rem",
                                                fontWeight:"bold",
                                                overflow:"hidden",
                                                textOverflow:"ellipsis",
                                                whiteSpace:"nowrap"
                                            }}>{item.title}</div>
                                            <div style={{
                                                width:"100%",
                                                textAlign:"left",
                                                fontSize:"0.22rem",
                                                color:"#575757",
                                                overflow:"hidden",
                                                textOverflow:"ellipsis",
                                                whiteSpace:'pre'
                                            }}>{item.des || ' '}</div>
                                            <div style={{display:'flex', flexDirection:'row', width:'100%'}}>
                                                {
                                                    Array.isArray(item.tags)?
                                                        item.tags.map((v, idx)=>{
                                                            return v.icon?
                                                                <img src={v.icon} style={{
                                                                    marginLeft: idx%2==0?'':'0.05rem',
                                                                    height:'0.28rem'
                                                                }}/>
                                                                :
                                                                <div style={{
                                                                    fontSize:'0.2rem',
                                                                    marginLeft: idx%2==0?'':'0.05rem',
                                                                    backgroundColor:v.bgColor,
                                                                    color:v.textColor
                                                                }}>{v.text}</div>
                                                        })
                                                        :
                                                        <img style={{
                                                            height:'0.28rem'
                                                        }} src={item.tags}/>
                                                }
                                            </div>
                                            <div className="item-info-price">
                                                <div style={{
                                                    fontSize:"0.32rem",
                                                    color:"#FF0000",
                                                    fontWeight:"bold"
                                                }}>{item.price}元</div>
                                                {item.originalPrice && <div style={{
                                                    fontSize:"0.20rem",
                                                    color:"#999999",
                                                    textDecoration:"line-through",
                                                    marginLeft:"0.18rem"
                                                }}>{item.originalPrice}元</div>}
                                            </div>
                                        </div>
                                    </div>
                        </div>
                    })
                }
            </div>
            <div style={{ width:"07.02rem", marginLeft:"0.24rem" }}>
                <button className="bot-button">换一换</button>
            </div>
        </>
    );
};
export default CardList;