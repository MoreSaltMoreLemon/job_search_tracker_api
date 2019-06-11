# job_search_tracker

project to replace Flatiron's provided spreadsheet job search tracker

## Feature Buildout

### Pages
* User Profile
  * edit button
  * avatar
  * name
  * password
  * email
* Contacts
  * LinkedIn search with autosuggest via API
  * Save contact profile
  * Go to LinkedIn
  * Profile & History
    * avatar
    * name
    * company
    * LinkedIn link
    * contact history:
      * date of contact
      * method of contact
      * stage: 
        * network
        * informational interview
        * apply
        * interview stages: scheduled | completed | followup | thank-you note
          * tech screening
          * phone screening
          * project | code challenge
          * first interview
          * second interview
          * third interview
          * in-house interview
        * offer
          * received
          * negotiated
          * accepted
      * source
      * job ad
      * job title
      * notes
      * next step
        * complete?
      * status
      * followup reminder
  * Brand Development Dashboard
    * set goals
    * graph for trends over time
    * Twitter Activity
      * integrate with twitter API
        * number of tweets
        * number of retweets
    * Blog Posts
  * Job Search Strategy
    * set goals for n outreaches per week, blog posts & commits
    * toDo list based upon set goals + followups and recommended next actions
      * current queue + stack of stuff to do
  * Calendar
    * scheduled meetups
      * potential/recommended meetups
    * 

* Opportunity Creation
  * Meetups
    * Search Meetup API
      * Search for meetups
      * Search for meetup attendees
        * Cross reference attendees with LinkedIn profiles


# Project Challenges
* Test all the things. Target: 100% code coverage
* Using multiple APIs & Oauth


# Models
User -< Contact -< History

User:
  - name
  - username
  - email
  - password
  - linkedIn Auth token
    - linkedIn_ClientID
    - linkedIn_ClientSecret
    - scope parameters (for refresh, and allows users to be updated if their current scope is less than current required access)
  - meetup OAuth
    - meetup_ClientID
    - meetup_ClientSecret
  - GitHub OAuth
    -gitHub_ClientID
    -gitHub_ClientSecret
  - Resumes
    - resume_link
    - resume_version
    - change_notes
  - Elevator Pitch
  - Personal Bio

Reminders
  - date_created
  - remind_on/at
  - reminder_type
  - reminder_summary
  
Contact 
  - linkedIn id
  - meetup id
  - name
  - phone
  - email
  - avatar_img
  - company
  - notes
  - met at

Company
  - linkedIn id
  - name
  - phone
  - email
  - avatar_img
  - leadership
    - linkedIn profile info
  - contacts with company
    - linkedIn profile info
  - mission statement
  - values
    - value_name
    - value_description
    - person_story_related_to_value
  - research_links
    - research_url
    - research_summary/notes
  - 
  
History
  - date_created
  - date_modified
  - date
  - category_id
  - stage_id
  - notes
  - next_step_id
  - reminder_date_time
  - thank_you_note_sent?
  - thank_you_note_reminder

LinkedIn Oath process:
- Configure application to get the Client ID and Client Secret.
- Application directs the browser to LinkedIn's OAuth 2.0 authorization page where the member authenticates. After authentication, LinkedIn's authorization server passes an authorization code to your application.
- Application sends this code to LinkedIn and LinkedIn returns an access token.
- Application uses this token to call APIs on behalf of the member.