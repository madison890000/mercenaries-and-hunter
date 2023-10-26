import React, { useContext } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Divider from '../components/Divider';
import { defineMessages, useIntl } from 'react-intl';
import LocaleContext from '../contexts/LocaleContext';
import { Card } from '@mui/material';
import {
  FREELANCER_OFFICIAL_WEB_ADDRESS,
  LINKEDIN_OFFICIAL_WEB_ADDRESS,
  UPWORK_OFFICIAL_WEB_ADDRESS,
  WEB3_CAREER_OFFICIAL_WEB_ADDRESS
} from '../constants/domain';
import { HELP_IMAGES, SCREEN_SHOT_IMAGES_WITH_LOCALE } from '../constants/images';
import TranslateHelp from '../modules/Help/translate';
import CL from '../modules/Help/cl';
import { Col, Row } from 'antd';

const messages = defineMessages({
  webs: {
    id: 'website.webs'
  },
  title: {
    id: 'website.title'
  },
  subTitle: {
    id: 'website.sub-title'
  },
  description: {
    id: 'website.description'
  },
  info: {
    id: 'website.info'
  },
  help: {
    id: 'website.help'
  }
});
const ImageCard = ({ src, description, style }: any) => (
  <div
    style={{
      border: '1px solid var(--color-platinum)',
      borderRadius: 4,
      margin: 'auto',
      position: 'relative',
      width: 980,
      height: 600,
      backgroundSize: '100% 100%',
      backgroundImage: 'url(./imgs/pc.jpg)',
      ...style
    }}
  >
    <img
      style={{
        width: 680,
        height: 425,
        position: 'absolute',
        top: 79,
        left: 145
      }}
      src={src}
      title="green iguana"
    />
    <CardContent
      style={{
        textAlign: 'center'
      }}
    >
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </div>
);
const Title = ({ content }: any) => <h4>{content}</h4>;
const DescriptionImage = ({ src, style }: any) => (
  <img
    src={src}
    style={{
      border: '1px solid var(--color-light-gray)',
      borderRadius: 8,
      // height: 350,
      marginRight: 20,
      marginTop: 12,
      ...style
    }}
  />
);
const Support = () => {
  const intl = useIntl();
  const { locale } = useContext(LocaleContext);
  return (
    <div
      style={{
        textAlign: 'center'
      }}
    >
      <CardContent>
        <Card
          style={{
            margin: 20,
            backgroundColor: 'var(--color-blue-9)'
          }}
        >
          <CardContent>
            <Row align="middle">
              <Col span={8}>
                <section>
                  <Title content={intl.formatMessage({ id: 'website.text.7' })} />
                  <Title content={intl.formatMessage({ id: 'website.text.8' })} />
                  {intl.formatMessage({ id: 'website.text.9' })}
                  <Title content={intl.formatMessage({ id: 'website.text.10' })} />
                  {intl.formatMessage({ id: 'website.text.10.1' })}
                  <Title content={intl.formatMessage({ id: 'website.text.11' })} />
                  {intl.formatMessage({ id: 'website.text.12' })}
                </section>
              </Col>
              <Col span={16}>
                <section>
                  <DescriptionImage
                    src={HELP_IMAGES.defaultExtensionPopup}
                    style={{
                      height: 250
                    }}
                  />
                  <DescriptionImage
                    src={HELP_IMAGES.markSiteInExtensionPopup}
                    style={{
                      height: 250
                    }}
                  />
                  <DescriptionImage
                    src={HELP_IMAGES.appliedListButtonInExtensionPopup}
                    style={{
                      height: 250
                    }}
                  />
                  <DescriptionImage
                    src={HELP_IMAGES.appliedListInWeb}
                    style={{
                      height: 250
                    }}
                  />
                </section>
              </Col>
            </Row>
          </CardContent>
        </Card>
        <Divider title="Tools" />
        <TranslateHelp />
        <CL />
        <Card
          style={{
            margin: 20,
            backgroundColor: 'var(--color-blue-8)'
          }}
        >
          <CardContent>
            <h3 style={{ textAlign: 'center' }}>{intl.formatMessage({ id: 'website.text.13' })}</h3>
            <Divider />
            <div
              style={{
                marginTop: 20
              }}
            >
              <div>{intl.formatMessage(messages.title)}</div>
              <div>{intl.formatMessage(messages.description)}</div>
            </div>
            <Row align="middle">
              <Col span={8}>
                <Title content={intl.formatMessage({ id: 'website.text.14' })} />
                <Title content={intl.formatMessage({ id: 'website.text.15' })} />
                {intl.formatMessage({ id: 'website.text.16' })}
                <Title content={intl.formatMessage({ id: 'website.text.17' })} />
                {intl.formatMessage({ id: 'website.text.18' })}
              </Col>
              <Col span={16}>
                <DescriptionImage
                  src={HELP_IMAGES.defaultExtensionPopup}
                  style={{
                    height: 250
                  }}
                />
                <DescriptionImage
                  src={HELP_IMAGES.defaultExtensionHome}
                  style={{
                    height: 250
                  }}
                />
              </Col>
            </Row>
            <Divider />
            <section>
              <Title content={intl.formatMessage({ id: 'website.text.19' })} />
              {intl.formatMessage({ id: 'website.text.20' })}
            </section>
            <Swiper
              // @ts-ignore
              navigation
              modules={[Navigation]}
              onSlideChange={() => console.log('slide change')}
              onSwiper={swiper => console.log(swiper)}
            >
              <SwiperSlide>
                <ImageCard
                  src={
                    SCREEN_SHOT_IMAGES_WITH_LOCALE.linkedin[locale] ?? SCREEN_SHOT_IMAGES_WITH_LOCALE.linkedin.default
                  }
                  description={
                    <a href={LINKEDIN_OFFICIAL_WEB_ADDRESS} target="_blank">
                      LinkedIn
                    </a>
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <ImageCard
                  src={
                    SCREEN_SHOT_IMAGES_WITH_LOCALE.freelancer[locale] ??
                    SCREEN_SHOT_IMAGES_WITH_LOCALE.freelancer.default
                  }
                  description={
                    <a href={FREELANCER_OFFICIAL_WEB_ADDRESS} target="_blank">
                      freelancer
                    </a>
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <ImageCard
                  src={SCREEN_SHOT_IMAGES_WITH_LOCALE.upwork[locale] ?? SCREEN_SHOT_IMAGES_WITH_LOCALE.upwork.default}
                  description={
                    <a href={UPWORK_OFFICIAL_WEB_ADDRESS} target="_blank">
                      upwork
                    </a>
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <ImageCard
                  src={
                    SCREEN_SHOT_IMAGES_WITH_LOCALE.web3Career[locale] ??
                    SCREEN_SHOT_IMAGES_WITH_LOCALE.web3Career.default
                  }
                  description={
                    <a href={WEB3_CAREER_OFFICIAL_WEB_ADDRESS} target="_blank">
                      web3.career
                    </a>
                  }
                />
              </SwiperSlide>
            </Swiper>
            <Divider />
            <section>
              <h4>{intl.formatMessage(messages.webs)}: LinkedIn/Upwork/Freelancer/web3.career</h4>
            </section>
            <section>
              <div>{intl.formatMessage(messages.info)}</div>
            </section>
          </CardContent>
        </Card>

        <section>
          <div
            style={{
              padding: '12px 0',
              color: 'gray'
            }}
          >
            {intl.formatMessage(messages.help)} madison.mh.ma@gmail.com
          </div>
        </section>
      </CardContent>
    </div>
  );
};

export default Support;
