The following are instructions to start understanding and contributing to this project.

NOTE: All new development should be done using Typescript were possible.

Firstly, simply run `npm i` to install the project's packages\*. After this finishes successfully, choose the most appropriate from the options below:

# Option 1 - Starting Demo Mode (FE Only)

This is the easiest and quickest way to get working on the project. This is suggest for those devs that would like to focus their contributions on the Frontend.

Create a `.env` file in the root of the cloned project and add the following text within it:

-   REACT_APP_OFFLINE_ONLY=true
-   REACT_APP_POPULATE_FAKE_DATA=true
-   REACT_APP_DEMO_MODE=true
-   REACT_APP_DEMO_PROFILE_PICTURES_BUCKET_NAME=platelet-demo-profilepics
-   REACT_APP_DEMO_PROFILE_PICTURES_BUCKET_REGION=eu-west-1
-   REACT_APP_GOOGLE_MAPS_API_KEY=<optional>

The maps API key here can be provisioned on Google Cloud, but it isn't essential to functionality. Unless you are tackling tasks directly connected with the maps representation within the system, this can be safely ignored.

With this in place, simple run `npm run start`. This should start the project in your browsers with mock data. If errors referencing 'aws-exports' block your view, feel free to dismiss them as they are related to the nature of the demo mode.

# Option 2 - Provisioning a backend on AWS Amplify

This approach allows contributions to the backend system as well, while still being relatively straight forward to set up.

1. Set up or login to your [AWS account](https://aws.amazon.com/profile)
2. Make sure you have the (aws-cli installed )[https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html]
3. Return to your cloned repository and run `aws configure`. Credentials should be obtainable from (here)[https://us-east-1.console.aws.amazon.com/iam/home?region=eu-north-1#/security_credentials] after you have logged in to your account. Your might need to create an access key if this you don't already have one.
    - Select the region closest to you and `json` as the default output format.
4. Confirm that AWS Amplify cli is installed. It is added as a devdependency, but to use this, you must add `npx` before every amplify command. To avoid this, simply install amplify globally `npm install -g @aws-amplify/cli`.
5. Run `amplify init` and enter the same information entered in your `aws configure` step.
6. Run `amplify push`

<!-- 5. Go to AWS Amplify, and deploy a new application. This application should link to your forked repository of Platelet
   TODO continue this section -->

# Option 3 - Using a Tenant API

This requires a lot more set up, but it provides an environment closest to production. Suggested for contributers looking to work in the backend on more holistic changes, this would require help from current contributers to set up. Let us know if you would like to pursue this approach.

\*Note about `npm i`

-   One of the dependencies of this project is (canvas)[https://www.npmjs.com/package/canvas]. This package has some native components, and so might require further setup on your system before it will work. Please follow the guide in the provided link to the package if `npm i` fails citing errors with `node-gyp`.
