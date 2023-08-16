import React from 'react';

interface MonthRectProps {
    index: number;
    width: number;
    color?: string;
    gap: number;
    variant?: 'h' | 'v';
}

const MonthRect = ({ variant = 'h', gap, color, index, width }: MonthRectProps) => {
    if (variant === 'v') {
        return <rect width={width} height="10" x={0} y={index * (width + gap)} fill={color} />;
    }
    return <rect width={width} height="10" x={index * (width + gap)} y="5" fill={color} />;
};

export default MonthRect;
