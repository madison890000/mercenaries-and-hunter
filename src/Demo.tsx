import Achievement from "./components/Achievement/Achievement";
import DemoData from "./data.json";
import StringWithID from "./models/StringWithID";
import {BaseInfo, Divider, Education, Skill, Tag, Times} from "./components";
import DataModel from "./models/types";
import TimeLineItem from "./components/TimeLines/TimeLineItem";

const Demo = () => {
    const education = DemoData.educations[0];
    const baseInfo = DemoData.baseInfo;
    return (
        <div style={{
            padding: 40
        }}>
            <Divider title="Components"/>
            <Divider title="Divider"/>
            <div>
                <Divider title="a" variant='dash'/>
                <Divider title="a" variant='v'/>
                <Divider title="a"/>
            </div>
            <Divider title="Achievement"/>
            <div>
                <Achievement
                    categories={[
                        new StringWithID(DemoData.periods[0].achievements[0].categories[0])
                    ]}
                    title={DemoData.periods[0].achievements[0].text}
                />
            </div>
            <Divider title="Education"/>
            <div>
                <Education
                    college={education.college}
                    degree={DataModel.Degree.MASTER}
                    major={education.major}
                    start={new Date(education.start)}
                    end={new Date(education.end)}
                />
            </div>
            <Divider title="BaseInfo"/>
            <div>
                <BaseInfo
                    cellphone={baseInfo.cellphone}
                    email={baseInfo.email}
                    firstName={baseInfo.firstName}
                    lastName={baseInfo.lastName}
                />
            </div>
            <Divider title="Skill"/>
            <div>
                <Skill
                    name={'test'}
                    level={DataModel.SkillLevel.familiar}
                    ages={5}
                    importance={DataModel.Importance.Advanced}
                />
                <Skill
                    name={'test'}
                    level={DataModel.SkillLevel.proficient}
                    ages={5}
                    importance={DataModel.Importance.Advanced}
                />
                <Skill
                    name={'test'}
                    level={DataModel.SkillLevel.understand}
                    ages={5}
                    importance={DataModel.Importance.Advanced}
                />
                <Skill
                    name={'test'}
                    level={DataModel.SkillLevel.familiar}
                    ages={5}
                    importance={DataModel.Importance.Essential}
                />
                <Skill
                    name={'test'}
                    level={DataModel.SkillLevel.proficient}
                    ages={5}
                    importance={DataModel.Importance.Essential}
                />
                <Skill
                    name={'test'}
                    level={DataModel.SkillLevel.understand}
                    ages={5}
                    importance={DataModel.Importance.Essential}
                />
            </div>
            <Divider title="Tag"/>
            <div>
                <Tag type="filled">test</Tag>
                <Tag type="normal">test</Tag>
                <Tag type="less">test</Tag>
            </div>
            <Divider title="TimeLineItem"/>
            <div>
                <TimeLineItem
                    start={new Date('2012-09-01T00:00:00Z')}
                    periodColor={'red'}
                    end={new Date('2015-07-01T00:00:00Z')}
                />
                <TimeLineItem
                    start={new Date('2012-09-01T00:00:00Z')}
                    periodColor={'green'}
                    end={new Date('2015-07-01T00:00:00Z')}
                />
                <TimeLineItem
                    start={new Date('2012-09-01T00:00:00Z')}
                    periodColor={'gray'}
                    end={new Date('2015-07-01T00:00:00Z')}
                />
                <TimeLineItem
                    start={new Date('2022-09-01T00:00:00Z')}
                    periodColor={'blue'}
                />
            </div>
            <Divider title="Times"/>
            <div>
                <Times
                    start={new Date('2022-09-01T00:00:00Z')}
                    end={new Date('2022-09-01T00:00:00Z')}
                />
                <Times
                    variant={'month'}
                    start={new Date('2021-09-01T00:00:00Z')}
                    end={new Date('2022-09-01T00:00:00Z')}
                />
            </div>
        </div>
    )
}

export default Demo