import React from "react";
import Company from './Company';
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

interface IProject {
    name: string;
    start: string;
    end?: string;
    keywords: string[];
    company: Company;
    achievements: IAchievement[];
    descriptions: string;
    challengeAndSolutions: IChallengeAndSolution[];
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

    constructor({name, challengeAndSolutions, descriptions, achievements, keywords, start, end}: IProject) {
        super();
        this.name = new EditText(name, 'input', '项目名称').setParent(this);
        this.times = new Times(start, end).setParent(this);
        this.descriptions = new Description(descriptions, 'input', '项目简介').setParent(this);
        this.achievements = new ArrayData<Achievement>(
            achievements?.map(a => new Achievement(a?.text, a?.categories).setParent(this)),
            Achievement,
        ).setParent(this);
        this.challengeAndSolutions = new ArrayData<ChallengeAndSolution>(
            challengeAndSolutions?.map(e => new ChallengeAndSolution(e?.challenge, e?.solution).setParent(this)),
            ChallengeAndSolution
        );
        this.keywords = new Keywords(keywords).setParent(this);
    }

    View = () => {
        return (
            <Container>
                <Content>
                    <div>
                        <Name>
                            <this.name.Show/>
                        </Name>
                        <span
                            style={{
                                fontSize: 22,
                                marginLeft: 10
                            }}
                        >
                            <this.keywords.Show/>
                    </span>
                    </div>
                    <div>
                        <this.times.Show/>
                    </div>
                </Content>
                <Descriptions>
                    <this.descriptions.Show/>
                </Descriptions>
                <div>
                    <ul>
                        <this.challengeAndSolutions.Show/>
                    </ul>
                </div>
                {this.achievements?.data?.length > 0 && (
                    <>
                        <div>
                            <div style={{
                                fontWeight: "bold",
                                fontSize: 'var(--base-font-size-middle)'
                            }}>Achievements :
                            </div>
                            <ul style={{
                                fontSize: 'var(--base-font-size-middle)',
                            }}>
                                <this.achievements.Show/>
                            </ul>
                        </div>
                    </>
                )}
            </Container>
        )
    }
}

export default Project
