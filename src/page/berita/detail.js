import React from 'react'
import { useSelector } from 'react-redux'
import { Space, Card } from 'antd';
import {  useLocation } from 'react-router-dom'
import ArchLayout from 'components/general/ArchLayout'
import 'assets/scss/general/nano.scss'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const { Meta } = Card;

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

export default () => {
    const location = useLocation()
    const { berita: { dataList }} = useSelector(state => state)
    const detailBerita = (dataList && dataList?.articles?.find(val => val.author === location?.state?.author)) || {
        author: "feedfeeder",
        content: "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way.",
        description: "Lucid CEO says the EV start-up could eventually be valued like Tesla: 'The sky's the limit'CNBC Could Lucid Stock Help You Become a Millionaire?The Motley Fool Lucid stock rises as orders rise 30% since end of third quarterMarketWatch Shares of EV start-up Lu…",
        publishedAt: "2021-11-16T15:52:26Z",
        source: { id: null, name: 'Slashdot.org' },
        title: "Lucid CEO says the EV start-up could eventually be valued like Tesla: 'The sky's the limit' - CNBC",
        url: "https://slashdot.org/firehose.pl?op=view&amp;id=155246251",
        urlToImage: null
    }

    return (
        <ArchLayout>
            <section className="container">
                <Card
                    hoverable
                    actions={[
                        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    cover={<img alt="example" src={detailBerita?.urlToImage || "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"} />}
                >
                    <Meta
                        title={detailBerita?.content}
                        description={detailBerita?.description}
                    />

                </Card>
            </section>
        </ArchLayout>
    )
}