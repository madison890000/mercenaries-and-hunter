import Tag from '../Tag';
import React from 'react';
import capitalize from '../../utils/capitalize';
import pipe from '../../utils/pipe';
import {addPeriodSuffix} from '../../utils/suffix';

interface AchievementProps {
    title: string;
    categories: string[];
}

const Achievement = ({title, categories}: AchievementProps) => (
    <li>
        {pipe<string>(capitalize, addPeriodSuffix)(title)}
        <span>
            {categories?.map(c => (
                <Tag key={c}>{c.toString()}</Tag>
            ))}
        </span>
    </li>
);

export default Achievement;
