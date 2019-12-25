import React from 'react'
import './resume.css'
import Lang from './languagesComponent/Lang'
function Resume(props) {
    if (props.error === true) {
        return <div className="error-message">Please check your Username</div>
    }

    if (props.loading || props.error === true || props.userData === undefined) {
        return null

    }
    const langArray = [];
    props.userData.data.user.topRepositories.nodes.forEach((repo) => { langArray.push(repo.languages.edges.map((lang) => { return lang.node.name })) })
    return (

        <div className="description">

            <span className="user-name">{props.userData.data.user.name}</span>
            <span className="user-bio">{props.userData.data.user.bio}</span>
            <span><a className="user-url" href={props.userData.data.user.url}>{props.userData.data.user.url}</a></span>
            <p className="user-description">On Github since {props.userData.data.user.createdAt.substring(0, 10)}, {props.userData.data.user.name} is a developer based in {props.userData.data.user.location}, with {props.userData.data.user.topRepositories.totalCount} repositories and {props.userData.data.user.followers.totalCount} followers  </p>
            <div className="user-langauages">
                <Lang props={langArray} />
            </div>
            <div className="user-repos">
                <h2>Popular Repositories</h2>
                {
                    props.userData.data.user.topRepositories.nodes.map((repo) => {
                        return (
                            <div className="user-repo" key={repo.name} >
                                <div className="repos-header">
                                    <span className="repo-title">{repo.name}</span>
                                    <span className="repo-date">{`[${repo.createdAt.substring(0, 10)}]-[${repo.updatedAt.substring(0, 10)}]`}</span>
                                </div>
                                <div className="repo-lang">
                                    {repo.languages.edges.map((lang) => { return <span className="repo-lang-used" key={lang.node.name}>{lang.node.name}</span> })}
                                </div>
                                <div className="repo-description">
                                    <p>This repositry has {repo.forkCount} forks. if you would like more information about this repository and my contributed code, please visit <a href={repo.url}>{repo.name}</a> on Github</p>
                                </div>

                                <hr></hr>
                            </div>

                        )
                    })
                }
            </div>

        </div>
    )

}

export default Resume
