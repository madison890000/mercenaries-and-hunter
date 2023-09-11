import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import {Divider} from "../models/components";

const ImageCard = ({src, description}: any) => (
    <div style={{
        border: '1px solid var(--color-platinum)',
        borderRadius: 4,
        margin: 2,
        // background: 'var(--color-ash-gray)'
    }}>
        <CardMedia
            sx={{height: 340, margin: '12px', backgroundSize: 'contain'}}
            image={src}
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

    return (
        <>
            <CardContent>
                <section>
                    <h4>我们目前适配的网站（持续适配中，欢迎提供意见）：</h4>
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
                    textAlign: "center",
                    marginTop: 20,
                }}>
                    <h3>帮助用户摆脱google全文网页翻译(
                        <a href="https://chrome.google.com/webstore/detail/it-mercenaries-and-hunter/eilakanollhbgdoppbffeikcbkhmeloc?hl=zh-CN&authuser=0"
                           target="_blank">需要安装插件</a>
                        )</h3>
                    <h4>仅将网站重要的信息翻译后填充回网页下方。方便您更容易的查看相关信息。</h4>
                </div>
                <section>
                    <div>翻译服务是自建的服务器，如遇到网络问题，请点击刷新按钮。</div>
                </section>
                <section>
                    <div style={{padding: '12px 0', color: 'gray'}}>任何意见欢迎联系 madison.mh.ma@gmail.com</div>
                </section>
            </CardContent>
        </>
    )
}

export default Websites