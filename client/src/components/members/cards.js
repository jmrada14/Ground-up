import React from "react"
function MemberCard(props) {
    return (
        <div className="card">
            <div className="content">
                <ul>
                    <li>
                        <strong>Name: {props.name}</strong>
                    </li>
                    <li>
                        <strong>State: {props.state}</strong>
                    </li>
                    <li>
                        <strong>Chamber: {props.chamber}</strong>
                    </li>
                    <li>
                        <strong>Party: {props.party}</strong>
                    </li>
                    <li>
                        <strong>Social media:</strong>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MemberCard;
