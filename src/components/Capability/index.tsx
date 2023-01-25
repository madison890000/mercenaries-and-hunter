import ReactEcharts from 'echarts-for-react';

const LINE_STYLE = {
    width: 4,
    opacity: 0.5
};
const getOptions = (capabilities: any) => ({
    radar: {
        indicator: [
            {
                name: 'Problem Solving',
                max: 10
            },
            {
                name: 'Data\n Structure',
                max: 10
            },
            {
                name: 'Algorithm',
                max: 10
            },
            {
                name: 'Communicating',
                max: 10
            },
            {
                name: 'Engineering',
                max: 10
            },
            {
                name: 'Passion',
                max: 10
            }
        ],
        shape: 'circle',
        splitNumber: 1,
        axisName: {
            color: 'black'
        },
        splitLine: {
            lineStyle: {
                color: [
                    'rgba(238, 197, 102, 0.1)',
                    'rgba(238, 197, 102, 0.2)',
                    'rgba(238, 197, 102, 0.4)',
                    'rgba(238, 197, 102, 0.6)',
                    'rgba(238, 197, 102, 0.8)',
                    'rgba(238, 197, 102, 1)'
                ].reverse()
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(238, 197, 102, 0.5)'
            }
        }
    },
    series: [
        {
            name: 'Madison',
            type: 'radar',
            lineStyle: LINE_STYLE,
            data: [
                [
                    capabilities.problemSolving,
                    capabilities.dataStructure,
                    capabilities.algorithm,
                    capabilities.communicate,
                    capabilities.engineer,
                    capabilities.passion
                ]
            ],
            symbol: 'none',
            itemStyle: {
                color: '#F9713C'
            },
            areaStyle: {
                opacity: 0.1
            }
        }
    ]
});
const Capability = ({ capabilities }: any) => {
    return (
        <ReactEcharts
            option={getOptions(capabilities)}
            notMerge={true}
            lazyUpdate={true}
            style={{
                width: '100%',
                height: '220px'
            }}
        />
    );
};

export default Capability;
