import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import {Divider} from "../models/components";
import {defineMessages, useIntl} from "react-intl";

/**
 *   "website.webs": "我们目前适配的网站（持续适配中，欢迎提供意见）",
 *   "website.title": "帮助用户摆脱google全文网页翻译(需要安装插件)",
 *   "website.description": "仅将网站重要的信息翻译后填充回网页下方。方便您更容易的查看相关信息。",
 *   "website.info": "翻译服务是自建的服务器，如遇到网络问题，请点击刷新按钮。",
 *   "website.help": "任何意见欢迎联系"
 * @param src
 * @param description
 * @constructor
 */
const messages = defineMessages({
    webs: {
        id: 'website.webs',
    },
    title: {
        id: 'website.title',
    },
    subTitle: {
        id: 'website.sub-title',
    },
    description: {
        id: 'website.description',
    },
    info: {
        id: 'website.info',
    },
    help: {
        id: 'website.help',
    }
});
const ImageCard = ({src, description}: any) => (
    <div style={{
        border: '1px solid var(--color-platinum)',
        borderRadius: 4,
        margin: 2,
        width: 1170,
        height: 675,
        backgroundSize: "100% 100%",
        backgroundImage: 'url(./imgs/pc.jpg)'
        // background: 'var(--color-ash-gray)'
    }}>
        <img
            style={{
                width:810,
                height: 476,
                position: 'absolute',
                top: 92,
                left: 180,
            }}
            src={src}
            title="green iguana"
        />
        <CardContent style={{
            textAlign: 'center',
        }}>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
        </CardContent>
    </div>
)

const Websites = () => {
    const intl = useIntl();
    return (
        <>
            <CardContent>
                <section>
                    <h4>{intl.formatMessage(messages.webs)}：</h4>
                </section>
                <Swiper
                    // @ts-ignore
                    navigation
                    modules={[Navigation]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <ImageCard
                            src="/imgs/linkedin.png"
                            description={
                                <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageCard
                            src="/imgs/freelancer.png"
                            description={<a href="https://www.freelancer.com/"
                                            target="_blank">freelancer</a>}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageCard
                            src="/imgs/upwork.png"
                            description={
                                <a href="https://www.upwork.com/" target="_blank">upwork</a>
                            }
                        />
                    </SwiperSlide>
                </Swiper>
                <Divider/>
                <div style={{
                    textAlign: "left",
                    marginTop: 20,
                }}>
                    <h3>{intl.formatMessage(messages.title)}(
                        <a href="https://chrome.google.com/webstore/detail/it-mercenaries-and-hunter/eilakanollhbgdoppbffeikcbkhmeloc?hl=zh-CN&authuser=0"
                           target="_blank">{intl.formatMessage(messages.subTitle)}</a>
                        )</h3>
                    <h4>{intl.formatMessage(messages.description)}</h4>
                </div>
                <section>
                    <div>{intl.formatMessage(messages.info)}</div>
                </section>
                <section>
                    <div style={{
                        padding: '12px 0',
                        color: 'gray'
                    }}>{intl.formatMessage(messages.help)} madison.mh.ma@gmail.com
                    </div>
                </section>
            </CardContent>
        </>
    )
}

export default Websites