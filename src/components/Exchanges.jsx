// import React from 'react';
// import {Avatar, Col, Collapse, Row, Typography} from "antd";
// import {useGetCryptosExchangesQuery, useGetCryptosQuery} from "../services/cryptoApi";
// import millify from "millify";
// const {Title,Text}=Typography
// const Exchanges = () => {
//     const {data:cryptos,isFetching}=useGetCryptosQuery(100)
//     const {data}=useGetCryptosExchangesQuery()
//     console.log(data)
//     if (isFetching) return 'loading ...'
//     const CollapsePanelHeader = ({coin}) => {
//      return <Row style={{flexDirection:'row',width:'100%'}}>
//           <Col span={6}>
//              <Row align={'middle'}>
//                  <Col span={3}>
//                      <Avatar src={coin.iconUrl}/>
//                  </Col>
//                  <Col><Title level={5}>{coin.name}</Title></Col>
//              </Row>
//           </Col>
//          <Col span={6}><Text>{millify(coin.price)}</Text></Col>
//          <Col span={6}><Text>{millify(coin.marketCap)}</Text></Col>
//          <Col span={6}><Text>{coin.change}</Text></Col>
//
//
//      </Row>
//     }
//     return (
//         <>
//             <Row  gutter={[32,32]}>
//                 <Col span={6}>Exchanges</Col>
//                 <Col span={6}>24h Trade Volume </Col>
//                 <Col span={6}>Market</Col>
//                 <Col span={6}>Change</Col>
//             </Row>
//             <Row>
//                 {cryptos?.data?.coins.map((coin,i)=>{
//                    return <Col span={24} key={i}>
//                        <Collapse defaultActiveKey={['1']} >
//                            <Collapse.Panel header={<CollapsePanelHeader coin={coin}/>} key="1">
//                                <p></p>
//                            </Collapse.Panel>
//                              </Collapse>,
//                     </Col>
//                 })}
//             </Row>
//         </>
//     );
// };
// export default Exchanges;