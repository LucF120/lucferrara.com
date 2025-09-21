export default function JobInfo({logo, company, title, startDate, endDate, description }) {
    return (
        <div className="pt-4 d-flex flex-row align-items-start">
            <img src={logo} style={{ width: '60px', height: '60px' }}/>
            <div className="d-flex flex-column gap-0 ps-4 text-start">
                <h5 className="m-0">{company}</h5>
                <p className="m-0">{title}</p>
                <p className="m-0">{startDate} - {endDate}</p>
                {description && <ul>
                    {description.map((desc) => (
                        <li>{desc}</li>
                    ))}
                </ul>}
            </div>
        </div>
    );
}