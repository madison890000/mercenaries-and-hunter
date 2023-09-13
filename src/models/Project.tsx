import React from "react";
import Base from './Base';
import EditText from './EditText';
import Times from './Times';
import Description from "./Description";
import Achievement from "./Achievement";
import ChallengeAndSolution from "./ChallengeAndSolution";
import styled from "styled-components";
import {IAchievement, IChallengeAndSolution} from "./types";
import Keywords from "./Keywords";
import ArrayData from "./ArrayData";
import {Col, Row} from "antd";
import {nonenumerable} from "core-decorators";
import {formatAndTranslateResume} from "../services/mh";

export interface IProject {
    name: string;
    start: string;
    end?: string;
    keywords: string[];
    achievements: IAchievement[];
    descriptions: string;
    challengeAndSolutions: IChallengeAndSolution[];
    isHidden?: boolean;
}

const Container = styled.div`
  background: var(--period-background-color);
  padding: 12px;
  grid-row: 2;
  border-radius: 4px;
  margin-bottom: 20px;
`
const Content = styled.div`
  border-radius: var(--base-border-radius);
  display: flex;
  justify-content: space-between;
  font-size: var(--base-font-size-large)
`

const Name = styled.span`
  margin: var(--base-gap);
  font-size: var(--base-font-size-large);
`

const Descriptions = styled.div`
  margin: 12px;
  font-size: var(--base-font-size-large);
`

class Project extends Base {
    public name: EditText;
    public keywords: Keywords;
    public achievements: ArrayData<Achievement>;
    public descriptions: Description;
    public challengeAndSolutions: ArrayData<ChallengeAndSolution>;
    private times: Times;

    constructor({name, challengeAndSolutions, descriptions, achievements, keywords, start, end, isHidden}: IProject) {
        super();
        this.name = new EditText(name, 'input', '项目名称').setParent(this);
        this.times = new Times(start, end, 'month').setParent(this);
        this.descriptions = new Description(descriptions, 'textarea', '项目简介').setParent(this);
        this.achievements = new ArrayData<Achievement>(
            achievements?.map(a => new Achievement(a?.text, a?.categories, a?.isHidden).setParent(this)),
            () => new Achievement('', [])
        ).setParent(this);
        this.challengeAndSolutions = new ArrayData<ChallengeAndSolution>(
            challengeAndSolutions?.map(e => new ChallengeAndSolution(e?.challenge, e?.solution, e?.isHidden).setParent(this)),
            () => new ChallengeAndSolution()
            , false).setParent(this);
        this.keywords = new Keywords(keywords).setParent(this);
        this.canTranslate = true;
        this.showName = '项目';
        this.showEditButton = true;
        this.isHidden = isHidden;
        this.canHidden = true;
    }

    View = () => {
        const Name = this.name.Show;
        const Keywords = this.keywords.Show;
        const Times = this.times.Show;
        const DescriptionsShow = this.descriptions.Show;
        const ChallengeAndSolutions = this.challengeAndSolutions.Show;
        const Achievements = this.achievements.Show;
        return (
            <Container>
                <Content>
                    <Name/>
                    <span style={{marginLeft: 10}}>
                            <Keywords/>
                        </span>
                    <div>
                        <Times/>
                    </div>
                </Content>
                <Descriptions>
                    <DescriptionsShow/>
                </Descriptions>
                <div>
                    <ul>
                        <ChallengeAndSolutions/>
                    </ul>
                </div>
                {this.achievements?.data?.length > 0 && (
                    <>
                        <div>
                            {
                                this.isPreview && (
                                    <div style={{
                                        fontWeight: "bold",
                                        fontSize: 'var(--base-font-size-middle)'
                                    }}>Achievements :
                                    </div>
                                )
                            }
                            <ul style={{
                                fontSize: 'var(--base-font-size-middle)',
                            }}>
                                <Achievements/>
                            </ul>
                        </div>
                    </>
                )}
            </Container>
        )
    }
    Edit = () => {
        const Name = this.name.Show;
        const Keywords = this.keywords.Show;
        const Times = this.times.Show;
        const DescriptionsShow = this.descriptions.Show;
        const ChallengeAndSolutions = this.challengeAndSolutions.Show;
        const Achievements = this.achievements.Show;
        return (
            <Container>
                <Row gutter={12}>
                    <Col>
                        <Name/>
                    </Col>
                    <Col>
                        <Keywords/>
                    </Col>
                    <Col>
                        <Times/>
                    </Col>
                </Row>
                <Descriptions>
                    <DescriptionsShow/>
                </Descriptions>
                <div>
                    <ul>
                        <ChallengeAndSolutions/>
                    </ul>
                </div>
                {this.achievements?.data?.length > 0 && (
                    <>
                        <div>
                            <ul style={{
                                fontSize: 'var(--base-font-size-middle)',
                            }}>
                                <Achievements/>
                            </ul>
                        </div>
                    </>
                )}
            </Container>
        )
    }

    toJSON() {
        const json = {
            ...this,
            start: this.times.start,
            end: this.times.end,
        }
        // @ts-ignore
        delete json.times;
        return json
    }

    @nonenumerable
    onTranslate = async () => {
        const data = await formatAndTranslateResume(this.toTranslate());
        this.updateTranslate(data)
    }

    toTranslate() {
        return {
            achievements: this.achievements,
            challengeAndSolutions: this.challengeAndSolutions,
            descriptions: this.descriptions,
            name: this.name
        }
    }

    updateTranslate(d: any) {
        this.descriptions.text.text = d?.descriptions;
        this.name.text = d?.name;
        this.achievements?.data?.forEach((j, index) => {
            j.updateTranslate(d?.achievements?.[index]);
        });
        this.challengeAndSolutions?.data?.forEach((j, index) => {
            j.updateTranslate(d?.challengeAndSolutions[index]);
        });
    }

    toResume() {
        return {
            descriptions: this.descriptions,
            // achievements: this.achievements,
            // challengeAndSolutions: this.challengeAndSolutions.data.map(e => e?.toResume()),
        }
    }
}

export default Project
