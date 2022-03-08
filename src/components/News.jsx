import React, {useState} from 'react';
import {useGetCryptoNewsQuery} from "../services/cryptoNewsApi";
import {Avatar, Card, Col, Row, Select, Typography} from "antd";
import moment from "moment";
import {useGetCryptosQuery} from "../services/cryptoApi";
import Loader from "./Loader";

const demoImage='https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
const {Text,Title}=Typography;
const {Option}=Select;
const News = ({simplified}) => {
    const [newsCategory,setNewsCategory]=useState('CryptoCurrency')
    const {data:cryptoNews,isFetching}=useGetCryptoNewsQuery({newsCategory:newsCategory,count:simplified?6:12});
    const {data:cryptoList}=useGetCryptosQuery(100);
    if(isFetching)return <Loader/>;
    return (
        <Row gutter={[24,24]}>
            {!simplified&& <Col span={24}>
                <Select showSearch
                className={'select-news'}
                placeholder={'Select a Crypto'}
                optionFilterProp={'children'}
                onChange={(value)=>setNewsCategory(value)}
                filterOption={(input,option)=>option.children.toLowerCase().indexOf(input.toLowerCase())>=0}>
                <Option value={'Cryptocurrency'}>Cryptocurrency</Option>
                    {cryptoList?.data?.coins.map((coin)=><Option value={coin.name}>{coin.name}</Option>)}
                </Select>
            </Col>}
            {cryptoNews.value.map((news,i)=>{
                return <Col  xs={24} sm={12} lg={8} key={i}>
                    <Card style={{height:'100%'}} hoverable className={'news-card'}>
                        <a href={news.url} target={'_blank'}>
                            <div className={'news-image-container'}>
                                <Title className={'news-title'} level={4}>{news.name}</Title>
                                <img style={{maxWidth:'200px',maxHeight:"100px"}} alt={news.name} src={news?.image?.thumbnail?.contentUrl||demoImage}/>
                            </div>
                            <p>
                                {news.description>100?`${news.description.subscribe(0,100)} ...`
                                    :news.description}
                            </p>
                            <div className={'provider-container'}>
                                <div>
                                    <Avatar alt={'news'} src={news.provider[0]?.image?.thumbnail?.contentUrl||demoImage}/>
                                    <Text className={'provider-name'}>{news.provider[0]?.name}</Text>
                                </div>
                                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            })}
        </Row>
    );
};

export default News;