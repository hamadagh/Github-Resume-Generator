import React from 'react'
import './resume.css'
import Lang from './languagesComponent/Lang'
function Resume(props) {
    console.log(props)


    if (props.loading) {
        return null

    }
    const langArray = [];
    props.userData.data.user.repositories.nodes.forEach((repo) => { langArray.push(repo.languages.edges.map((lang) => { return lang.node.name })) })
    return (

        <div className="description">

            <span className="user-name">{props.userData.data.user.name}</span>
            <span className="user-bio">{props.userData.data.user.bio}</span>
            <span><a className="user-url" href="#">{props.userData.data.user.url}</a></span>
            <p className="user-description">On Github since {props.userData.data.user.createdAt.substring(0, 10)}, {props.userData.data.user.name} is a developer based in {props.userData.data.user.location}, with {props.userData.data.user.repositories.totalCount} repositories and {props.userData.data.user.followers.totalCount} followers  </p>
            <div className="user-langauages">
                <Lang props={langArray} />
            </div>
            <div className="user-repos">
                <h2>Popular Repositories</h2>
                {
                    props.userData.data.user.repositories.nodes.map((repo) => {
                        return (
                            <div className="user-repo" >
                                <div className="repos-header">
                                    <span className="repo-title">{repo.name}</span>
                                    <span className="repo-date">{`[${repo.createdAt.substring(0, 10)}]-[${repo.updatedAt.substring(0, 10)}]`}</span>
                                </div>
                                <div className="repo-lang">
                                    {repo.languages.edges.map((lang) => { return <span className="repo-lang-used">{lang.node.name}</span> })}
                                </div>
                                <div className="repo-description">
                                    <p>This repositry has [xxx] stars and [xxx] forks. if you would like more information about this repository and my contributed code, please visit <a href={repo.url}>{repo.name}</a> on Github</p>
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
