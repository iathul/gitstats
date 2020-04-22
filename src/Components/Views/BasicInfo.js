import React from "react";

function BasicInformation(props) {

  if (Object.keys(props.basicInfo).length === 0) {
    return <div>Loading....</div>
  }

  let userInfo = props.basicInfo.data.user
  let calculateData = props.aggregateData



  return (
    <section className="pt-5 text-center">
      <div className="card p-4">
        <div className="row">
          <div className="left-image-avtar">
            <div className="member-image">
              <img src={userInfo.avatarUrl} alt={userInfo.login} />
            </div>
          </div>
          <div className="col-sm-5 text-left">
            <div className="user-details pl-2">
              <h2 className="font-size-21 mb-3 ">{userInfo.name} {userInfo.isDeveloperProgramMember ? <img style={{ width: 15 }} alt="DeveloperProgramMember" src={process.env.PUBLIC_URL + "/img/official.png"} /> : ""}</h2>
              <p className="font-size-13 mb-1">{userInfo.bio}</p>
              <p className="font-size-13 mb-1">
                <i className="fa fa-envelope-o email" aria-hidden="true"></i>
                {userInfo.email ? userInfo.email : "No email added"}
              </p>
              <p className="font-size-13 mb-1">
                <i className="fa fa-github git-icon" aria-hidden="true"></i>
                <a className="text-dark" target="_blank" rel="noopener noreferrer" href={userInfo.url}>
                  {userInfo.login}
                </a>
              </p>
              <p className="font-size-13 mb-1">
                <i className="fa fa-map-marker git-icon" aria-hidden="true"></i>
                {userInfo.location}
              </p>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="d-flex follow-details justify-content-end text-right">
              <div>
                Followers  <img src={process.env.PUBLIC_URL + "/img/octocat.png"} alt="git" />
                <p className="font-size-12 mb-0 mt-1 total-badge">
                  {userInfo.followers.totalCount}
                </p>
              </div>
              <div className="ml-5">
                <span>Following</span>  <img src={process.env.PUBLIC_URL + "/img/octocat.png"} alt="git" />
                <p className="font-size-12 mb-0 mt-1 total-badge">
                  {userInfo.following.totalCount}
                </p>
              </div>

              <div className="ml-5">
                <span>Repository</span>  <img src={process.env.PUBLIC_URL + "/img/octocat.png"} alt="git" />
                <p className="font-size-12 mb-0 mt-1 total-badge">
                  {userInfo.repositories.totalCount}
                </p>
              </div>
            </div>
            <ul className="p-0 m-0 list-unstyled d-flex justify-content-end font-size-12 mt-4">
              <li className="mr-3">
                <i
                  style={{ color: "#FF9800" }}
                  className="fa fa-comment"
                  aria-hidden="true"
                ></i>
           Total Commit : <span className="font-weight-bold">{calculateData.totalCommit}</span>
              </li>
              <li>
                <i
                  style={{ color: "#00BCD4" }}
                  className="fa fa-star"
                  aria-hidden="true"
                ></i>
           Total Star : <span className="font-weight-bold">{calculateData.totalStar}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicInformation;