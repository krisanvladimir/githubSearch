import React from "react"

export const Repos = ({repos}) => (
    <React.Fragment>
        {repos.map(repo => (
            <div className="card nb-3" key={repo.id}>
                <div className="card-body">
                    <h5>
                        <a 
                        href={repo.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer">
                            {repo.name}
                        </a>
                    </h5>
                </div>
            </div>
        ))}
    </React.Fragment>
)

