import capitalize from '../../utils/capitalize';

interface ChallengeAndSolutionProps {
    challenge: string;
    solution: string;
}

const ChallengeAndSolution = ({ challenge, solution }: ChallengeAndSolutionProps) => {
    return (
        <li
            style={{
                fontSize: 14
            }}
        >
            <div>
                <span>{capitalize(challenge)}</span>
            </div>
            <div
                style={{
                    fontStyle: 'italic',
                    fontWeight: 'normal'
                }}
            >
                <span>{capitalize(solution)}</span>
            </div>
        </li>
    );
};

export default ChallengeAndSolution;
