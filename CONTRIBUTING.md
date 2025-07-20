The following are instructions to start understanding and contributing to this project.

Firstly, simply run `npm i` to install the project's packages. After this finishes successfully, choose the most appropriate from the options below:

# Option 1 - Starting Demo Mode (FE Only)

This is the easiest and quickest way to get working on the project. This is suggest for those devs that would like to focus their contributions on the Frontend.

Create a `.env` file in the root of the cloned project and add the following text within it:

`REACT_APP_OFFLINE_ONLY=true
REACT_APP_POPULATE_FAKE_DATA=true
REACT_APP_DEMO_MODE=true
REACT_APP_DEMO_PROFILE_PICTURES_BUCKET_NAME=platelet-demo-profilepics
REACT_APP_DEMO_PROFILE_PICTURES_BUCKET_REGION=eu-west-1
REACT_APP_GOOGLE_MAPS_API_KEY=<optional>`

The maps API key here can be provisioned on Google Cloud, but it isn't essential to functionality. Unless you are tackling tasks directly connected with the maps representation within the system, this can be safely ignored.

With this in place, simple run `npm run start`. This should start the project in your browsers with mock data. If errors referencing 'aws-exports' block your view, feel free to dismiss them as they are related to the nature of the demo mode.

# Option 2 - Provisioning a backend on AWS Amplify



# Option 3 - Using a Tenant API