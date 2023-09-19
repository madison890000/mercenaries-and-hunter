import React, {useContext} from "react";
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
import LocaleContext from "../contexts/LocaleContext";
import {LocalesKey} from "../i18n/languages";
import {Card} from "@mui/material";

const images = {
    linkedin: {
        'ja-JP': '/imgs/linkedin-ja-JP.png',
    },
    upwork: {
        'ja-JP': '/imgs/upwork-ja-JP.png',
    },
    freelancer: {
        'ja-JP': '/imgs/freelancer-ja-JP.png',
    }
} as unknown as {
    linkedin: Record<LocalesKey, string>
    upwork: Record<LocalesKey, string>
    freelancer: Record<LocalesKey, string>
};
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
    },

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
                width: 810,
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
const Title = ({content}: any) => (
    <h4>{content}</h4>
)
const DescriptionImage = ({src}: any) => (
    <img src={src} style={{
        border: '1px solid var(--color-light-gray)',
        borderRadius: 8,
        height: 350,
        marginRight: 20,
    }}/>
)
const Support = () => {
    const intl = useIntl();
    const {locale} = useContext(LocaleContext);
    return (
        <>
            <CardContent>
                <Typography variant="h3" gutterBottom>
                    {intl.formatMessage({id:'website.text.1'})}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    {intl.formatMessage({id:'website.text.2'})}（<a
                    href="https://chrome.google.com/webstore/detail/it-mercenaries-and-hunter/eilakanollhbgdoppbffeikcbkhmeloc?hl=zh-CN&authuser=0"
                    target="_blank">{intl.formatMessage(messages.subTitle)}</a>） {intl.formatMessage({id:'website.text.3'})}.

                </Typography>
                <Swiper
                    // @ts-ignore
                    navigation
                    modules={[Navigation]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <ImageCard
                            src={'/imgs/help-5.png'}
                            description={<a href="https://www.freelancer.com/"
                                            target="_blank">{intl.formatMessage({id:'website.text.4'})}</a>}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageCard
                            src={images.linkedin[locale] ?? "/imgs/linkedin.png"}
                            description={
                                <div>{intl.formatMessage({id:'website.text.5'})}</div>
                            }
                        />
                    </SwiperSlide>
                </Swiper>

                <Card style={{
                    marginTop: 20
                }}>
                    <CardContent>
                        <h3 style={{textAlign: 'center'}}>{intl.formatMessage({id:'website.text.6'})}</h3>
                        <section>
                            <Title content={intl.formatMessage({id:'website.text.7'})}/>
                        </section>
                        <section>
                            <Title content={intl.formatMessage({id:'website.text.8'})}/>
                            {intl.formatMessage({id:'website.text.9'})}
                            <div>
                                <DescriptionImage src={'/imgs/help-2.png'}/>
                            </div>
                        </section>
                        <section>
                            <Title content={intl.formatMessage({id:'website.text.10'})}/>
                            {intl.formatMessage({id:'website.text.10.1'})}
                            <div>
                                <DescriptionImage src={'/imgs/help-3.png'}/>
                            </div>
                        </section>
                        <section>
                            <Title content={intl.formatMessage({id:'website.text.11'})}/>
                            {intl.formatMessage({id:'website.text.12'})}
                            <div>
                                <DescriptionImage src={'/imgs/help-4.png'}/>
                                <DescriptionImage src={'/imgs/help-5.png'} style={{
                                    width: 350
                                }}/>
                            </div>
                        </section>
                    </CardContent>
                </Card>
                <Card style={{
                    marginTop: 20
                }}>
                    <CardContent>
                        <h3 style={{textAlign: 'center'}}>{intl.formatMessage({id:'website.text.13'})}</h3>

                        <div style={{
                            textAlign: "left",
                            marginTop: 20,
                        }}>
                            <h5>{intl.formatMessage(messages.title)}</h5>
                            <h5>{intl.formatMessage(messages.description)}</h5>
                        </div>
                        <section>
                            <Title content={intl.formatMessage({id:'website.text.14'})}/>
                        </section>
                        <section>
                            <Title content={intl.formatMessage({id:'website.text.15'})}/>
                            {intl.formatMessage({id:'website.text.16'})}
                            <div>
                                <DescriptionImage src={'/imgs/help-2.png'}/>
                            </div>
                        </section>
                        <section>
                            <Title content={intl.formatMessage({id:'website.text.17'})}/>
                            {intl.formatMessage({id:'website.text.18'})}
                            <div>
                                <DescriptionImage src={'/imgs/help-1.png'}/>
                            </div>
                        </section>
                        <section>
                            <Title content={intl.formatMessage({id:'website.text.19'})}/>
                            {intl.formatMessage({id:'website.text.20'})}
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
                                    src={images.linkedin[locale] ?? "/imgs/linkedin.png"}
                                    description={
                                        <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
                                    }
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ImageCard
                                    src={images.freelancer[locale] ?? "/imgs/freelancer.png"}
                                    description={<a href="https://www.freelancer.com/"
                                                    target="_blank">freelancer</a>}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ImageCard
                                    src={images.upwork[locale] ?? "/imgs/upwork.png"}
                                    description={
                                        <a href="https://www.upwork.com/" target="_blank">upwork</a>
                                    }
                                />
                            </SwiperSlide>
                        </Swiper>
                        <Divider/>
                        <section>
                            <h4>{intl.formatMessage(messages.webs)}: LinkedIn/Upwork/Freelancer</h4>
                        </section>
                        <section>
                            <div>{intl.formatMessage(messages.info)}</div>
                        </section>
                    </CardContent>
                </Card>

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

export default Support