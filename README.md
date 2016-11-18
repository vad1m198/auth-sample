## Features to implement
- login with bitbucket `done`
- on home page show user name  `done`
- show my teams `done`
- show teams repos `done`
- show repos commits `done`
- when user login, user should see all teams in different sections - `done`
- in each team section user can select a teammate and see his commits to team repositories `done`

- When user login he should see greeting Hello %bb_user_display_name% `done`
- User should select role from dropdown (admin, member, contributor) `done`
- All available teams should be shown as blocks in a row and user can select needed team `done`
- When team is selected 'Show Team' button should appear `done`
- When user click 'Show Team' button new page should be opened `done`
- in section we should show all available team members `done`
- in another section we should show all available projects `done`


## Description
- Now when user login he can see only teams where user is a member
- User can see all team members of available teams
- User can see all repositories related to available teams (project data can be found on repository object)
- User can see all commits made to available repositories from previous point

- API can return only 10 teams per one request
- API can return only 50 team members per one request
- API can return only 10 repositories per one request
- API can return only 30 commits per one request

