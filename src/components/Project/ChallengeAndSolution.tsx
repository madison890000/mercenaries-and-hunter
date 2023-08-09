import capitalize from '../../utils/capitalize';

interface ChallengeAndSolutionProps {
    challenge: string;
    solution: string;
}

const ChallengeAndSolution = ({challenge, solution}: ChallengeAndSolutionProps) => {
    return (
        <li
            style={{
                fontSize: 16
            }}
        >
            <div>
                <span style={{
                    fontWeight: 'bold'
                }}>{capitalize(challenge)}</span>
            </div>
            <div
                style={{
                    // fontStyle: 'italic',
                    // fontWeight: 'bold'
                }}
            >
                <span>{capitalize(solution)}</span>
            </div>
        </li>
    );
};

export default ChallengeAndSolution;
