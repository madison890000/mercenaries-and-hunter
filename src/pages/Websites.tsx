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
