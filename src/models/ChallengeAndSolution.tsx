import Base from "./Base";
import Description from "./Description";

class ChallengeAndSolution extends Base {
    public solution: Description;
    public challenge: Description;

    constructor(challenge: string = '', solution: string = '') {
        super();
        this.challenge = new Description(challenge, 'textarea', '挑战', '请输入遇到的挑战').setParent(this);
        this.solution = new Description(solution, 'textarea', '解决方法', '您是怎么解决的').setParent(this);
    }

    View = () => {
        return (
            <li
                style={{
                    fontSize: 'var(--base-font-size-middle)'
                }}
            >
                <div style={{
                    fontWeight: 'bold'
                }}>
                    <this.challenge.Show/>
                </div>
                <div>
                    <this.solution.Show/>
                </div>
            </li>
        )
    }

    updateTranslate(challengeAndSolution: any) {
        this.challenge.text.text = challengeAndSolution?.challenge;
        this.solution.text.text = challengeAndSolution?.solution;
    }
}

export default ChallengeAndSolution