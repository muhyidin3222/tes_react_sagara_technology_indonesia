import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { List, Space, Card } from 'antd';
import { useHistory } from 'react-router-dom'

import { getBerita } from 'actions'
import ArchLayout from 'components/general/ArchLayout'
import 'assets/scss/general/nano.scss'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

export default () => {
    const history = useHistory()
    const { berita: { dataList }, global: { loadingGlobal } } = useSelector(state => state)
    const pagination = { total_items: 10, page: 1 }
    const dispatch = useDispatch()
    useEffect(() => {

        const dispatchGetBerita = () => {
            dispatch(getBerita(pagination))
        }

        dispatchGetBerita()

    }, [])

    console.log(dataList?.articles)

    return (
        <ArchLayout>
            <section className="container">
                <Card
                    style={{ paddingTop: 50 }}
                >
                    <List
                        itemLayout="vertical"
                        size="large"
                        loading={loadingGlobal}
                        dataSource={dataList?.articles}
                        renderItem={item => (
                            <List.Item
                                key={item.title}
                                actions={[
                                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                ]}
                                extra={
                                    <img
                                        width={272}
                                        alt="logo"
                                        src={item?.urlToImage}
                                    />
                                }
                            >
                                <List.Item.Meta
                                    // avatar={<Avatar src={item?.avatar} />}
                                    title={<a onClick={() => history.push({ pathname: "/berita", state: { author: item.author } })}>{item?.title}</a>}
                                    description={item?.description}
                                />
                                {item.content}
                            </List.Item>
                        )}
                    />
                </Card>
            </section>
        </ArchLayout>
    )
}