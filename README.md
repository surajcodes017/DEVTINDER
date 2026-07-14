# DEV TINDER Front End

- create a Vite + React application
- Make it as git Repository
- Remove unnecessary codes and files
- Install Tailwind CSS
- Install DaisyUI
- Add NavBar components to App.jsx 
- create NavBar.jsx seperate File
- setting up routing
- Install React-router-create BrowserRouter->Routes->Route =/Body ->Body Route Children
- create an Outlet on your body component
- create a footer
- create Login page component
- Install axioms for calling backend API's
- Install CORS in backend => add middleware along with confiurations: origin, credentials:true
- Whenever you're making API call , make sure to pass axios  with =>{withCredentials: true }
- Intsall Redux-ToolKit 
- Install redux-react + @reduxjs/toolkit =>  configureStore =>Provider [provide the configured store with Provider] =? createSlice

- Login and see if the data is comming into the redux store properly 
- Navbar should update as soon the user Logs In
- you should not access the other routes without login
- If token is not present , redirect user to login page



# Deployment

- signUp on AWS Account
- Launch instance
- chmod 400 <secret.pem>
- ssh -i "devTinder-key.pem" ubuntu@ec2-3-27-46-211.ap-southeast-2.compute.amazonaws.com   =>  connected to the machine using this ssh command
- Install Node version
- git clone frontend and backend

-FRONTEND
    - npm install -> dependencies installing
    - npm run build
    - sudo apt update
    - sudo apt install nginx
    - sudo systemctl start nginx
    - sudo systemctl enable nginx
    - copy code from dist to /var/www/html/
    - sudo scp -r dist/* /var/www/html/
    - Enable port: 80 of your instance

- BackEnd
    - DB password updated
    - Allowed EC2 instance public IP on MongoDB server
    - npm install pm2 -g
    - pm2 start npm -- start
    - pm2 logs,
    - pm2 list, pm2 flush <name>, pm2 stop <name>, pm2 delete <name>
    - congif nginx = sudo nano /etc/nginx/sites-available/default
    - restart nginx => sudo systemctl restart nginx
    - Modify the BASEURL in frontend project to /api

    FrontEnd => http://3.27.46.211/
    BackEnd => http://3.27.46.211:7777/

    FrontEnd = devtinder.com 
    backend =  devtinder.com:7777 => devtinder/api

    nginx config

    location /api {
        proxy_pass http://127.0.0.1:7777;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }


# Adding a custom Domian Name

    - purchase a domain name from goDaddy
    - sign up on cloud fare
    - change the nameservers on godaddy and point it to cloudfare
    - wait for sometime till your name serves are updated ~ 15 mins
    - DSN Record : A devtinder.in 3.27.46.211
    - Enable ssl for website


# Keeping our credentials safe using .env file

    - create .env file , in that add all your connections strings , jwt secrets, port numbers into that file
    - configure .env file by installing an npm package
    - npm install dotenv --save
    - add the below code line in the top of root file of backend project 
      -require('dotenv').config()
    - in the .gitignore add .env and then push to github
    - now when deploying backend into production , we have to create a dotenv file manually on that place, and our keys will be in this place 

    - for manually creating .env => sudo nano .env
    
# sending Emails Via SES

    - create an IAM User
    - Give Access to AmazonSESFullAccess
    - In Amazon SES: Create an Identity
    - Verify your domain Name
    - Veify your Email Address to send an email when in sandbox
    - Install AWS SDK V3
    - CODE Example=> https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code/ses#code-examples 
    - setUp SES client
    - Go to IAM user , and inside that go security credentials , and in that create access key pair,  and save them in .env file
    - after that in backend download AWS sdk for node , and go to git hub of v3 sdk 
    - set up sesClient and sendEmail in helpers/utils folder
    - make the email dynamic by passing more params to the fucntion


# scheduling cron jobs in Node 

    - installing node-cron npm package
    - Learning about cron-expression syntax , in website called crontab-guru
    - scheding a job
    - date-fns package
    - find all unique email ids , who's status is intrested in prevoius day
    - explore queue mechanisms to send bulk emails
    - Amazon ses bulk emails
    - make send email dynamic
    -bee-queue && bull npm packages for queue mechanism


# Razorpay Payment GateWay Integaration
    - SignUp on Razorpay & complete Kyc
    - Created an UI page for premium
    - created an API for create order in backend
    - Added key id and secret key in .env file
    - Initialized Razorpay in Utils
    - Creating order in Razorpay
    - Created schema and model
    - saved the order in payments collection
    - made the api dynamic
    - setup razorpay webhook on your live API 
    - ref => https://github.com/razorpay/razorpay-node/tree/master/documents
    - ref => https://razorpay.com/docs/payments/server-integration/nodejs/integration-steps/#integrate-with-razorpay-payment-gateway
    - In the backend validate webhook signature ,
    - after your signature got validated , store the status in the dataBase
    - so for that get the details form req.body.payload.payment.entity
    - ref => https://razorpay.com/docs/webhooks/payments/ 

